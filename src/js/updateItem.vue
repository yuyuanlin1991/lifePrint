
<style lang = "scss">
      .updateItemDialog{
          .updateMask{
              position:fixed;
              left:0;
              top:0;
              width:100%;
              height:100%;
              z-index:2;
              background: #cccccc;
              opacity: 0.5;
          }
          .updateContent{
              width:600px;
              min-height: 400px;
              position:fixed;
              left:600px;
              top:300px;
              z-index:3;
              background: #ffffff;
              border-radius:5px;
              label{
                  display: block;
              }
              &:hover{
                  box-shadow:0 0 10px 3px #989797;
              }
          }
      }
</style>
<template>
    <div id ="updateItemDialog" class = "updateItemDialog" >
        <div class ="updateContent">
            <label>账目编号:{{oneItem.eid}}</label>
            <label>账目详情:<textarea v-model="oneItem.detail"></textarea></label>
            <label>账目金额:<input v-model= "oneItem.money"></label>
            <label>账目账目消费时间:<input v-model= "oneItem.expenseTime"></label>
        </div>
        <div class = "updateMask"></div>
    </div>
</template>

<script>
    export default {
        props:['oneItem'],

    }
</script>