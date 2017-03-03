/**
 * Created by 志如 on 2017/2/26.
 */

var mongoose = require("mongoose");

//定义用户结构

var userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  taskID:String,
  finishID:String
});

module.exports = mongoose.model('Users',userSchema);
