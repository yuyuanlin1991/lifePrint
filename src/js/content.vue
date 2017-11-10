
<style lang = "scss">
    .content{
        min-height:600px;
        width:100%;
    }
</style>
<template>
    <div id="content" class="content">
        <init-page v-if="init" :init = "init" :add = "add" :show = "show" @change="contentChange"></init-page>
        <add-item v-if="add" :init = "init" :add = "add" :show = "show" @change="contentChange"></add-item>
        <show-items v-if="show" :init = "init" :add = "add" :show = "show" :list="list" @change="contentChange"></show-items>
    </div>
</template>

<script>
    import initPage from './initPage.vue'
    import addList from './addList.vue'
    import showItems from './showItems.vue'
    var contentData = {
        init:true,
        add:false,
        show:false,
        list:[]
    };
    export default {
        data(){
            return contentData
        },
        create(){
            this.init=true;
            this.add=false;
            this.show = false;
        },
        components:{
                'init-page':initPage,
                'add-item':addList,
                'show-items':showItems,
            },
        methods:{
            contentChange:function (data) {
            this.init = data.init;
            this.add = data.add;
            this.show = data.show;
            this.list = data.list?data.list:[];
        }
      }
    }
</script>