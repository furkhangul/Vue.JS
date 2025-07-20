
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
    //Buradaki ifade, router tarafondan :id parametresinin StudentInfo.vue beleşenine prop olarak aktarılmasını sağlar.


    //Props kullanımının amacı:
    //Bileşenler arasında bağımlılık azaltmak.
    //Kodun okunabilirliği ve yeniden kullanılabilirliği.
    //Veri yukarıdan aşağıya doğru aktarmak için tek yönde veri akışı.

    /*

        | **Tanımı**             | Bir bileşenin dışarıdan veri almasını sağlar                        |
        | **Nerede Tanımlanır?** | `props: ['id']` gibi `<script>` içinde                              |
        | **Nasıl Kullanılır?**  | `{{ id }}` veya `this.id` şeklinde içerikte kullanılır              |
        | **Veri Akışı**         | Üst bileşenden alt bileşene doğru (tek yönlü)                       |
        | **Vue Router ile**     | `props: true` dersen, route parametreleri otomatik olarak prop olur |

    */
    props: true
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
