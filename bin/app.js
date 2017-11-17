
//express作为后台
var path = require("path");
var express = require('express');
var ejs = require("ejs");
var bodyParser = require('body-parser');
var session = require('express-session');
var cookie = require('cookie-parser');
var app = express();
var routers = require('./router.js');
//app.use 加载用于处理http請求的middleware（中间件），当一个请求来的时候，会依次被这些 middlewares处理,执行的顺序是你定义的顺序
app.use(session({
    name: 'life',
    secret: 'lifeKeyboard',
    cookie: ({ path: '/', httpOnly: true,secure: false, maxAge:  900000}),//15min后session自动失效
    resave: true,
    saveUninitialized: false,
    rolling:true
}));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//express的use方法调用body-parser实例；且use方法没有设置路由路径；这样的body-parser实例就会对该app所有的请求进行拦截和解析。
//渲染文件的文件夹
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'public'));
//前端可见的文件夹
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render("vender/index.html");
});

app.get(/^\/manage.html\/*/, function (req, res) {
    res.render("vender/manage.html");
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
console.log('Example app listening at host-'+host+"at port-"+port);
});
routers(app);
module.exports = app;