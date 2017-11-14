
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
                a{
                    color:#E0E0E0;
                    text-decoration:none;
                }
                a:hover{
                    color:#FFFFFF;
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
                <li class = "userName" v-on:click = "login"><a href="#userInfo">{{userData.userName}}</a></li>
                <li class = "userStatusMsg" v-on:click = "register">{{userData.status}}</li>
            </ul>
    </div>
</template>

<script>

    export default {
        props:['userData'],
        beforeCreate:function(){console.log('beforeCreate');},
        beforeMount:function(){console.log('beforeMount')},
        mount:function(){console.log('mount')},
        methods:{
            login:function(){
                if(this.userData.uid){
                    //跳转到个人中心页面
                    console.log(this.userData.uid);
                }else{
                    //出现登陆的下拉框
                }
            },
            register:function(){
                if(this.userData.uid){
                    //注销的接口并刷新
                    console.log("注销"+this.userData.uid);

                }else{
                    console.log('========');
                }
            },
            getUserInfo:()=>{
                console.log('+++++++');

            }
        }
    }
</script>

