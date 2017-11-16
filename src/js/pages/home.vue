
<style lang = "scss">
    .home-content{
        min-height:900px;
        width:100%;
        clear: right;
        text-align: left;
    }
</style>
<template>
    <div id="home_content" class="home-content">
        <img-slider></img-slider>
    </div>
</template>

<script>
    import imgSlider  from  '../components/imgSlider.vue';
    export default {
        data(){
            return {data:null};
        },
        components:{
           'img-slider':imgSlider
            },
        methods:{

      }
    }
</script>