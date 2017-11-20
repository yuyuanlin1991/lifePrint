/**
 * Created by yuyuanlin on 2017/11/20.
 * 通用的配置
 */

import * as types from '../types';

const state = {
    showLoading: false,
    showSuccess: false,
    showFail: false,
    showAlert: false,
    sucessMsg: '成功',
    failMsg:'失败',
    alertMsg: '退出登录',
};

const actions = {
    showLoading({ commit }, status) {
        commit(types.COM_SHOW_LOADING, status);
    },
    showSuccess({ commit }, status) {
        commit(types.COM_SHOW_SUCCESS, status);
    },
    showFail({ commit }, status) {
        commit(types.COM_SHOW_FAIL, status);
    },
    showAlert({ commit }, status) {
        commit(types.COM_SHOW_ALERT, status);
    },
    setAlertMsg({ commit }, str) {
        commit(types.COM_ALERT_MSG, str);
    },
    setSuccssMsg({ commit }, str) {
        commit(types.COM_SUCCESS_MSG, str);
    },
    setFailMsg({ commit }, str) {
        commit(types.COM_FAIL_MSG, str);
    }
};

const getters = {
    showLoading: state => state.showLoading,
    showSuccess: state => state.showSuccess,
    showFail: state => state.showFail,
    showAlert: state => state.showAlert,
}

const mutations = {
    [types.COM_SHOW_LOADING](state, status) {
        state.showLoading = status
    },

    [types.COM_SHOW_SUCCESS](state, status) {
        state.showSuccess = status
    },

    [types.COM_SHOW_FAIL](state, status) {
        state.showFail = status
    },

    [types.COM_SHOW_ALERT](state, status) {
        state.showAlert= status
    },
    [types.COM_SUCCESS_MSG](state, str) {
        state.sucessMsg = str
    },
    [types.COM_FAIL_MSG](state, str) {
        state.failMsg = str
    },
    [types.COM_ALERT_MSG](state, str) {
        state.alertMsg = str
    },

}


export default {
    state,
    actions,
    getters,
    mutations
}