<template>
    <div id="myeditor" class="editor-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, defineEmits, defineProps } from 'vue';
import E from 'wangeditor'

const emit = defineEmits(["event"])
const props = defineProps({
    content: String,
    height: {
        type: Number,
        default: 320
    }
})

let editor = null
onMounted(() => {
    editor = new E('#myeditor')
    
    // 配置编辑器
    editor.config.height = props.height// 高度
    editor.config.placeholder = '请输入内容...' // 占位符
    editor.config.zIndex = 10// 层级
    editor.config.focus = true// 自动聚焦
    
    // 配置图片上传
    editor.config.uploadImgServer = '/api/upload'
    editor.config.uploadImgMaxSize = 2 * 1024 * 1024 // 2M
    editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif']
    editor.config.uploadImgParams = {
        token: localStorage.getItem('token')
    }
    
    editor.create()
    props.content && editor.txt.html(props.content)
    
    editor.config.onchange = function(newHtml) {
        emit("event", newHtml)
    };
});

onUnmounted(() => {
    editor?.destroy()
    editor = null
})
</script>

<style scoped>
.editor-container {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color 0.2s;
}

.editor-container:hover {
    border-color: #c0c4cc;
}

.editor-container:focus-within {
    border-color: #218efb;
}
</style>