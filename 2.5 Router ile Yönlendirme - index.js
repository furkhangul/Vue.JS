
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {

    path: '/',
    name: 'home',
    component: HomeView
  },
  {

    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:"/students",
    name:"students",
    component: ()=> import("../views/Students.vue")
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
