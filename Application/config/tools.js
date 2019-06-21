const uuid = require("uuid");

/**
 * [description] uuid生成
 */
const idCreate = {
    //1、基于时间戳生成唯一标识
    appleSignal: function () {
        return uuid.v1();
    },
    //2、基于随机数生成唯一标识
    orangeSignal: function () {
        return uuid.v4();
    }
}


module.exports = {
    idCreate
}