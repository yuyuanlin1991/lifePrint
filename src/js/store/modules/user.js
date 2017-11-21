/**
 * Created by yuyuanlin on 2017/11/20.
 */


export default {
    state: {
        userName: null,
        userId:null,
        panelLogin:false,
        panelRegister:false,
    },
    mutations: {
        setUser(state, userInfo) {
            state.userName = userInfo.userName;
            state.userId  = userInfo.userId;
        },
        panelLogin(state,status){
            console.log("login status:"+status);
            state.panelLogin = status;
        },
        panelRegister(state,status){
            console.log("register status:"+status);
            state.panelRegister = status;
        }
    },
    actions:{
        setUser(context,userInfo) {
            context.commit('setUser',userInfo);
        },
        panelLogin(context,status){
            context.commit('panelLogin',status)
        },
        panelRegister(context,status){
            context.commit('panelRegister',status)
        }
    },
    getters :{
        getUserId: state => state.userId,
        getPanelLogin: state => state.panelLogin,
        getPanelRegister:state => state.panelRegister
    }
}