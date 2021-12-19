import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: dashboard,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "Overview" */ '../views/Checklist.vue')
            },
            {
                path: '/checklist',
                component: () => import(/* webpackChunkName: "Messages" */ '../views/Checklist.vue')
            },
            {
                path: '/checklist_template',
                component: () => import(/* webpackChunkName: "Profile" */ '../views/ChecklistTemplate.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
