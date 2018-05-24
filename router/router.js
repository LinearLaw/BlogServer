
const blogController = require("../controller/blog-controller.js")
const commentController = require("../controller/comment-controller.js")
/**
 * @desc blog-service 
 */
//user-service


//blog-service
exports.reportBlog = blogController.reportBlog;
exports.getBlogList = blogController.getBlogList;
exports.getBlogDetail = blogController.getBlogDetail;
exports.deleteBlog = blogController.deleteBlog;

//comment-service
exports.reportComment = commentController.reportComment;
exports.deleteComment = commentController.deleteComment;
exports.getCommentList = commentController.getCommentList;
