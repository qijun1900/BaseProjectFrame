<template>
    <div>
        <el-card style="border-radius: 4px" shadow="never"  v-show="showSearch">
                <el-row :gutter="30">
                    <el-col :span="7">
                        <el-form-item label="输入条件:" style="margin-bottom: 0;">
                            <el-input
                                v-model="input1"
                                style="width: 270px"
                                placeholder="条件1"
                                clearable/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">                        
                        <el-form-item label="输入条件:" style="margin-bottom: 0;">
                            <el-input
                                v-model="input2"
                                style="width: 270px"
                                placeholder="条件2"
                                clearable/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="输入条件:" style="margin-bottom: 0;">
                            <el-input
                                v-model="input3"
                                style="width: 270px"
                                placeholder="条件3"
                                clearable/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                         <Tooltip content="搜索内容">
                            <template #description>
                                <el-button type="primary" :icon="Search" circle />
                            </template>
                        </Tooltip>
                        <Tooltip content="重置条件">
                            <template #description>
                                <el-button type="danger" :icon="CloseBold" circle />  
                            </template>
                        </Tooltip>                  
                    </el-col>
                </el-row>
        </el-card>
        <div class="eidt-card">
            <el-card style="border-radius: 4px," shadow="never" >
                <div class="edit-btn">
                    <el-row :gutter="200">
                        <el-col :span="18"> 
                            <el-button 
                                type="success" 
                                plain
                                @click="handleAddNews">新增信息</el-button>
                            <el-button 
                                type="danger" 
                                :disabled="!selectedRows || selectedRows.length === 0"
                                plain
                                @click="handleDeleteChooseNews">删除信息</el-button>   
                        </el-col> 
                        <el-col :span="6"> 
                            <Tooltip content="隐藏搜索">
                                <template #description>
                                    <el-button 
                                        type="primary" 
                                        :icon="Hide" 
                                        circle 
                                        @click="HandleHideSearch"/>
                                </template>
                            </Tooltip>
                            <Tooltip content="开启/关闭斑马纹">
                                <template #description>
                                    <el-button 
                                        type="primary" 
                                        :icon="Open" 
                                        circle 
                                        @click="handleOpenStripe"/>
                                </template>
                            </Tooltip>
                            <Tooltip content="刷新表格">
                                <template #description>
                                    <el-button 
                                        type="primary" 
                                        :icon="RefreshRight" 
                                        circle 
                                        @click="handleRefresh" />
                                </template>
                            </Tooltip>
                        </el-col> 
                    </el-row>
                </div>
            </el-card>
        </div>
        <div class="edit-table">
            <el-table
                :data="tableData"
                style="width: 100%"
                max-height="690"
                :stripe="IsOpenStripe"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" />
                <el-table-column 
                    type="index" 
                    label="序号" 
                    width="70"
                    :index="(index) => index + 1" />
                <el-table-column  label="信息内容" width="280" >
                    <template #default="scope">
                        {{ scope.row.title }}
                    </template>
                </el-table-column>
                <el-table-column label="公告类型" width="120">
                    <template #default="scope">
                        <el-tag v-if="scope.row.type === 1" type="success" >公告</el-tag>
                        <el-tag v-else type="warning" >通知</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="状态" width="150">
                    <template #default="scope">
                       <el-tag v-if="scope.row.status === 1" type="success" round>启用</el-tag>
                        <el-tag v-else type="danger" round>禁用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="创建者" width="150">
                    <template #default="scope">
                        {{ scope.row.creator }}
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" width="180">
                    <template #default="scope">
                        {{ scope.row.createTime }}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                            <template  #default="scope">
                                <el-button 
                                    type="primary" 
                                    plain
                                    @click="handleEdit(scope.row)">
                                    编辑
                                </el-button>
                                <el-button
                                    type="danger"
                                    plain
                                    @click="handleDelete(scope.row)">
                                    删除
                                </el-button>
                                <el-button
                                    type="info"
                                    plain
                                    @click="handleMore(scope.row)">
                                    更多
                                </el-button>
                            </template>
                    </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <Pagination/>
        </div>
    </div>
</template>
<script setup>
import { Search, RefreshRight, CloseBold, Hide ,Open} from '@element-plus/icons-vue' 
import { useTableState ,useSearchUserFilters} from '@/composables/State/useTableState'
import Tooltip from '@/components/ReuseComponents/Tooltip.vue'
import { useTableActions } from '@/composables/Action/useTableActions'
import Pagination from '@/components/ReuseComponents/Pagination.vue'


//tableData数据
const tableData = [
  {
    title: '系统维护通知',
    type: 1,
    status: 1,
    creator: '管理员',
    createTime: '2024-03-20 14:30:00'
  },
  {
    title: '春节放假安排',
    type: 2,
    status: 1,
    creator: '人事部',
    createTime: '2024-02-05 09:15:00'
  },
  {
    title: '账号安全提醒',
    type: 1,
    status: 0,
    creator: '安全中心',
    createTime: '2024-03-18 16:45:00'
  },
  {
    title: '新功能上线公告',
    type: 2,
    status: 1,
    creator: '产品部',
    createTime: '2024-03-15 10:00:00'
  },
  {
    title: '会议室使用规范',
    type: 1,
    status: 1,
    creator: '行政部',
    createTime: '2024-03-10 11:20:00'
  },
  {
    title: '考勤制度更新',
    type: 2,
    status: 0,
    creator: '人事部',
    createTime: '2024-03-01 08:30:00'
  }
];
//搜索条件管理
const { input1, input2, input3 } = useSearchUserFilters()
//UI 状态与方法管理
const { showSearch, IsOpenStripe, HandleHideSearch, handleOpenStripe } = useTableState()
// 表格数据与方法管理
const { selectedRows, handleSelectionChange, handleDelete,handleRefresh } = useTableActions()


// 复用通用删除逻辑
const handleDeleteChooseNews = () => handleDelete(selectedRows.value)




</script>
<style scoped>
.eidt-card {
    margin-top: 10px;
}
.edit-table{
    margin-top: 10px;
}
.pagination{
    margin-top: 15px;
    display: flex; 
    justify-content: center; 
    align-items: center;
}
:deep(.el-table__header th) {
    background-color: #f5f7fa !important;
}
/* 添加滑动过渡效果 */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

</style>