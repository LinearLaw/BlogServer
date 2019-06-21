/**
 * @desc 链接服务器
 */

const mongoose = require("mongoose");
const color = require("colors-cli");

mongoose.connect(CONFIG.DB.URL,CONFIG.DB.OPTIONS);

const db = mongoose.connection;

mongoose.set("debug",true);
mongoose.Promise = global.Promise;


db.once("open",(cb)=>{
    console.log(color.green("连接数据库成功。"));
})
db.once("error",(cb)=>{
    console.log(color.error("连接数据库失败。"));
    mongoose.disconnect();
})
db.once("disconnected",(cb)=>{
    console.log(color.error("数据库断开连接。"));
})

module.exports = db;