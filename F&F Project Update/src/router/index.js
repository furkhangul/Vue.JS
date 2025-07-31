import { createRouter, createWebHashHistory } from 'vue-router'
import Anasayfa from '../views/AnaSayfa.vue'

const routes = [
  {
    path: '/sayac',
    name: 'sayac',
    component: () => import('../views/Sayac.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Anasayfa
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/Uygulama.vue')
  },
  { path: '/galeri',
    name: 'galeri',
    component: () => import('../views/Galeri.vue')
  },
  { path: '/not',
    name: 'not',
    component: () => import('../views/Not.vue')
  },
  { path: '/notekle',
    name: 'notekle',
    component: () => import('../views/NotEkle.vue')
  },
  { path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/NotDuzenle.vue')
  },
  { path: '/chat',
    name: 'chat',
    component: () => import('../views/Mesaj.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router