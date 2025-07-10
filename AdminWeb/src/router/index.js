import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue' 
import Main from '@/views/Mainbox.vue'
import RoutesConfig from './config'
import { useAppStore } from '../stores/index'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: Main,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 获取store实例
  const appStore = useAppStore()
  
  if (to.name === 'login') {
    next()
  } else {
    if (!localStorage.getItem("token")) {
      next({ path: '/login' })
    } else {
      // 修改state访问方式
      if (!appStore.isGetterRouter) {  
        router.removeRoute('mainbox')
        configrouter()
        next({ path: to.fullPath })
      } else {
        next()
      }
    }
  }
})

const configrouter = () => {
  // 获取store实例
  const appStore = useAppStore()
  
  if(!router.hasRoute('mainbox')){
    router.addRoute(
      {
        path: '/mainbox',
        name: 'mainbox',
        component: Main,
      }
    )
  }
  RoutesConfig.forEach(item=>{
    checkPermission(item) && router.addRoute('mainbox',item)
    })

  // 修改action调用方式
  appStore.ChangesGetterRouter(true)
}

const checkPermission = (item) => {
  // 获取store实例
  const appStore = useAppStore()
  
  if (item.requireAdmin) {
    // 修改state访问方式
    return appStore.userInfo.role === 1
  }
  return true
}

export default router
