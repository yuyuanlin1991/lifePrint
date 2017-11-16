/**
 * Created by yuyuanlin on 2017/11/16.
 */

/**
 * Created by yuyuanlin on 2017/9/25.
 */
require("../css/base.scss");
import Vue from 'vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
import home from './pages/manageHome.vue'
import aboutUs from './pages/aboutUs.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.devtools = true;

const routes = {
    '/': 'my-home',
    '#aboutUs': 'my-aboutUs',
};
var manage = new Vue({
    el: '#manage',
    data: {
        manageContent: routes[window.location.hash?window.location.hash: '/']
    },
    beforeCreate:function(){console.log('AppBeforeCreate---'+window.location.hash+'---'+window.location.pathname)},
    beforeMount:function(){console.log(this.manageContent);},
    mounted:function(){
        console.log('yyyyyyyyyyyy');
        window.addEventListener("hashchange", this.change, false);
    },
    components: {
        'my-header':header,
        'my-footer':footer,
        'my-home':home,
        'my-aboutUs':aboutUs,
    },
    methods:{
        change:function(){
            console.log('xxxxxxxxxxxxx');
            this.manageContent=routes[window.location.hash?window.location.hash: '/']
        }
    }
});








