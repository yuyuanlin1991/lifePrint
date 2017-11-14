
/**
 * Created by yuyuanlin on 2017/9/25.
 */
require("../css/index.css");
require("../css/main.scss");
import Vue from 'vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
import content from './home.vue'
import userService  from  './service/userService';
Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {},
    methods: {},
    beforeCreate:function(){console.log('AppBeforeCreate')},
    beforeMount:function(){console.log('AppBeforeMount')},
    components: {
        'my-header':header,
        'my-footer':footer,
        'my-content':content,
    }
});








