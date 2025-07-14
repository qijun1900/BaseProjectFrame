<template>
    <div>
        <Divider content="快捷操作">
            <el-icon>
                <EditPen />
            </el-icon>
        </Divider>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover" class="quick-card">
                    <div class="card-content">
                        <div class="card-header">
                            <el-icon class="card-icon"><Promotion /></el-icon>
                            <span class="card-title">快捷操作</span>
                        </div>
                        <div class="card-body">
                            <el-statistic title="日活跃用户" :value="268500" />
                            <el-button type="primary" class="card-button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="quick-card">
                    <div class="card-content">
                        <div class="card-header">
                            <el-icon class="card-icon"><Promotion /></el-icon>
                            <span class="card-title">数据统计</span>
                        </div>
                        <div class="card-body">
                            <el-statistic title="总用户数" :value="12500" />
                            <el-button type="primary" class="card-button">查看详情</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="quick-card">
                    <div class="card-content">
                        <div class="card-header">
                            <el-icon class="card-icon"><Promotion /></el-icon>
                            <span class="card-title">系统监控</span>
                        </div>
                        <div class="card-body">
                            <el-statistic title="在线设备" :value="42" />
                            <el-button type="primary" class="card-button">监控面板</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="quick-card">
                    <div class="card-content">
                        <div class="card-header">
                            <el-icon class="card-icon"><Promotion /></el-icon>
                            <span class="card-title">消息中心</span>
                        </div>
                        <div class="card-body">
                            <el-statistic title="未读消息" :value="3" />
                            <el-button type="primary" class="card-button">查看消息</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <Divider content="数据概览"></Divider>
        <el-row :gutter="20">
            <el-col :span="10"><el-card shadow="hover"><BarChart/></el-card></el-col>
            <el-col :span="14"><el-card shadow="hover"><PieChart/></el-card></el-col>
        </el-row>
        
    </div>
</template>
<script setup>
import Divider from '@/components/ReuseComponents/Divider.vue';
import { EditPen ,Promotion} from '@element-plus/icons-vue';
import BarChart from '@/components/Chart/BarChart.vue';
import PieChart from '@/components/Chart/PieChart.vue';
// import LineChart from '@/components/FunComponents/LineChart.vue';

</script>
<style scoped>
.quick-card {
    height: 100%;
}

.card-content {
    padding: 10px;
}

.card-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.card-icon {
    font-size: 20px;
    margin-right: 8px;
}

.card-title {
    font-weight: bold;
}

.card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-button {
    margin-top: 10px;
}
</style>