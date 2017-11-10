
/**
 * Created by yuyuanlin on 2017/9/30.
 */

var conf = require('../conf/database.json');
var knex = require('knex')({
    client: 'pg',
    connection: conf
});
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;