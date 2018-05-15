const mongoose = require("mongoose");
const db = require("./db.js");

const blogSchema = new mongoose.Schema({
    blogId:         {   type:String },    //博客id
    blogAuthorId:   {   type:String },    //作者的userId
    blogTitle:      {   type:String },    //博文标题
    blogContent:        {   type:String },    //博文内容
    blogShortContent:        {   type:String },    //博文内容
    createTime:     {   type:Number },    //创建时间
    updateTime:     {   type:Number }     //更新时间
})

const Blog = mongoose.model("Blog",blogSchema);

module.exports = Blog;
