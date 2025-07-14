<template>
    <el-pagination 
    v-model:current-page="currentPage"
    background 
    layout="total, sizes, prev, pager, next, jumper"
    :total="1000" 
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    />
</template>
<script setup>
import { ref } from 'vue'

const currentPage = ref(5)

const handleSizeChange = (val) => {
  // 修改提示信息为中文
  console.log(`每页 ${val} 条数据`)
}
const handleCurrentChange = (val) => {
  // 修改提示信息为中文
  console.log(`当前页码: ${val}`)
}
</script>