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
        }
    }
</style>

<template>
    <div class = "login-panel">
        <form>
            <div class = "form-title">请登录</div>
            <div class = 'form-item'><span>用户名:</span><input v-model="userName"></div>
            <div class = 'form-item'><span>密码:</span><input type="password" v-model="password"></div>
            <div class = 'form-item'>
                <button class = "btn-primary" @click = "login">登录</button>
            </div>
        </form>
    </div>
</template>

<script>
    var _data = {
        userName:null,
        password:null
    };
    import userService  from  '../service/userService';
    export default {
        data: function () {
            return _data;
        },
        methods: {
            login:function(){
                var vm = this;
                userService.login({
                    userName:this.userName,
                    password:this.password
                },(userData)=>{
                    if(userData.status ==0){
                        console.log('登录成功')
                    }else{
                        console.log("登录失败")
                    }
                },(err)=>{

                })
            }
        }
    }
</script>