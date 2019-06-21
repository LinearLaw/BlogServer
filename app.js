/**
 * @desc blog需要发布文章，获取文章列表，获取文章详情
 *      comment需要对文章进行评论，获取文章的评论列表
 */

const express = require("express");
const app = express();

/**
 * @desc 日志，log4js
 */
// const log4js = require("log4js");
// log4js.configure({
//     appenders: [
//       { type: 'console' }, //控制台输出
//       {
//         type: 'file', //文件输出
//         filename: 'Application/logs/access.log', 
//         maxLogSize: 1024,
//         backups:3,
//         category: 'normal' 
//       }
//     ],
//     replaceConsole: true
// });
// const logger = log4js.getLogger('normal');
// logger.setLevel('INFO');


/**
 * @desc color用于打印带颜色的console提示信息
 */
const color = require('colors-cli');

global.CONFIG = require("./Application/config/config.js");
global.TOOLS = require("./Application/config/tools.js")
const ROUTER = require("./Application/router/router.js");

app.use(express.static("./Application/public"));

// app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO}));

//挂载路由
app.use("/",ROUTER);

app.listen(CONFIG.PORT, () => {
    /**
     *  green('all right'); ——>正常运行
     *  error('Error!');
        warn('Warning');
        notice('Notice');
     */
    console.log(color.green("服务已就绪，端口号" + CONFIG.PORT));
})
