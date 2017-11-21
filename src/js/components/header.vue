
<style lang = "scss">
    .header{
        text-align: left;
        background-color:#424242;
        width:100%;
        height:80px;
        line-height: 80px;
        .logo{
            display: inline-block;
            vertical-align: middle;
            font-size: 25px;
            padding-left:60px;
            font-weight:bold;
            a{
                color:#E0E0E0;
                text-decoration:none;
                &:hover{
                    color:#FFFFFF;
                }
            }
        }
        .header-tab{
            display: inline-block;
            vertical-align: middle;
            color:#E0E0E0;
            float: right;
            font-size: 18px;
            margin:0;
            padding-right:40px;
            li {
                display: inline-block;
                vertical-align: middle;
                padding:0 20px;
                &:hover{
                    color:#FFFFFF;
                }
                a{
                    color:#E0E0E0;
                    text-decoration:none;
                }
                a:hover{
                    color:#FFFFFF;
                }
            }
            .login-panel{
                position:absolute;
                z-index:99;
                right:30px;
                top:60px;
                background-color: #f8f8f8;
                color:black;
            }
        }
        form{
            width: 300px;
            height:260px;
            .form-title{
                font-size: 20px;
                text-align: center;
                padding: 0;
                margin: 0;
                height:60px;
                line-height: 60px;
            }
            .form-item{
                font-size: 18px;
                margin:0;
                height:60px;
                line-height: 60px;
                text-align: center;
                span{
                    display: inline-block;
                    width:60px;
                    padding-right:10px;
                    text-align: left;
                }
                button{
                    margin:0 10px;
                }
            }
        }
    }

</style>
<template>
    <div id="header" class="header">
        <div class = "logo"><router-link to="/home">生活·足迹</router-link></div>
            <ul class = "header-tab">
                <li class ="contactUs" ><router-link to="/aboutUs">关于我们</router-link></li>
                <li class = "userName" @click.self = "userEvent" :title = "userName">{{userName}}
                    <login v-if="panelLogin" :login-panel = "1" @success = "loginSuccess"></login>
                </li>
                <li class = "userStatusMsg" @click.self = "statusEvent">{{status}}
                    <login v-if="panelRegister" :login-panel = "0"></login>
                </li>
            </ul>
    </div>
</template>

<script>
    import userService  from  '../service/userService';
    import login from './loginPanel'
    var _userData = {
        userName: null,
        status: null,
        uid: null,
        password:null,
        userEvent(){},
        statusEvent(){},
    };
    export default {
        data: function () {
            return _userData ;
        },
/*        beforeCreate: function () {
            console.log('beforeCreate');
        },
        created: function () {
            console.log('create');
        },
        beforeMount: function () {
            console.log('beforeMount');
        },*/
        mounted:function(){
            this.getUserInfo();
        },
        computed:{
          panelLogin:function(){
              return this.$store.getters.getPanelLogin
          },
          panelRegister:function(){
              return this.$store.getters.getPanelRegister
          }
        },
        methods: {
            login: function () {
                this.$store.dispatch('panelLogin',!this.$store.getters.getPanelLogin);
                if(this.panelRegister){
                    this.$store.dispatch('panelRegister',!this.$store.getters.getPanelRegister);
                }
                return false;
            },
            logOut:function(){
                let vm = this;
               userService.logOut()
                   .then((result) => {
                        console.log(result);
                       if (result.status == 0) {
                           vm.userName = "登录";
                           vm.status = "注册";
                           vm.uid = null;
                           vm.userEvent = vm.login;
                           vm.statusEvent = vm.register;
                           this.$store.dispatch('setUser',{userName:null,userId:null});
                       } else {
                           console.log("退出失败");
                       }
                   })
                   .catch((err) => {
                       console.log(err);
                   })
            },
            register: function () {
                this.$store.dispatch('panelRegister',!this.$store.getters.getPanelRegister);
                if(this.panelLogin){
                    this.$store.dispatch('panelLogin',!this.$store.getters.getPanelLogin);
                }
                return false;
            },
            goUserCenter:function(){
                console.log('去个人中心');
            },
            getUserInfo: function () {
                var vm =this;
                userService.getUser()
                    .then((user)=>{
                        console.log(user);
                        if (user.status == 0) {
                            vm.userName= user.data.userName;
                            vm.status= '退出';
                            vm.uid=user.data.uid;
                            vm.userEvent = vm.goUserCenter;
                            vm.statusEvent = vm.logOut;
                            this.$store.dispatch('setUser',{userName:user.data.userName,userId:user.data.uid});
                        } else {
                            vm.userName= "登录";
                            vm.status= "注册";
                            vm.uid=null;
                            vm.userEvent = vm.login;
                            vm.statusEvent = vm.register;
                            this.$store.dispatch('setUser',{userName:null,userId:null});
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            loginSuccess:function(data){
                this.userName= data.userName;
                this.status= '退出';
                this.uid=data.uid;
                this.userEvent = this.goUserCenter;
                this.statusEvent = this.logOut;
                this.login();
            }
        },
        components:{
            'login':login,
        }
    }
</script>

