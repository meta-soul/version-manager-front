//导入路由方法
import { createRouter, createWebHistory } from 'vue-router'
//导入组件
import Home from '@/views/Home.vue'
//路由规则
const routes = [
    {
        path: '/',
        component: Home,
    },
]
//路由创建
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router