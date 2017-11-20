
<style lang = "scss">
    .home-content{
        min-height:900px;
        width:100%;
        clear: right;
        text-align: left;
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

      }
    }
</script>