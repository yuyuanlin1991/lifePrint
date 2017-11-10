/**
 * Created by yuyuanlin on 2017/9/30.
 *用于处理
 */
var expenseItem = require('../model/expenseItem');

var expenseItem_service = {
    getAll:function(userid){
        return new Promise((resolve, reject) => {
            expenseItem
                .forge()
                .where('userId',userid)
                .fetchAll()
                .then(function(expenseItems) {
                    resolve(expenseItems);
                })
                .catch(function(err) {
                  reject(err);
                 });
        });
    },
    addOne:function(detail,money,eid,expenseTime,userid){
        return new Promise((resolve, reject) => {
          new expenseItem({
              detail:detail,
              eid:eid,
              expense:money,
              userId:userid,
              expenseTime:expenseTime,
            })
            .save(null,{method: 'insert'})
            .then(function(model){
                resolve(model.attributes);
            })
            .catch(function(err) {
                    reject(err);
            });
        });
    },
    updateOne:function(eid,detail,money,expenseTime){
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
            expenseItem
                .forge()
                .where('eid','=',eid)
                .save(tempObj,{method:'update'})
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
            expenseItem
                .forge()
                .where('eid','=',eid)
                .destroy()
                .then((result)=>{
                    resolve(result)
                })
                .catch(function(err) {
                    reject(err);
                });
        })
    }
}
module.exports = expenseItem_service;