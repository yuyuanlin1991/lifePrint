
/**
 * Created by yuyuanlin on 2017/9/30.
 */
var bookshelf = require('../lib/bookshelf');
const expenseItem = bookshelf.Model.extend({
    tableName: 'expenseItem',
    idAttribute: 'eid',//主键
    hasTimestamps: true,
    require:true
});
module.exports = expenseItem;