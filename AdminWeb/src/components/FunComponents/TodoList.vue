<template>
  <div class="todo-container">
    <el-input 
      v-model="newTodo" 
      placeholder="输入新任务" 
      @keyup.enter="addTodo"
      class="todo-input"
    >
      <template #append>
        <el-button @click="addTodo" :icon="Plus" />
      </template>
    </el-input>
    
    <el-scrollbar height="200px">
      <el-checkbox-group v-model="completedTodos">
        <div v-for="(todo, index) in todos" :key="index" class="todo-item">
          <el-checkbox :label="index">
            <span :class="{ 'completed': completedTodos.includes(index) }">
              {{ todo }}
            </span>
          </el-checkbox>
          <el-button 
            type="danger" 
            :icon="Delete" 
            circle 
            size="small"
            @click="removeTodo(index)"
          />
        </div>
      </el-checkbox-group>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Delete } from '@element-plus/icons-vue'

const newTodo = ref('')
const todos = ref([])
const completedTodos = ref([])

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim())
    newTodo.value = ''
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
  // 从已完成列表中移除
  const completedIndex = completedTodos.value.indexOf(index)
  if (completedIndex !== -1) {
    completedTodos.value.splice(completedIndex, 1)
  }
}
</script>

<style scoped>
.todo-container {
  padding: 10px;
}
.todo-input {
  margin-bottom: 10px;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--el-border-color-light);
}
.completed {
  text-decoration: line-through;
  color: var(--el-text-color-secondary);
}
</style>




<!-- <template>
  <div class="todo-container">
    <el-input 
      v-model="newTodo" 
      placeholder="输入新任务" 
      @keyup.enter="addTodo"
      class="todo-input"
    >
      <template #append>
        <el-button @click="addTodo" :icon="Plus" />
      </template>
    </el-input>
    
    <el-scrollbar height="200px" v-loading="loading">
      <div v-for="todo in todos" :key="todo.id" class="todo-item">
        <el-checkbox 
          :model-value="todo.completed" 
          @change="() => toggleTodo(todo)"
        >
          <span :class="{ 'completed': todo.completed }">
            {{ todo.title }}
          </span>
        </el-checkbox>
        <el-button 
          type="danger" 
          :icon="Delete" 
          circle 
          size="small"
          @click="removeTodo(todo.id)"
          :loading="loading"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Plus, Delete } from '@element-plus/icons-vue'
import { getTodos, addTodoApi, deleteTodoApi, toggleTodoApi } from '@/API/Fun/todos'

const newTodo = ref('')
const todos = ref([])
const loading = ref(false)

// 获取待办事项列表
const fetchTodos = async () => {
  loading.value = true
  try {
    const res = await getTodos()
    todos.value = res.data
  } finally {
    loading.value = false
  }
}

// 添加待办事项
const addTodo = async () => {
  if (!newTodo.value.trim()) return
  
  try {
    await addTodoApi({ title: newTodo.value.trim() })
    await fetchTodos()
    newTodo.value = ''
  } catch (error) {
    console.error('添加失败:', error)
  }
}

// 删除待办事项
const removeTodo = async (id) => {
  try {
    await deleteTodoApi(id)
    await fetchTodos()
  } catch (error) {
    console.error('删除失败:', error)
  }
}

// 切换完成状态
const toggleTodo = async (todo) => {
  try {
    await toggleTodoApi(todo.id, { completed: !todo.completed })
    await fetchTodos()
  } catch (error) {
    console.error('状态更新失败:', error)
  }
}

// 初始化加载数据
onMounted(() => {
  fetchTodos()
})
</script>

<style scoped>
.todo-container {
  padding: 10px;
}
.todo-input {
  margin-bottom: 10px;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--el-border-color-light);
}
.completed {
  text-decoration: line-through;
  color: var(--el-text-color-secondary);
}
</style> -->
