
/**
 * Created by yuyuanlin on 2017/9/25.
 */
require("../css/base.scss");
import Vue from 'vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
import home from './pages/home.vue'
import aboutUs from './pages/aboutUs.vue'
import expense from './pages/expense.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.devtools = true;

const routes = {
    '/': 'my-home',
    '#aboutUs': 'my-aboutUs',
    '#userCenter':'my-center',
    '#expense':'my-expense',
    '#plan':'my-plan',

};
var app = new Vue({
    el: '#app',
    data: {
        content: routes[window.location.hash?window.location.hash: window.location.pathname]
    },
    methods: {},
    beforeCreate:function(){console.log('AppBeforeCreate---'+window.location.hash)},
    beforeMount:function(){console.log(this.content);},
    mounted:function(){},
    components: {
        'my-header':header,
        'my-footer':footer,
        'my-home':home,
        'my-aboutUs':aboutUs,
        'my-expense':expense,
    }
});








