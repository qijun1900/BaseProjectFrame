export const useNewsActions = () => {
    // 用户相关业务逻辑
    const handleAddNews = () => console.log('新增')
    const handleEdit = (row) => console.log('编辑', row)
    const handleMore = (row) => console.log('更多操作', row)
    
    return {
        handleAddNews,
        handleEdit,
        handleMore
    }
}