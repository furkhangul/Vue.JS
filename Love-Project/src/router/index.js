import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/sayac',
    name: 'sayac',
    component: () => import('../views/Sayac.vue')
  },
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
  { path: '/galeri',
    name: 'galeri',
    component: () => import('../views/Galeri.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
