/**
 * Created by 志如 on 2017/3/25.
 */
var mongoose = require("mongoose");

//定义组群结构

var groupsSchema = new mongoose.Schema({
  name:String,
  des:String,
  password:String,
  creator:String,
  tasks:Array,
  members:Array,
  groupID:Number
});

module.exports = mongoose.model('Groups',groupsSchema);
