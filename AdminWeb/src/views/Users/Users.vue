<template>
    <div>
        <el-card style="border-radius: 4px" shadow="never">
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
                            <el-button type="success" plain>新建用户</el-button>
                            <el-button type="danger" plain>删除用户</el-button>   
                            <el-button type="warning" plain>导出用户</el-button>
                        </el-col> 
                        <el-col :span="6"> 
                            <Tooltip content="隐藏搜索">
                                <template #description>
                                    <el-button type="primary" :icon="Hide" circle />
                                </template>
                            </Tooltip>
                            <Tooltip content="开启/关闭斑马纹">
                                <template #description>
                                    <el-button type="primary" :icon="Open" circle />
                                </template>
                            </Tooltip>
                            <Tooltip content="刷新表格">
                                <template #description>
                                    <el-button type="primary" :icon="RefreshRight" circle />
                                </template>
                            </Tooltip>
                        </el-col> 
                    </el-row>

                    
                </div>
                <div class="edit-table">
                    <el-table 
                        :data="tableData" 
                        style="width: 100%" 
                        @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55" />
                        <el-table-column 
                            type="index" 
                            label="序号" 
                            width="70"
                            :index="(index) => index + 1" />
                        <el-table-column  label="名称" width="100" >
                            <template #default="scope">
                                {{ scope.row.name }}
                            </template>
                        </el-table-column>
                        <el-table-column  label="简介" width="250" >
                            <template #default="scope">
                                {{ scope.row.address }}
                            </template>
                        </el-table-column>
                        <el-table-column label="性别" width="100">
                            <template #default="scope">
                                <el-tag v-if="scope.row.gender === 1" type="primary">男</el-tag>
                                <el-tag v-else-if="scope.row.gender === 2" type="danger">女</el-tag>
                                <el-tag v-else type="info">保密</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="角色" width="150">
                            <template #default="scope">
                                <el-tag v-if="scope.row.role === 1" type="success">管理员</el-tag>
                                <el-tag v-else type="warning">编辑</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="状态" width="150">
                            <template #default="scope">
                                <el-tag v-if="scope.row.status === 1" type="success" round>启用</el-tag>
                                <el-tag v-else type="danger" round>禁用</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column  label="时间" width="150" >
                            <template #default="scope">
                                {{ scope.row.date }}
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template  #default="scope">
                                <el-button>
                                    编辑
                                </el-button>
                                <el-button>
                                    删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { Search ,RefreshRight,CloseBold, Hide, Open} from '@element-plus/icons-vue'
import Tooltip from '@/components/ReuseComponents/Tooltip.vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
// 新增表格引用和选中数据
const selectedRows = ref([])
// 更新后的tableData数据
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    gender: 1,
    role: 1,
    status: 1
  },
  {
    date: '2016-05-02',
    name: 'Lucy',
    address: 'No. 189, Grove St, Los Angeles',
    gender: 2,
    role: 2,
    status: 0
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    gender: 1,
    role: 1,
    status: 1
  },
   {
    date: '2024-03-01',
    name: '张伟',
    address: '北京市朝阳区建国路',
    gender: 1,
    role: 1,
    status: 1
  },
  {
    date: '2024-03-02', 
    name: '王芳',
    address: '上海市浦东新区',
    gender: 2,
    role: 2,
    status: 0
  },
  {
    date: '2024-03-03',
    name: '李强',
    address: '广州市天河区体育西路',
    gender: 1,
    role: 2,
    status: 1
  },
  {
    date: '2024-03-04',
    name: '赵敏',
    address: '深圳市福田区',
    gender: 2,
    role: 1,
    status: 1
  },
  {
    date: '2024-03-05',
    name: '陈伟',
    address: '杭州市西湖区',
    gender: 0,
    role: 2,
    status: 0
  },
  {
    date: '2024-03-20',
    name: '周涛',
    address: '成都市锦江区',
    gender: 1,
    role: 2,
    status: 1
  }
]


// 处理选中事件
const handleSelectionChange = (val) => {
    selectedRows.value = val
    console.log(val)
}

</script>


<style scoped>
.eidt-card {
    margin-top: 10px;
}
.edit-table{
    margin-top: 10px;
}
:deep(.el-table__header th) {
    background-color: #f5f7fa !important;
}
</style>