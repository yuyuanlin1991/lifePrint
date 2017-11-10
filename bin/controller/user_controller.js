/**
 * Created by yuyuanlin on 2017/11/1.
 */


var express = require('express');
var router = express.Router();
var useService = require('../lib/user_service.js');
router.post('/register', function (req, res) {
    var userName = req.body.userName;
    var passWord = req.body.password;
    useService.checkIfExist(userName)
        .then(function (result) {
            if (result.ifExist) {
                res.send({
                    status: -1,
                    message: "用户名已经存在！"
                });
            } else {
                useService.saveUser(userName, passWord, 0, 'insert')
                    .then((data) => {
                        req.session.user = data;
                        res.send({
                            data: data,
                            status: 0,
                            message: "操作成功"
                        });
                    })
                    .catch((err) => {
                        res.send({
                            status: -1,
                            message: "操作失败"
                        });
                        console.log(err);
                    })
            }
        })
        .catch((err) => {
            res.send({
                status: -1,
                message: "操作失败"
            });
            console.log(err);
        })
});
router.post('/login', function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    useService.authorization(userName,password)
        .then((result) => {
            if (result.authorization) {
                req.session.user = result.data;
                res.send({
                    data: result.data,
                    status: 0,
                    message: "操作成功"
                })
            } else {
                res.send({
                    status: -1,
                    message: "用户名或密码错误！"
                });
            }
        })
        .catch((err)=>{
            res.send({
                status: -1,
                message: "操作失败"
            });
            console.log(err);
        })
});
router.get('/logOut',function(req,res){
    req.session.destroy();
    res.send({
        message:"退出登录成功",
        status:0
    })
});

module.exports = router;