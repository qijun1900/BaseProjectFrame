import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import '@/util/axios.config.js'


const pinia = createPinia()

const app = createApp(App)
app.use(pinia) 
app.use(router)
app.use(ElementPlus)

app.mount('#app')
