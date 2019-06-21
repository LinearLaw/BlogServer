
const blogController = require("../controller/blog-controller.js");
const commentController = require("../controller/comment-controller.js");

const express = require("express");
const router = express.Router();


/**
 * @desc blog-service
 */
//user-service


//blog-service
router.post("/reportBlog"   , blogController.reportBlog);
router.get("/getBlogList"   , blogController.getBlogList);
router.get("/getBlogDetail" , blogController.getBlogDetail);
router.get("/deleteBlog"    , blogController.deleteBlog);


//Comment service
router.post("/reportComment"  , commentController.reportComment);
router.post("/deleteComment"  , commentController.deleteComment);
router.get("/getCommentList"  , commentController.getCommentList);


module.exports = router;
