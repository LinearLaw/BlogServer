const Blog = require("../models/blog.js");
const color = require('colors-cli');
const formidable = require('formidable');

exports.reportBlog = (req,res)=>{
    console.log(color.green("reportBlog收到请求"));
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(!fields.blogTitle){
            res.send({
                status:2,
                content:"blog title should not be empty"
            })
            return;
        }
        if(!fields.blogContent){
            res.send({
                status:3,
                content:"blog content should not be empty"
            })
            return;
        }
        
        //fields为post body的内容
        let reqObj = {
            blogId:         CONFIG.idCreate.appleSignal(),    //博客id
            blogAuthorId:   "admin",    //作者的userId
            blogTitle:      fields.blogTitle,    //博文标题
            blogContent:    fields.blogContent,    //博文内容
            blogShortContent:    fields.blogContent,    //博文内容
            createTime:     new Date().getTime(),    //创建时间
            updateTime:     new Date().getTime()     //更新时间
        }
        let newUser = new Blog(reqObj); 
        newUser.save(function(err){
            res.send({
                status:1,
                content:"success"
            })
        })
    })
}

/**
 * @desc 获取当前用户所有blog列表
 */
exports.getBlogList = (req,res)=>{
    console.log(color.green("getBlogList收到请求"));
    console.log(req.query);
    if(!req.query.blogAuthorId){
        res.send({
            status:2,
            content:"blog authorId should not be empty",
        });
        return;
    }
    /**
     * params : userId
     */
    Blog.find({"blogAuthorId":req.query.blogAuthorId},(err,result)=>{

        res.send({
            status:1,
            content:"success",
            data:result
        })
    })
}

/**
 * @获取详情
 */
exports.getBlogDetail = (req,res)=>{
    console.log(color.green("getBlogDetail收到请求"));
    if(!req.query.blogId){
        res.send({
            status:2,
            content:"blogId should not be empty",
        });
        return;
    }
    /**
     * params : userId
     */
    Blog.find({"blogId":req.query.blogId},(err,result)=>{
        res.send({
            status:1,
            content:"success",
            data:result[0]
        })
    })
}

exports.deleteBlog = (req,res)=>{
    console.log(color.green("getBlogDetail收到请求"));
    if(!req.query.blogId){
        res.send({
            status:2,
            content:"blogId should not be empty",
        });
        return;
    }
    /**
     * params : userId
     */
    Blog.remove({"blogId":req.query.blogId},(err,result)=>{
        res.send({
            status:1,
            content:"success"
        })
    })
}