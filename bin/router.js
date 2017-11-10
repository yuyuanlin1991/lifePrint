
/**
 * Created by yuyuanlin on 2017/9/29.
 */


function routers(app) {
    app.use('/expense', require('./controller/expense_controller')); //use表示所有的请求都会到这个中间件注意这里的url是一层一层递进的
    app.use('/user', require('./controller/user_controller'));
}


module.exports = routers;