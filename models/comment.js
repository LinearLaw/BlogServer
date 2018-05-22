
/**
 * @desc 评论的Schema
 */
const mongoose = require("mongoose");

const db = require("./db.js");

const commentSchema = new mongoose.Schema({
    commentId:  {   type:String},
    blogId:     {   type:String},
    replyType:  {   type:String},   //blog or comment
    replyId:    {   type:String},   //blogId or commentId
    replyName:  {   type:String},   //if replyType==comment it need

    userId:         {type:String},
    userName:       {type:String},
    commentContent: {type:String},

    updateTime: {type:Number},
    createTime: {type:Number}
})

const Comment = mongoose.model("Comment",commentSchema);

module.exports = Comment;