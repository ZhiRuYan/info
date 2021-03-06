/**
 * Created by ZhiRu on 2/16/2017.
 */

var io = require('socket.io');
//依赖工具
var Promise = require('bluebird');
var _ = require('underscore');


//mongo model
var UserModel = require('../models/users');
var GroupsModel = require('../models/groups');
var TaskModel = require('../models/tasks');
//api接口
var testApi = function () {
  return new Promise(function (resolve, reject) {
    resolve({testData: '测试数据，位于apiservice'});
  });
};

//注册新用户
var register = function (input) {
  return new Promise(function (resolve, reject) {
    var userList = new UserModel({
      name: input.username,
      email: input.email,
      password: input.pass
    });
    UserModel.find({name: input.username}, function (err, docs) {
      if (docs == '') {
        userList.save(function (err) {
          if (err) {
            return reject(err);
          }
          else {
            return resolve({result: '操作成功'});
          }
        }).catch(function (err) {
          return reject(err)
        });
      } else {
        return reject({result: '用户已存在'});
      }
      ;
    });
  })
};


//登录验证
var tryLogin = function (input) {
  return new Promise(function (resolve, reject) {
    var user = input.user;
    var pass = input.password;
    UserModel.find({name: user}, function (err, docs) {
      if (docs != '') {
        if (pass == docs[0].password) {
          resolve({result: '登录成功'});
        } else {
          reject({result: '密码错误'})
        }
      } else {
        return reject({result: '用户不存在'});
      }
    });
  });
};

//新建组群
var createGroup = function (input) {
  var group = new GroupsModel({
    name: input.groupName,
    des: input.groupDes,
    password: input.groupPass,
    creator: input.creator,
  });
  return new Promise(function (resolve, reject) {
    GroupsModel.find({}).sort({'groupID': -1}).limit(1).exec(function (err, docs) {
      if (docs.length == 0) {
        group.groupID = 10000;
      }
      else {
        group.groupID = ++docs[0].groupID;
      }
      group.save(function (err) {
        if (err) {
          return reject(err);
        }
        else {
          return resolve({result: '组群创建成功'});
        }
      }).catch(function (err) {
        return reject(err)
      });
    });
  });
};

//获取组群列表
var getGroupList = function (input) {
  var user = input.user;
  var tmpGroup = [];
  return new Promise(function (resolve, reject) {
    UserModel.find({name: user}, function (err, docs) {
      if (docs[0].joindGroup) {
        tmpGroup = docs[0].joindGroup;
      }
    }).then(function () {
      GroupsModel.find({"$or": [{creator: user}, {groupID: tmpGroup}]}, function (err, docs) {
        if (docs) {
          resolve(docs);
        } else {
          return reject({result: '系统错误'});
        }
      });
    });
  });
};

//获取个人信息
var getMyinfo = function (input) {
  return new Promise(function (resolve, reject) {
    UserModel.find({name: input.user}, function (err, docs) {
     return resolve(docs[0]);
    }).catch(function(err){
      return reject({result: '系统错误'});
    });
  });
};

//更改个人信息
var changeMyinfo = function (input) {
  return new Promise(function (resolve, reject) {
    console.log(input)
    UserModel.update({name: input.user}, {'$set':{email:input.email}},function(err,docs){
      if(err){
        return reject({result: '系统错误'});
      }else{
        return resolve({result: '修改成功'});
      }
    });
  });
};

//解散组群
var releaseGroup = function (input) {
  // var user = input.user;
  return new Promise(function (resolve, reject) {
    var groupID = input.groupID;
    var user = input.user;
    GroupsModel.remove({creator: user, groupID: groupID}, function (err, docs) {
      if (err) {
        return reject({result: '系统错误'});
      }
      return resolve({result: '解散成功'});
    });
  });
};


//退出组群
var exitGroup = function (input) {
  return new Promise(function (resolve, reject) {
    var groupID = String(input.groupID);
    var user = input.user;
    GroupsModel.update({groupID: groupID}, {'$pull': {'members': user}}).then(function () {
      UserModel.update({name: user}, {"$pull": {joindGroup: groupID}}).then(function (res) {
        return resolve({result: '已退出该组群'});
      }).catch(function () {
        return reject({result: '系统错误'});
      });
    });
  });
};

//加入组群
var joinGroup = function (input) {

  return new Promise(function (resolve, reject) {
    var groupID = input.groupID;
    var groupPass = input.groupPass;
    var user = input.user;
    GroupsModel.find({groupID: input.groupID}, function (err, docs) {
      if (docs != '') {
        if (docs[0].password == groupPass) {
          GroupsModel.update({groupID: groupID}, {'$addToSet': {'members': user}})
            .then(function () {
              UserModel.update({name: user}, {'$addToSet': {'joindGroup': groupID}})
                .then(function () {
                  return resolve({result: '加入组群成功'});
                }).catch(function (err) {
                console.log(err)
                return reject({result: '系统错误'});
              });
            });
        } else {
          return reject({result: '组群口令有误'});
        }
      } else if (docs == '') {
        return reject({result: '该组群不存在'});
      } else {
        return reject({result: '系统错误'});
      }
      ;
    });

  });
};

