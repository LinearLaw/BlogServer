
const blogController = require("../controller/blog-controller.js")
/**
 * @desc blog-service 
 */
//user-service


//blog-service
exports.reportBlog = blogController.reportBlog;
exports.getBlogList = blogController.getBlogList;
exports.getBlogDetail = blogController.getBlogDetail;
exports.deleteBlog = blogController.deleteBlog;