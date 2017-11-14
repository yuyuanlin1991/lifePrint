<style lang="scss">
    .login-panel {
        position: absolute;
        z-index: 99;
        right: 30px;
        top: 60px;
        background-color: #f8f8f8;
        color: black;
        form {
            width: 300px;
            height: 260px;
            .form-title {
                font-size: 20px;
                text-align: center;
                padding: 0;
                margin: 0;
                height: 60px;
                line-height: 60px;
            }
            .form-item {
                font-size: 18px;
                margin: 0;
                height: 60px;
                line-height: 60px;
                text-align: center;
                span {
                    display: inline-block;
                    width: 60px;
                    padding-right: 10px;
                    text-align: left;
                }
                button {
                    margin: 0 10px;
                    width:270px;
                }
            }
            .form-tips{
                font-size: 14px;
                height: 16px;
                padding: 0;
                margin: 0;
                text-align: center;
                line-height: 16px;
                color: red;
            }
        }
    }
</style>

<template >
    <div v-if="panelType=='login'" class = "login-panel">
        <form>
            <div class = "form-title">请登录</div>
            <div class = 'form-item'><span>用户名:</span><input v-model="userName" @focus="inputFocus"></div>
            <div class = 'form-item'><span>密码:</span><input type="password" v-model="password" @focus="inputFocus"></div>
            <p class = 'form-tips'>{{errMsg}}</p>
            <div class = 'form-item'>
                <button class = "btn-primary" @click = "login">登录</button>
            </div>
        </form>
    </div>
    <div v-else class = "login-panel">
        <form>
            <div class = "form-title">请注册</div>
            <div class = 'form-item'><span>用户名:</span><input v-model="userName" @focus="inputFocus"></div>
            <div class = 'form-item'><span>密码:</span><input type="password" v-model="password" @focus="inputFocus"></div>
            <p class = 'form-tips'>{{errMsg}}</p>
            <div class = 'form-item'>
                <button class = "btn-primary" @click = "register">注册</button>
            </div>

        </form>
    </div>
</template>

<script>
    var _data = {
        userName:null,
        password:null,
        errMsg:null
    };
    import userService  from  '../service/userService';
    export default {
        data: function () {
            return _data;
        },
        mounted:function(){
            this.userName=null;
            this.password=null;
            this.errMsg=null;
        },
        props:['panelType'],
        methods: {
            login:function(){
                var vm = this;
                if(!this.userName || !this.password){
                    vm.errMsg = '用户名和密码不能为空！';
                    return;
                }else{
                    userService.login({
                        userName:this.userName,
                        password:this.password
                    },(userData)=>{
                        if(userData.status ==0){
                            console.log('登录成功')
                        }else{
                            vm.errMsg = userData.message;
                            console.log("登录失败")
                        }
                    },(err)=>{
                        console.log(err);
                    })
                }
            },
            register:function(){
                var vm = this;
                if(!this.userName || !this.password){
                    vm.errMsg = '用户名和密码不能为空！';
                    return;
                }else{
                    userService.regist({
                        userName:this.userName,
                        password:this.password
                    },(result)=>{
                        if(result.status ==0){
                            console.log('注册成功');
                        }else{
                            vm.errMsg = result.message;
                        }
                    },(err)=>{
                        console.log(err);
                    })
                }
            },
            inputFocus:function(){
                this.errMsg = null;
            }
        }
    }
</script>