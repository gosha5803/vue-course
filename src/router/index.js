import PostsPage from '@/pages/PostsPage'
import HomePage from '@/pages/HomePage'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/posts', component: PostsPage},
    {path: '/', component: HomePage},

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router