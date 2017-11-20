/**
 * Created by yuyuanlin on 2017/11/20.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import com from './modules/common.js'
import user from './modules/user.js'
export default new Vuex.Store({
        modules: {
            com,
            user
        }
});