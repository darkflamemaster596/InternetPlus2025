import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    // 使用 Vite 的环境变量配置基础路径
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        // 如果有保存的滚动位置，则返回保存的位置
        if (savedPosition) {
            return savedPosition;
        }
        // 否则保持滚动条位置不变
        return false;
    },
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
            component: () => import('@/pages/education.vue'),
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