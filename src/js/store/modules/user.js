/**
 * Created by yuyuanlin on 2017/11/20.
 */


export default {
    state: {
        userName: null,
        userId:null,
        message:false
    },
    mutations: {
        setUser(state, userInfo) {
            console.log(userInfo);
            state.userName = userInfo.userName;
            state.userId  = userInfo.userId;
        },
        changeMessage(state,msg){
            state.message = msg;
        }
    },
    actions:{
        setUser(context,userInfo) {
            context.commit('setUser',userInfo);
        },
        changeMessage(context,msg){
            context.commit('changeMessage',msg);
        }
    }
}