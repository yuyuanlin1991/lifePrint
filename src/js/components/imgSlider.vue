<style lang = "scss">
      .img-slider-wrapper {
            height: 300px;
            background-color: #dbeae3;
            padding: 0 30px;
            .left {
                  width: 50%;
                  height: 300px;
                  display: inline-block;
                  text-align: center;
                  vertical-align: top;
                  padding:45px 0;
            }
            .right {
                  width: 49%;
                  display: inline-block;
                  text-align: center;
                  .img-slider {
                        width: 500px;
                        height: 300px;
                  }
            }

      }
</style>

<template>
      <div class = "img-slider-wrapper">
         <div class = "left">
               <h2>用点滴记录勾勒生活</h2>
               <h4>你会发现</h4>
               <p>每一次瞬间都值得留恋</p>
               <p>每一个足迹都是自己的成长</p>
               <p>每一天都是幸福生活</p>
         </div>
          <div class ="right">
                <img class = "img-slider" :src = 'url'>
          </div>
      </div>
</template>

<script>

    export default{
        data:function(){
            return {
                url:'/img/3.jpg',
            }
        },
    }
</script>