const Comment = require("../models/comment.js");

const color = require("colors-cli");
const formidable = require("formidable");

exports.reportComment = (req,res)=>{
    console.log(color.green("reportComment收到请求"));
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(!fields.blogId){
            res.send({
                status:2,
                content:"blogId is required"
            })
        }
        if(!fields.userId){
            res.send({
                status:2,
                content:"userId is required"
            })
        }
        if(!fields.userName){
            res.send({
                status:2,
                content:"userName is required"
            })
        }
        if(!fields.commentContent){
            res.send({
                status:2,
                content:"commentContent is required"
            })
        }
        if(fields.replyType && fields.replyType=="comment" && !fields.replyName){
            res.send({
                status:2,
                content:"when comment to a comment ,replyName is required"
            })
        }

        let commentObj = {
            commentId:  CONFIG.idCreate.appleSignal(),
            blogId:     fields.blogId,      //Required
            replyType:  fields.replyType,   //default blog , blog or comment
            replyId:    fields.replyId,     //default blogId , blogId or commentId
            replyName:  fields.replyName,   //if replyType==comment it Required

            userId:         fields.userId,      //Required
            userName:       fields.userName,    //Required
            commentContent: fields.commentContent,  //Required

            updateTime: new Date().getTime(),
            createTime: new Date().getTime(),
        }
        let newComment = new Comment(commentObj);
        newComment.save((err)=>{
            res.send({
                status:1,
                content:success
            })
        })

    })
}

exports.deleteComment = (req,res)=>{
    console.log(color.green("deleteComment收到请求"));
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(!fields.commentId){
            res.send({
                status:2,
                content:"commentId is required"
            })
        }
        if(!fields.userId){
            res.send({
                status:2,
                content:"userId is required"
            })
        }
        let deleteObj = {
            commentId:  fields.commentId,
            userId:     fields.userId
        }
        Comment.find({commentId:deleteObj.commentId},(err,result)=>{
            if(result.length>0){
                if(result[0]["userId"] == deleteObj["userId"]){
                    Comment.remove({commentId:deleteObj.commentId},(err,result)=>{
                        res.send({
                            status:1,
                            content:"success"
                        })
                    })
                }else{
                    res.send({
                        status:3,
                        content:"user no auth , comment cant delete"
                    })
                }
            }else{
                res.send({
                    status:0,
                    content:"No such comment"
                })
            }
        })
    })
}

exports.getCommentList = (req,res)=>{
    console.log(color.green("getCommentList收到请求"));
    
}