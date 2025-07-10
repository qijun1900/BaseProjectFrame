<template>
    <el-header>
        <div class="left">
            <el-icon :size="25" @click="handleCollapse"><Menu /></el-icon>
            <span>XXX后台管理系统</span>
        </div>
        <div class="right">
            <span>欢迎 {{ appStore.userInfo.username }} 回来</span>
            <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                    <el-icon :size="30">
                        <User />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
// 修改导入方式
import { useAppStore } from '@/stores/index';
import { Menu, User } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const appStore = useAppStore() // 使用Pinia store

// 修改方法调用方式
const handleCollapse = () => {
    appStore.changeCollapse()
}

const handleCenter = () => {
    router.push('/center')
}

const handleLogout = () => {
    localStorage.removeItem("token")
    appStore.clearUserInfo() 
    router.push('/login')
}

</script>
<style scoped>
.el-header {
    background-color: rgba(171, 212, 254, 0.769);
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    /*两端对齐*/
    align-items: center;
}

.right,
.left {
    display: flex;

}

.left {
    i {
        margin: auto;
    }
}

.right {
    .el-dropdown {
        margin: auto;
    }
}
</style>