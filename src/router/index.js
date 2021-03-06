import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
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
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import('../pages/Error/404'),
        }
    ],
})
