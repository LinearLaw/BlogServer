/**
 * @desc blog需要发布文章，获取文章列表，获取文章详情
 *      comment需要对文章进行评论，获取文章的评论列表
 */

const express = require("express");
const app = express();

/**
 * @desc color用于打印带颜色的console提示信息
 */
const color = require('colors-cli');

global.CONFIG = require("./config/config.js");
const ROUTER = require("./router/router.js");





app.use(express.static("./public"));

app.listen(CONFIG.port,()=>{
    /**
     *  green('all right'); ——>正常运行
     *  error('Error!');
        warn('Warning');
        notice('Notice');
     */
    console.log(color.green("服务已就绪，端口号3456"));
})