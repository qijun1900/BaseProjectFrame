<template>
    <el-aside :width="appStore.isCollapse ? '64px' : '150px'">
        <el-menu
        :collapse="appStore.isCollapse"
        :router="true"
        :default-active="route.fullPath"
        >
        <el-menu-item index="/index">
            <el-icon><HomeFilled/></el-icon>
            <span>首页</span>
        </el-menu-item>

        <el-menu-item index="/center">
            <el-icon><Avatar/></el-icon>
            <span>个人中心</span>
        </el-menu-item>

        <el-sub-menu index="/user-manage" v-admin >
          <template #title>
            <el-icon><UserFilled/></el-icon>
            <span>用户管理</span>
          </template>
            <el-menu-item index="/user/adduser">添加用户</el-menu-item>
            <el-menu-item index="/user/userlist">用户列表</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/news-manage">
          <template #title>
            <el-icon><MessageBox/></el-icon>
            <span>信息管理</span>
          </template>
            <el-menu-item index="/news/addnews">添加信息</el-menu-item>
            <el-menu-item index="/news/newslist">信息列表</el-menu-item>
        </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<script setup>
import { useAppStore } from '@/stores/index';
import {HomeFilled,Avatar,UserFilled,MessageBox} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const appStore = useAppStore()
const vAdmin = {
    mounted(el){
      if(appStore.userInfo.role !== 1){
        el.parentNode.removeChild(el)
      }
    }
}

</script>
<style scoped>
.el-aside{
    height: 100vh; 
    .el-menu{
        height: 100vh;
    }
}
</style>