
/**
 * 常用的工具函数
 *
 */
var uuid = require('node-uuid');
module.exports = {
    newUuid() {
        return uuid.v1();
    }
}
