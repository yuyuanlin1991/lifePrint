/**
 * Created by yuyuanlin on 2017/11/14.
 */
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var qs = require('qs');
var userService = {
    regist:function(param){
        return new Promise((resolve,reject)=>{
            axios.post('/user/register',qs.stringify(param))
                .then((data)=>{
                    resolve(data.data);
                })
                .catch((err)=>{
                    reject(err);
                })
        });
    },
    login:function(param){
        return new Promise((resolve,reject)=>{
            axios.post('/user/login',qs.stringify(param))
                .then((data)=>{
                    resolve(data.data);
                })
                .catch((err)=>{
                    reject(err);
                })
        });
    },
    logOut:function(){
        return new Promise((resolve,reject)=>{
            axios.get('/user/logOut')
                .then((data)=>{
                    resolve(data.data);
                })
                .catch((err)=>{
                    reject(err);
                })
        });
    },
    getUser:function(){
        return new Promise((resolve,reject)=>{
            axios.get('/user/info')
                .then((data)=>{
                    resolve(data.data);
                })
                .catch((err)=>{
                    reject(err);
                })
        });
    }

};
export default userService;