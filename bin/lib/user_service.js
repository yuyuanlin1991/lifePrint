/**
 * Created by yuyuanlin on 2017/11/1.
 */
var user = require('../model/user.js');
var etil = require('./tils');

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
    saveUser: function (userName, password, type,method) {
        return new Promise((resolve, reject) => {
            var data = {
                uid: etil.newUuid(),
                userName: userName,
                password: password,
                type: type
            };
            new user(data)
                .save(null,{method: method})
                .then(() => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
};
module.exports = userService;
