
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
    ,{   
    path:"/students/:id",
    name:"studentsInfo",
    component: ()=> import("../views/StudentInfo.vue"),
    props: true
    },
    //Burada eğer /students yerine student yazarksak redirect etiketi sayesinde yönlendirilmesi sağlanabilir.
    {
      path:"/student",
      redirect:"/students"
    },

    //Eğer girdiğimiz link uzantısı bulunamıyorsa bizi 404 sayfasına atması için bu kodu kullanacağız.
    {
      path:"/:catchAll(.*)",
      name:"NotFound",
      component: ()=> import("../views/NotFount.vue")
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
