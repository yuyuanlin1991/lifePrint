
/**
 * Created by yuyuanlin on 2017/9/25.
 */
require("../css/index.css");
require("../css/main.scss");
import Vue from 'vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
import content from './home.vue'

Vue.config.devtools = true;
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var qs = require('qs');
var userData={
    userName:'登陆',
    status:'注册',
    uid:null
};
axios.get('/user/info')
    .then((data) => {
        if (data.data.data) {
            userData = {
                userName: data.data.data.userName,
                status: "注销",
                uid: data.data.data.uid
            }
        }
        console.log(userData);
        var app = new Vue({
            el: '#app',
            data: {userData:userData},
            methods: {},
            beforeCreate:function(){console.log('AppBeforeCreate')},
            beforeMount:function(){console.log('AppBeforeMount')},
            components: {
                'my-header':header,
                'my-footer':footer,
                'my-content':content,
            }
        });
    })
    .catch(function (err) {
        console.log(err);
    });