//获取成员列表
var getMemberList = function (input) {
  return new Promise(function (resolve, reject) {
    var groupID = String(input.data);
    GroupsModel.find({groupID: groupID}, function (err, docs) {
      if (err) {
        return reject({result: '系统错误'});
      }
      return resolve(docs[0].members);
      // if (docs[0].members.length == 0) {
      //   return resolve({result: '暂无成员'});
      // } else {
      //   return resolve(docs[0].members);
      // }
    });
  });
};

//从群组中删除成员
var removeMember = function (input) {
  return new Promise(function (resolve, reject) {
    var groupID = String(input.groupID);
    var name = input.name;
    // UserModel.update({name: name}, {'$pull': {'joindGroup': groupID}});
    GroupsModel.update({groupID: groupID}, {'$pull': {'members': name}})
      .then(function (data) {
        UserModel.update({name: name}, {'$pull': {'joindGroup': groupID}})
          .then(function (data) {
            resolve({result: '删除成功'});
          })
          .catch(function (err) {
            reject({result: '系统错误'});
          });
        ;
      })

  });
};

//新建任务
var createTask = function (input) {
  return new Promise(function (resolve, reject) {
    var task = new TaskModel({
      taskName: input.taskName,
      taskDes: input.taskDes,
      taskCreator: input.taskCreator,
      belong: input.belong,
      details: input.details
    });
    TaskModel.find({taskName: input.taskName}, function (err, docs) {
      if (docs == '') {
        task.save(function (err) {
          if (err) {
            return reject(err);
          }
          else {
            return resolve({result: '操作成功'});
          }
        }).catch(function (err) {
          return reject(err)
        });
      } else {
        return reject({result: '该任务名已存在'});
      }
    });

  });
};

//获取任务列表
var getTasksList = function (input) {
  return new Promise(function (resolve, reject) {
    UserModel.find({name: input.user}, function (err, docs) {
      if (err || docs == '') {
        return reject({result: '系统错误'});
      }
      var joinedGroup = docs[0].joindGroup;
      TaskModel.find({"$or": [{taskCreator: input.user}, {belong: joinedGroup}]}, function (err, docs) {
        if (err) {
          return reject({result: '系统错误'});
        }
        return resolve(docs);
      });
    });
  });
};

//删除任务
var removeTask = function (input) {
  return new Promise(function (resolve, reject) {
    TaskModel.remove({taskName: input.taskName}, function (err, docs) {
      if (err) {
        return reject({result: '系统错误'});
      }
      return resolve({result: '操作成功'});
    });
  });
};

//填写任务
var fillInTask = function (input) {
  return new Promise(function (resolve, reject) {
    var pushData = {
      user: input.user
    };
    _.forEach(input.details, function (item) {
      pushData[item.option] = item.value;
    });
    TaskModel.find({taskName: input.taskName}, function (err, docs) {
      if (err) {
        return reject({result: '系统错误'});
      }
      var result = true;
      _.forEach(docs[0].summary, function (item) {
        if (item.user == input.user) {
          result = false;
        }
      });
      if (result) {
        TaskModel.update({taskName: input.taskName}, {'$push': {'summary': pushData}}, function (err, docs) {
          if (err) {
            return reject({result: '系统错误'});
          }
          return resolve({result: '提交成功'});
        });
      } else {
        // return reject({result: '系统错误'});
        return reject({result: '您已提交过，请勿重复提交'});
      }
      ;

    });

  });
};

//导出Excle
var generateExcle = function (input) {
  return new Promise(function (resolve, reject) {
    TaskModel.find({taskName: input.taskName}, function (err, docs) {
      if (err) {
        return reject({result: '系统错误'});
      }
      return resolve(docs);
    });
  });
};

//导出服务函数
module.exports = exports = {
  testApi: testApi,
  register: register,
  tryLogin: tryLogin,
  getMyinfo:getMyinfo,
  changeMyinfo:changeMyinfo,
  createGroup: createGroup,
  getGroupList: getGroupList,
  releaseGroup: releaseGroup,
  joinGroup: joinGroup,
  exitGroup: exitGroup,
  getMemberList: getMemberList,
  removeMember: removeMember,
  createTask: createTask,
  getTasksList: getTasksList,
  removeTask: removeTask,
  fillInTask: fillInTask,
  generateExcle: generateExcle,
}
