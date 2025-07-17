<template>
    <el-dialog 
    v-model="dialogVisible" 
    :title="props.DilogTitle" 
    :width="props.DilogWidth">
    <slot name="dialogcontent"></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button 
          @click="dialogVisible = false">
          取消
        </el-button>
        <el-button 
          type="primary" 
          @click="handleConfirm">
          {{ props.DilogButContent }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
const emit = defineEmits(['dialogConfirm', 'update:modelValue'])
const dialogVisible = ref(false)
const props = defineProps({
  DilogTitle: {
    type: String,
    default: "对话内容"
  },
  modelValue: { 
    type: Boolean,
    default: false
  },
  DilogWidth: {
    type: String,
    default: "500px"
  },
  DilogButContent: {
    type: String,
    default: "确认"
  }

})

// 同步父组件的 v-model 值
watch(() => props.modelValue, (newVal) => {
  dialogVisible.value = newVal
})
// 当对话框关闭时同步状态
watch(dialogVisible, (val) => {
  emit('update:modelValue', val)
})
// 点击确认按钮的逻辑
const handleConfirm = () => {
  emit('dialogConfirm')
  dialogVisible.value = false
}


</script>


