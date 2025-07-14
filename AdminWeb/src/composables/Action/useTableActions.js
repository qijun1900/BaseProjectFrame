// 添加更完善的类型提示
import { ref } from 'vue'
export function useTableActions() {
    const selectedRows = ref([])
    
    const handleSelectionChange = (val) => {
        selectedRows.value = val
        console.log('Selected rows:', val)
    }
    
    // 增强删除逻辑，支持单条和批量删除
    const handleDelete = (target) => {
        if (Array.isArray(target)) {
            console.log('批量删除:', target)
        } else {
            console.log('单条删除:', target)
        }
        // 这里可以添加通用的删除逻辑，例如API调用
    }


    //表格刷新方法
    const handleRefresh = () => {
        // 这里可以添加刷新逻辑，例如重新获取数据
        console.log('表格刷新')
    }

    
    return { selectedRows, handleSelectionChange, handleDelete,handleRefresh }
}