
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
            padding-left:30px;
            font-weight:bold;
        }
        .header-tab{
            display: inline-block;
            vertical-align: middle;
            color:#E0E0E0;
            float: right;
            font-size: 18px;
            margin:0;
            padding-right:40px;
            li{
                display: inline-block;
                vertical-align: middle;
                padding:0 20px;
            }
        }
    }

</style>
<template>
    <div id="header" class="header">
        <div class = "logo">生活·足迹</div>
            <ul class = "header-tab">
                <li>联系我们</li>
                <li>登陆</li>
                <li>注册</li>
            </ul>
    </div>
</template>

<script>
    export default {
    }
</script>

