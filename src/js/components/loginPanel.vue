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
    <div  class = "login-panel" v-if="loginPanel">
        <form>
            <div class = "form-title">请登录</div>
            <div class = 'form-item'><span>用户名:</span><input v-model="userName"  v-focus @focus="inputFocus"></div>
            <div class = 'form-item'><span>密码:</span><input type="password" v-model="password" @focus="inputFocus"></div>
            <p class = 'form-tips'>{{errMsg}}</p>
            <div class = 'form-item'>
                <button class = "btn-primary" @click.self.prevent = "login">登录</button>
            </div>
        </form>
    </div>
    <div class = "login-panel" v-else >
        <form>
            <div class = "form-title">请注册</div>
            <div class = 'form-item'><span>用户名:</span><input v-model="userName" v-focus @focus="inputFocus"></div>
            <div class = 'form-item'><span>密码:</span><input type="password" v-model="password" @focus="inputFocus"></div>
            <p class = 'form-tips'>{{errMsg}}</p>
            <div class = 'form-item'>
                <button class = "btn-primary" @click.self.prevent = "register">注册</button>
            </div>
        </form>
    </div>
</template>

<script>
    import userService  from  '../service/userService';
    export default {
        data: function () {
            return {
                userName:null,
                password:null,
                errMsg:null,
                autoFocus:true,
            };
        },
        props:['loginPanel'],
        directives:{
            focus:{
                inserted: function (el) {   // 当被绑定的元素插入到 DOM 中时……
                    el.focus();  // 聚焦元素
                }
            }
        },
        mounted:function(){

        },
        methods: {
            login:function(){
                var vm = this;
                if(!this.userName || !this.password){
                    vm.errMsg = '用户名和密码不能为空！';
                }else{
                    userService.login({
                        userName:this.userName,
                        password:this.password
                    })
                    .then((userData)=>{
                        if(userData.status ==0){
                            console.log('登录成功');
                            this.$emit('success', userData.data);
                        }else{
                            vm.errMsg = userData.message;
                            console.log("登录失败")
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
                return false;
            },
            register:function(){
                var vm = this;
                if(!this.userName || !this.password){
                    vm.errMsg = '用户名和密码不能为空！';
                }else{
                    userService.regist({
                        userName:this.userName,
                        password:this.password
                    })
                    .then((result)=>{
                        if(result.status ==0){
                            this.$emit('success', result.data);
                            console.log('注册成功');
                        }else{
                            vm.errMsg = result.message;
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
                return false;
            },
            inputFocus:function(){
                this.errMsg = null;
                return false;
            }
        },
    }
</script>