// 1、端口
const PORT = 3456;

// 2、db配置
const DB = {
  URL: "mongodb://127.0.0.1:27017/blog",
  OPTIONS: {
    server: {
      poolSize: 10 // 连接池数量
    },
    keepAlive: 120 // keepAlive时间
  }
}


module.exports = {
  PORT,
  DB,
}