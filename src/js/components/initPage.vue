
<style lang = "scss">
    .item-add{
        display: inline-block;
        text-align: center;
        width: 166px;
        height: 166px;
        border-radius: 132px;
        border: 38px solid #F79EB5;
        font-size: 150px;
        line-height: 166px;
        margin-top: 75px;
        color:#424242;
        cursor: pointer;
    }
    .item-add:hover{
        box-shadow:0px 0px 5px 7px #efeeee;;
    }
    .item-add-tip{
        display: block;
        margin: 30px auto;
        font-size: 20px;
        font-weight: bold;
        color: #424242;
    }
</style>

<template>
    <div>
        <span id="item-add" title="点击添加花费记录" class="item-add" v-on:click = "addOneItem">+</span>
        <span class="item-add-tip">添加花费记录</span>
    </div>
</template>

<script>
    export default {
        props:['init','add','show'],
        methods:{
            addOneItem:function () {
                this.$emit('change',{
                    init:!this.init,
                    add:!this.add,
                    show:this.show,
                })
            }
        }
    }

</script>