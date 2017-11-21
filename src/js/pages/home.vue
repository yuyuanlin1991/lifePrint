
<style lang = "scss">
    .home-content{
        min-height:900px;
        width:100%;
        clear: right;
        text-align: left;
        .home-title{
            text-align: center;
            color:#bf2222;
        }
        hr{
            text-align: center;
            width:220px;
            border-color:#bf2222;
        }
        .home-cards{
            margin:50px 0;
            text-align: center;
        }
    }
</style>
<template>
    <div id="home_content" class="home-content">
        <img-slider></img-slider>
        <div class = "home-cards">
            <h2 class="home-title">在这里我们能做什么？</h2>
            <hr>
            <item-card v-for = "item in itemCards" :key="item.routerUrl" :cardData = 'item'></item-card>
        </div>
    </div>
</template>

<script>
    import imgSlider  from  '../components/imgSlider.vue';
    import itemCard  from  '../components/itemCard.vue';
    import cardsArray from '../../config/cards.json'
    export default {
        data(){
            return {itemCards:cardsArray.cards};
    },
        components:{
           'img-slider':imgSlider,
            'item-card':itemCard
            },
        methods:{

      },
        beforeRouteLeave:function(to,from,next){
            let reg = /\/expense/;
            if(reg.test(to.fullPath)&&!this.$store.getters.getUserId){
                console.log('未登录不能添加账单');
                this.$store.dispatch('panelLogin',true);
            }else{
                next();
            }
        }
    }
</script>