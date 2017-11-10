/**
 * Created by yuyuanlin on 2017/9/30.
 */
var bookshelf = require('../lib/bookshelf');
const user = bookshelf.Model.extend({
    tableName:'user',
    idAttribute: 'uid',//主键
    hasTimestamps: ['createTime','updateTime'],
    require:true
})
module.exports = user;

