import axios from "axios";
export const postUserLogin = async (loginForm) => {
    try{    
        const response = await axios.post("/adminapi/user/login", loginForm);
        if(response.data.ActionType === "OK") {
            return response.data
        }else {
            return null
        }
    }catch (error) {
        console.error("Error during user login:", error);
        throw error; 
    }
}