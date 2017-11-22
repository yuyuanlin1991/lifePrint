
/**
 * Created by yuyuanlin on 2017/9/25.
 */
require("../css/base.scss");
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store.js'
import header from './components/header.vue';
import footer from './components/footer.vue';
import home from './pages/home.vue';
import aboutUs from './pages/aboutUs.vue';
import expense from './pages/expense.vue';
import thoughts from './pages/thoughts.vue';

Vue.config.devtools = true;
Vue.use(VueRouter);

const routes =[
    { path: '/', component: home,alias:'/home'},
    { path: '/home', component: home },
    { path: '/aboutUs', component: aboutUs },
    { path:'/expense',component:expense},
    { path:'/thoughts',component:thoughts}
];
//创建路由实例
const router = new VueRouter({
    //mode: 'history',  //优化url的展现形式：#/home-->/home,需要与后台配合以方便返回对的渲染视图
    routes // （缩写）相当于 routes: routes
});



var app = new Vue({
    el: '#app',
    data: {
        content: routes[window.location.hash?window.location.hash: window.location.pathname]
    },
    methods: {},
    beforeCreate:function(){},
    beforeMount:function(){},
    mounted:function(){},
    components: {
        'my-header':header,
        'my-footer':footer,
        'my-home':home,
        'my-aboutUs':aboutUs,
        'my-expense':expense,
    },
    router,
    store
}).$mount('#app'); //路由挂载








