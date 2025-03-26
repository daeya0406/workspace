import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
    {
        path: '/',
        name: 'DashboardView',
        component: DashboardView
    }
    // 추후 다른 라우트 추가 가능
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
