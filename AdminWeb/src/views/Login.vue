<template>
    <div class="login-container">
        <div class="login-box">
            <h2 class="login-title">
                <el-icon class="title-icon"><UserFilled /></el-icon>
                欢迎登录
            </h2>
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                status-icon
                :rules="loginrules"
                label-width="80px"
                class="demo-ruleForm"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input 
                        v-model="loginForm.username" 
                        placeholder="请输入用户名"
                        :prefix-icon="User"
                    />
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input
                        v-model="loginForm.password"
                        type="password"
                        placeholder="请输入密码"
                        :prefix-icon="Lock"
                        show-password
                    />
                </el-form-item>

                <el-form-item>
                    <el-button 
                        type="primary" 
                        @click="submitForm" 
                        class="login-button"
                        :icon="Pointer"
                    >
                        立即登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
// 在原有import基础上新增图标引入
import { UserFilled, User, Lock, Pointer } from '@element-plus/icons-vue';
import { reactive, ref } from "vue";
import { ElMessage } from 'element-plus'
// import { useAppStore } from '../stores/index'
import { postUserLogin } from "@/API/Login/postUserLogin";
import RouterPush from "@/util/RouterPush";



// const appStore = useAppStore()

const loginForm = reactive({
    username: "",
    password: "",
});

const loginFormRef = ref({});

//规则
const loginrules = reactive({
    username: [
        {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
        },
    ],
    password: [
        {
        required: true,
        message: "请输入密码",
        trigger: "blur",
        },
    ],
});

const submitForm = ()=>{
    try{
        loginFormRef.value.validate(async (valid)=>{
            if(valid){
                //1.调用登录接口
                const res = await postUserLogin(loginForm)
                console.log(res.data)
                if(res.ActionType ==="OK"){
                    console.log("登录成功")
                    RouterPush("/mainbox")
                }else{
                    ElMessage.error("用户名或密码错误！！！")
                }
            }
        })
    }catch(e){
        console.error("登录失败", e)
    }
        
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #388eff, #0466f9);
}

.login-box {
    background: rgba(255, 255, 255, 0.95);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 420px;
    transition: all 0.3s ease;
}

.login-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.title-icon {
    font-size: 2rem;
    color: #1a73e8;
}

:deep(.el-form-item__label) {
    font-weight: 500;
    color: #5a5a5a;
}

.login-button {
    width: 100%;
    margin-top: 1rem;
    padding: 12px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

.login-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(32, 80, 223, 0.3);
}

:deep(.el-input__inner) {
    border-radius: 8px;
    padding: 0.8rem 1rem;
}
</style>