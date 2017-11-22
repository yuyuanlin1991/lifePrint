<style lang="scss">
    //一定要设置codeMirror，不然会没有可写的输入框出来
    .CodeMirror {
        border: 1px solid #c1c1c1;
        border-radius: 5px;
        height: 600px;
        font-family: "YaHei Consolas Hybrid",Consolas,"微软雅黑","Meiryo UI","Malgun Gothic","Segoe UI","Trebuchet MS",Helvetica,Monaco,courier,monospace;
        line-height: 1.6;
        font-size: 14px;
    }
       .thoughts-wrapper{
            padding:20px 60px;
            .thoughts-title{
                width:100%;
                margin:30px 0;
                input{
                    background-color: transparent;
                    border-bottom: 1px solid #c1c1c1;
                    font-size: 25px;
                    font-weight: bold;
                    width:100%;
                    outline:none;
                    padding:5px;
                }
            }
            .thoughts-control{
                width:100%;
                height:50px;
            }
            .thoughts-content{
                width:100%;
                font-size: 0;
                .thoughts-textarea{
                    width:50%;
                    display: inline-block;
                    height:600px;
                    vertical-align: top;
                    padding:0;
                    border:0;
                    textarea{
                        width:98%;
                        height:98%;
                        border:none;
                        outline: none;
                        padding: 1% 1%;
                    }
                }
                .thoughts-overview{
                    width:49%;
                    display: inline-block;
                    height:600px;
                    background-color: #ffffff;
                    border-radius: 5px;
                    margin-left:5px;
                    border: 1px solid #c1c1c1;
                }
            }
        }
</style>

<template>
    <div class = "thoughts-wrapper">
        <h2 class="">从这里开始记录你的所思所感吧～</h2>
        <form>
            <div class = "thoughts-title">
                <input type= "text" id ="thoughts_title" placeholder="请输入标题" v-model="title">
            </div>
            <div>
                <div class = "thoughts-control" >这里预留添加快捷按钮</div>
                <div class = "thoughts-content">
                    <div class = "thoughts-textarea">
                        <textarea id = "textarea" class = "thoughts-textarea"  placeholder="请输入正文" v-model="content"></textarea>
                    </div>
                    <div id ="thoughts_overview" class = "thoughts-overview"></div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
   import CodeMirror from 'codemirror/lib/codemirror'   // CodeMirror，必要
   import 'codemirror/lib/codemirror.css'    // css，必要
   import "codemirror/addon/display/fullscreen.js"
   import "codemirror/mode/markdown/markdown.js"// markdown的语法高亮，自行替换为你需要的语言
    export default {
        data:function(){
            return {
                title:'',
                content:'',
            }
        },
        mounted:function(){
            this.createCodeMirror();
        },
        directives: {
            markdown: {
                // 指令的定义
/*                bind:function(el){
                    console.log(el);
                    codemirror = CodeMirror.fromTextArea(el, {
                     lineNumbers: true,
                     styleActiveLine: true,
                     matchBrackets: true,
                     readOnly:false
                     });
                },*/
            }
        },
        methods:{
            createCodeMirror:function(){
                var editor = CodeMirror.fromTextArea(document.getElementById("textarea"), {
                    lineNumbers: true,
                    styleActiveLine: true,// 当前行背景高亮
                    matchBrackets: true,  // 括号匹配
                    readOnly:false,
                    indentUnit: 4,         // 缩进单位为4
                    mode: 'markdown',      //markdown模式
                    lineWrapping: true,    // 自动换行
                });
                editor.on('change',function(e){
                    console.log(e.getValue())
                })
            }

        }
    }
</script>