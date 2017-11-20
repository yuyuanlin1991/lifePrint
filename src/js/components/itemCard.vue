<style lang="scss">
    .itemCard-wrapper{
        width: 350px;
        height: 200px;
        display: inline-block;
        background: #ffffff;
        margin: 20px;
        text-align: center;
        padding: 20px 0;
        border-radius: 3px;
        text-decoration:none;
        color:#000000;;
        &:hover{
            box-shadow: 0px 0px 5px 7px #efeeee;
        }
        h2{
            margin-top: 30px;
        }
    }
</style>
<template>
    <router-link :to="routerUrl" class = "itemCard-wrapper">
           <img :src="imgUrl">
           <p>{{description}}</p>
           <h2>{{cardName}}</h2>
    </router-link>
</template>

<script>

    export default{
        data:function(){
            return{
                routerUrl:'/home',
                imgUrl:'',
                cardName:'CREATE IT',
                description:''
            }
        },
        props:['cardData'],
        created:function(){
            this.routerUrl = this.cardData.routerUrl;
            this.imgUrl = this.cardData.imgUrl;
            this.cardName = this.cardData.cardName;
            this.description = this.cardData.description;
        }


    }
</script>