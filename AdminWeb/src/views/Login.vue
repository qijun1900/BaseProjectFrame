<template>
    <div class="login-container">
          <div class="login-box">
          <h2 class="login-title">欢迎登录</h2>
            <el-form
            ref="loginFormRef"
            :model="loginForm"
            status-icon
            :rules="loginrules"
            label-width="auto"
            class="demo-ruleForm"
            >
              <el-form-item label="用户名" prop="username">
                  <el-input v-model="loginForm.username" autocomplete="off" />
              </el-form-item>
      
              <el-form-item label="密码" prop="password">
                  <el-input v-model="loginForm.password" type="password" autocomplete="off" />
              </el-form-item>
    
              <el-form-item>
                  <el-button type="primary" @click="submitForm" class="login-button">
                  登录
                  </el-button>
              </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
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
                    RouterPush("/index")
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