import axios from "axios";
import upload from "@/util/upload";

export async function getUserList(params) {
    // 获取用户列表
    try {
        const response = await axios.get("/adminapi/user/list", params);
        if(response.data.ActionType === "OK") {
            return response.data;
        }
        else {
            return null;
        }
    }catch (error) {
        console.error("Error during user login:", error);
        throw error;
    }
}

export async function postAddUser(userData) {
    // 添加用户
    try {
        const response = await upload("/adminapi/user/add", userData);
        if(response.ActionType === "OK") {
            return response; 
        }
        else {
            return null;
        }
    }catch (error) {
        console.error("Error during user login:", error);
        throw error; 
    }
}
export async function PostDeleteOneUser(_id) {
    // 删除单个用户
    try {
        const response = await axios.post("/adminapi/user/deloneuser",{_id});
        if(response.data.ActionType === "OK") {
            return response.data;
        }
    }catch (error) {
        console.error("Error during user login:", error);
        throw error;
    }
}

export async function PostDeleteManyUser(_ids) {
    // 删除多个用户
    try {
        const response = await axios.post("/adminapi/user/delmanyuser",{_ids});
        if(response.data.ActionType === "OK") {
            return response.data;
        } 
    }
    catch (error) {
        console.error("Error during user login:", error);
        throw error;
    }
    
}

export async function postEditUser(userData) {
  try {
    const response = await axios.post("/adminapi/user/edituser", userData)
    console.log(response.data)
    if(response.data.ActionType === "OK") {
      return response.data
    } 
  } catch (error) {
    console.error("Error during user edit:", error)
    throw error
  }
}