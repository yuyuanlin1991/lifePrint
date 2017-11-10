
/**
 * Created by yuyuanlin on 2017/9/29.
 */

var express = require('express');
var router = express.Router();
var expense = require('../lib/expenseItem_service.js');
var etils = require('../lib/etils.js');
router.get('/', function (req, res) {
    var userid = req.session.user?req.session.user.uid:null;
    if(userid){
        expense.getAll(userid)
            .then((result) => {
                res.send({
                    data: result,
                    status: 0
                });
            })
            .catch((err) => {
                res.send({
                    status: -1
                });
                console.log(err);
            })
    }else{
        res.send({
            status: -1,
            message:"请先登录再查看自己的消费记录！"
        });
    }
});
router.post('/', function (req, res) {
    var detail = req.body.detail;
    var money = req.body.expense;
    var expenseTime = req.body.expenseTime;
    var eid = etils.newUuid();
    var userid = req.session.user?req.session.user.uid:null;
    if(userid){
        expense.addOne(detail, money, eid,expenseTime,userid)
            .then((result) => {
                res.send({
                    data: result,
                    status: 0
                });
            })
            .catch((err) => {
                res.send({
                    status: -1
                });
                console.log(err);
            })
    }else{
        res.send({
            status: -1,
            message:"请先登录再添加消费记录！"
        });
    }
});
router.put('/:eid', function (req, res) {
    var eid = req.params.eid;
    var detail = req.body.detail?req.body.detail:null;
    var money = req.body.expense?req.body.expense:null;
    var expenseTime = req.body.expenseTime?req.body.expenseTime:null;
    expense.updateOne(eid,detail,money,expenseTime)
        .then((result)=>{
            res.send({
                data: result,
                status: 0
            });
        })
        .catch((err) => {
            res.send({
                status: -1
            });
            console.log(err);
        })
});
router.delete('/:eid', function (req, res) {
    var eid = req.params.eid;
    expense.deleteOne(eid)
        .then((result)=>{
            res.send({
                data: result,
                status: 0
            });
        })
        .catch((err) => {
            res.send({
                status: -1
            });
            console.log(err);
        })
});

module.exports = router;