/**
 * Created by 志如 on 2017/2/26.
 */
var mongoose = require("mongoose");
var setting = require("../setting");



//连接数据库
mongoose.connect('mongodb://'+setting.host+'/'+setting.db,function(err){
  if(err){
    console.log(err);
    throw err;
  };

  console.log('数据库连接成功');
});

