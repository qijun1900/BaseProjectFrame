<template>
    <div>
        <Divider content="快捷操作">
            <el-icon><EditPen /></el-icon>
        </Divider>
        <el-row :gutter="20">
            <el-col :span="6"><el-card shadow="hover"></el-card></el-col>
            <el-col :span="6"><el-card shadow="hover"></el-card></el-col>
            <el-col :span="6"><el-card shadow="hover"></el-card></el-col>
            <el-col :span="6"><el-card shadow="hover"></el-card></el-col>
        </el-row>
        <Divider content="数据概览"></Divider>
    </div>
</template>
<script setup>
import Divider from '@/components/FunComponents/Divider.vue';
import { EditPen } from '@element-plus/icons-vue';

</script>
<style scoped>

</style>
