/*
import işlemi ile 3 tane farklı yapıyı içeri aktarmışız burada.
*/
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


/*
Burada ise routers kullanmışız. Bu routers uzantı "/" olursa bunu bunu yap demektedir.
*/
const routes = [
  {
    //Burada görüldüğü gibi. / işareti ile home çağırıldığı belirtilmiş.
    //Companet ile de homeview vue dosyası çağırılmış.
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    /*  
    Burada ise "/about" uzantısı kullanılırsa AboutView.vue dosyasını import et demiş. Ve bütün bu dosyaların ana ismine about demişiz.
    */
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

//Burada createRouter ile router oluşturuyoruz.
//History ile geçmişimizi kayıt altına alıyoruz
//routs ifadesi ise yukarıda belirlediğimiz yapılar olmata.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Bu ifade ile de router ımızı dışarıya açıyoruz. 
export default router
