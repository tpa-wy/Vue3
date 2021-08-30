import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    meta: "history",
    routes: [
        {
            path: '',
            name: 'Index',
            component: () => import('../pages/Index'),
        },
        // demo1
        {
            path: '/demo1',
            name: 'Demo1',
            component: () => import('../pages/Demo1'),
        },
        // 404
    ],
})
