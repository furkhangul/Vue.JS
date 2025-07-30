import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AnaSayfa.vue'

const routes = [
  {
    path: '/',
    name: 'AnaSayfa',
    component: HomeView
  },
  {
    path: '/ekle',
    name: 'ProjeEkle',
    component: () => import( '../views/Proje Ekle.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import("../views/Edit.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
