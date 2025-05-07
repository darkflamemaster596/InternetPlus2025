import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    // 使用 Vite 的环境变量配置基础路径
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('@/pages/home.vue')
        },
        {
            name: 'work',
            path: '/work',
            component: () => import('@/pages/work.vue')
        },
        {
            name: 'education',
            path: '/education',
            component: () => import('@/pages/education.vue')
        },
        {
            name: 'explore',
            path: '/explore',
            component: () => import('@/pages/explore.vue')
        },
        {
            name: 'market',
            path: '/market',
            component: () => import('@/pages/market.vue')
        },
    ]
})

export default router