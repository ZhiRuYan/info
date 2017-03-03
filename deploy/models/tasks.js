/**
 * Created by 志如 on 2017/3/1.
 */
var mongoose = require("mongoose");

var tasksSchema = new mongoose.Schema({
  title:String,
  creater:String,
  num:String,
  taskList:String,
});

module.exports = mongoose.model('Tasks',tasksSchema);
