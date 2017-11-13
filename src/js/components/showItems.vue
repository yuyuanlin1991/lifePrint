
<style lang="scss">
.itemList-wrapper{
      table{
          display:inline-block;
          text-align: center;
          .itemList{
             &:hover{
                 background-color: #F79EB5;
             }
          }
      }
}
</style>

<template>
    <div class="itemList-wrapper">
        <table>
            <tr>
                <td>账目编号</td>
                <td>账目详情</td>
                <td>账目金额</td>
                <td>账目消费时间</td>
                <td>账目创建时间</td>
                <td>操作</td>
            </tr>
            <tr v-for='item in list'  class = 'itemList'>
                <td>{{item.eid}}</td>
                <td>{{item.detail}}</td>
                <td>{{item.expense}}</td>
                <td>{{item.expenseTime}}</td>
                <td>{{item.createTime}}</td>
                <td><button @click = 'updateOneItem(item)'>修改</button>
                    <button>删除</button></td>
            </tr>
        </table>
        <update-item :oneItem='oneItem' v-show = "update"></update-item>
    </div>

</template>

<script>
    import updateItem from './updateItem.vue'
    var data={
        oneItem:{
            eid:null,
            detail:null,
            expense:null,
            expenseTime:null,
            createTime:null
        },
        update:false
    }
    export default{
        data:function(){
            return data;
        },
        props:['list'],
        components: {
            'update-item':updateItem
        },
        methods:{
            updateOneItem:function(item){
                this.oneItem = item;
                this.update = true;
            }
        }
    }

</script>