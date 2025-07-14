
export const useUserActions = () => {
    // 用户相关业务逻辑
    const handleAddUser = () => console.log('新增用户')
    const handleExportUser = () => console.log('导出用户')
    const handleEdit = (row) => console.log('编辑用户', row)
    const handleMore = (row) => console.log('更多操作', row)
    
    return {
        handleAddUser,
        handleExportUser,
        handleEdit,
        handleMore
    }
}