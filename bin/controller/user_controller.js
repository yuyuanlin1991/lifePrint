/**
 * Created by yuyuanlin on 2017/11/1.
 */


var express = require('express');
var router = express.Router();
var useService = require('../service/user_service.js');
var etil = require('../lib/tils');
router.post('/register', function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    var saveObject = {
        userName:userName,
        password:password,
        type:0
    };
    useService.checkIfExist(userName)
        .then(function (result) {
            if (result.ifExist) {
                res.send({
                    status: -1,
                    message: "用户名已经存在！"
                });
            } else {
                useService.save(saveObject)
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
router.post('/editInfo',function(req,res){
    var userid = req.session.user?req.session.user.uid:null;
    var modifyObject = {
        uid:userid,
        nickName:req.body.nickName?req.body.nickName:null,
        age :req.body.age?req.body.age:null,
        province:req.body.province?req.body.province:null,
        city:req.body.city?req.body.city:null,
        email:req.body.email?req.body.email:null,
        address:req.body.address?req.body.address:null,
        sex:req.body.sex?req.body.sex:null
    };
    if(userid){
        useService.save(modifyObject)
            .then((data)=>{
            res.send({
                data: data,
                status: 0,
                message: "操作成功"
            });
        })
        .catch((err)=>{
            res.send({
                status: -1,
                message: "操作失败"
            });
            console.log(err);
        })
    }else{
        res.send({
            status: -1,
            message:"请先登录再修改自己的个人信息！"
        });
    }
});

module.exports = router;