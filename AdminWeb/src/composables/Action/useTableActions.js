import { ref } from 'vue'
import { ElMessage } from 'element-plus'
//Api请求方法
import {PostDeleteOneUser,getUserList,PostDeleteManyUser} from '@/API/Users/userAPI'
//表格操作方法
export function useTableActions() {
    const selectedRows = ref([])// 选中的行数据
    
    const handleSelectionChange = (val) => {
        selectedRows.value = val
    }
    
    // 支持单条和批量删除
    const handleDelete = async(target) => {
        if (Array.isArray(target)) {
            try {
                const userIds = target.map(user => user._id)
                const res = await PostDeleteManyUser(userIds)
                if(res.ActionType === 'OK'){
                    ElMessage.success('批量删除成功')
                }
                console.log('批量删除:', userIds)
            }catch (error) {
                console.error('批量删除失败:', error)
                throw error
            }
        } else {
            try {
                const res = await PostDeleteOneUser(target._id)
                if(res.ActionType === 'OK'){
                    ElMessage.success('单条删除成功')
                }
            } catch (error) {
                console.error('删除失败:', error)
                throw error
            }
        }
    }

    //表格刷新方法
    const handleRefresh =async  (params = {}) => {
        try{
           const res  =  await getUserList({
            page: params.page || 1,
            size: params.size || 20
           })
           if(res.ActionType=== 'OK'){
            ElMessage.success('表格刷新成功')
           }
           return res 
        }catch(error){
            console.error('刷新表格失败:', error)
            throw error
        }
       
    }
    return { selectedRows, handleSelectionChange, handleDelete,handleRefresh }
}