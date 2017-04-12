/**
 * Created by 志如 on 2017/3/1.
 */
var mongoose = require("mongoose");

var tasksSchema = new mongoose.Schema({
  taskName:String,
  taskCreator:String,
  taskDes:String,
  belong:Number,
  details:Array,
  states:Boolean,
  summary:Array
});

module.exports = mongoose.model('Tasks',tasksSchema);
