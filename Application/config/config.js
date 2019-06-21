const uuid = require("uuid");

/**
 * [description] uuid生成
 */
const idCreate = {
  //1、基于时间戳生成唯一标识
  appleSignal:function(){
    return uuid.v1();
  },
  //2、基于随机数生成唯一标识
  orangeSignal:function(){
    return uuid.v4();
  }
}
const port = 3456;
const dbUrl = "mongodb://127.0.0.1:27017/blog";
const dbOptions = {
    server:{
      poolSize:10
    },
    keepAlive: 120 
};

module.exports = {
    // 1、端口
    port : port,

    //2、uuid生成
    idCreate:idCreate,

    //3、db配置
    dbUrl:dbUrl,
    dbOptions:dbOptions
}