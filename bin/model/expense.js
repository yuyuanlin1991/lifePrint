
/**
 * Created by yuyuanlin on 2017/9/30.
 */
var bookshelf = require('../lib/bookshelf');
const expense = bookshelf.Model.extend({
    tableName: 'expense',
    idAttribute: 'eid',//主键
    hasTimestamps: ['createTime','updateTime'],//可以自动记录数据创建和更新的时间
    require:true
});
module.exports = expense;