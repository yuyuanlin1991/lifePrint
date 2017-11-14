/**
 * Created by yuyuanlin on 2017/11/14.
 */
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var qs = require('qs');
var userService = {
    regist:function(success,error){
        axios.get('/user/info')
            .then((data)=>{
            success(data.data);
            })
            .catch((err)=>{
            error(err);
            })
    },
    login:function(param,success,error){
        axios.post('/user/login',qs.stringify(param))
            .then((data)=>{
                success(data.data);
            })
            .catch((err)=>{
                error(err);
            })
    },
    logOut:function(success,error){
        axios.get('/user/logOut')
            .then((data)=>{
               success(data.data);
            })
            .catch((err)=>{
            error(err);
            })
    },
    getUser:function(success,error){
        axios.get('/user/info')
            .then((data)=>{
                success(data.data);
            })
            .catch((err)=>{
            error(err);
            })
    }

};
export default userService;