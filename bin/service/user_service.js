/**
 * Created by yuyuanlin on 2017/11/1.
 * 用于处理用户相关的接口
 */
var user = require('../model/user.js');
var etil = require('../lib/tils');

var userService = {
    checkIfExist: function (userName) {
        return new Promise((resolve, reject) => {
            user.forge()
                .where('userName', userName)
                .fetch()
                .then((result) => {
                    if (result) {
                        resolve({ifExist: true});
                    } else {
                        resolve({ifExist: false});
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        })
    },
    authorization:function(userName,password){
        return new Promise((resolve, reject) => {
            user.forge()
                .where('userName', userName)
                .where('password', password)
                .fetch()
                .then((result) => {
                    if (result) {
                        resolve({
                            authorization: true,
                            data:result.attributes});
                    } else {
                        resolve({authorization: false});
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        })
    },
    save:function(saveObject){
        return new Promise((resolve,reject)=>{
            user.forge(saveObject.uid?{uid:saveObject.uid}:{})
                .save(saveObject)
                .then((result)=>{
                  console.log(result);
                  resolve(result);
                })
                .catch((err)=>{
                  reject(err)
                })
        })
    }
};
module.exports = userService;
