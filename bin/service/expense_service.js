/**
 * Created by yuyuanlin on 2017/9/30.
 *用于处理花费相关的接口
 */
var expense = require('../model/expense');

var expense_service = {
    getAll:function(userid){
        return new Promise((resolve, reject) => {
            expense
                .forge()
                .where('userId',userid)
                .fetchAll()
                .then(function(expenses) {
                    resolve(expenses);
                })
                .catch(function(err) {
                  reject(err);
                 });
        });
    },
    addOne:function(detail,money,eid,expenseTime,userid,category){
        return new Promise((resolve, reject) => {
          new expense({
              detail:detail,
              eid:eid,
              expense:money,
              userId:userid,
              expenseTime:expenseTime,
              category:category
            })
            .save(null,{method: 'insert',require:true})
            .then(function(model){
                console.log(model.attributes);
                resolve(model.attributes);
            })
            .catch(function(err) {
                    reject(err);
            });
        });
    },
    updateOne:function(eid,detail,money,expenseTime,category){
        let tempObj = {};
        tempObj.eid = eid;
        if(money){
            tempObj.expense = money;
        }
        if(detail){
            tempObj.detail = detail;
        }
        if(expenseTime){
            tempObj.expenseTime = expenseTime;
        }
        return new Promise((resolve, reject) => {
            expense
                .forge()
                .where('eid','=',eid)
                .save(tempObj,{method:'update',require:true})
                .then((result)=>{
                    resolve(result)
                })
                .catch(function(err) {
                    reject(err);
                });
        })
    },
    deleteOne:function(eid){
        return new Promise((resolve, reject) => {
            expense
                .forge()
                .where('eid','=',eid)
                .destroy({require:true})
                .then((result)=>{
                    resolve(result)
                })
                .catch(function(err) {
                    reject(err);
                });
        })
    }
}
module.exports = expense_service;