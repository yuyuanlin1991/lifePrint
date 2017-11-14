
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
            color:#E0E0E0;
            padding-left:60px;
            font-weight:bold;
            &:hover{
                color:#FFFFFF;
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
        <div class = "logo">生活·足迹</div>
            <ul class = "header-tab">
                <li class ="contactUs" ><a href="#contanUs">联系我们</a></li>
                <li class = "userName" @click.self = "userEvent" :title = "userName">{{userName}}
                    <login v-if="panelLogin" :panel-type = "'login'"></login>
                </li>
                <li class = "userStatusMsg" @click.self = "statusEvent">{{status}}
                    <login v-if="panelRegister" :panel-type = "'register'"></login>
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
        panelLogin:false,
        panelRegister:false,
        userEvent(){},
        statusEvent(){},
    };
    export default {
        data: function () {
            return _userData ;
        },
        beforeCreate: function () {
            console.log('beforeCreate');
        },
        created: function () {
            console.log('create');
        },
        beforeMount: function () {
            console.log('beforeMount');
        },
        mounted:function(){
            this.getUserInfo();
        },
        methods: {
            login: function () {
                this.panelLogin = !this.panelLogin;
                if(this.panelRegister){
                    this.panelRegister = !this.panelRegister;
                }
                return false;
            },
            logOut:function(){
                console.log('登出');
            },
            register: function () {
                this.panelRegister = !this.panelRegister;
                if(this.panelLogin){
                    this.panelLogin = !this.panelLogin;
                }
                console.log('注册');
            },
            goUserCenter:function(){
                console.log('去个人中心');
            },
            getUserInfo: function () {
                var vm =this;
                userService.getUser((user)=>{
                    console.log(user);
                    if (user.status == 0) {
                    vm.userName= user.data.userName;
                    vm.status= '注销';
                    vm.uid=user.data.uid;
                    vm.userEvent = vm.goUserCenter;
                    vm.statusEvent = vm.logOut;
                    } else {
                    vm.userName= "登录";
                    vm.status= "注册";
                    vm.uid=null;
                    vm.userEvent = vm.login;
                    vm.statusEvent = vm.register;
                    }
                }, function (err) {
                    console.log(err);
                })
            },
        },
        components:{
            'login':login,
        }
    }
</script>

