
<style lang = "scss">
    .expense-wrapper{
        margin-top:75px;
        .expense{
            margin: 20px auto;
            line-height: 100px;
            vertical-align: middle;
            .expense-title{
                font-size: 20px;
                display: inline-block;
            }
            .expense-detail{
                width: 400px;
                display: inline-block;
                height: 100px;
                vertical-align: middle;
            }
            .expense-money{
                width: 400px;
                display: inline-block;
                vertical-align: middle;
                height:30px;
            }
        }
    }
</style>

<template>
    <div class = "expense-wrapper">
        <div class = "expense">
            <label class = "expense-title">详情:</label>
            <textarea class = "expense-detail" v-model="exDetail"></textarea>
        </div>
        <div class = "expense">
            <label class = "expense-title">金额:</label>
            <input  class = "expense-money" type='number' v-model="exMoney">
        </div>
        <button @click = "exSubmit">提交</button>
        <button @click = "exClear">清除</button>
    </div>
</template>
<script>
    import axios from 'axios';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    var qs = require('qs');
    var data = {
        exDetail:null,
        exMoney:null,
    };
    export default {
        data:function(){
           return data;
        },
       methods:{
           exSubmit:function () {
               console.log(this.exDetail+';'+this.exMoney);
               axios.post('/expense',qs.stringify({
                   "detail":this.exDetail,
                   "money":this.exMoney
               }))
                   .then(
                    (resADD)=>{
                           axios.get('/expense')
                               .then(
                                   (resAll)=> {
                                      console.log(resAll.data.data);
                                       this.$emit('change',{
                                           init:false,
                                           add:false,
                                           show:true,
                                           list:resAll.data.data
                                       })
                                   }
                               );
                   });
           },
           exClear:function(){
               this.exDetail=null;
               this.exMoney=null;
           }
       }
    }

</script>