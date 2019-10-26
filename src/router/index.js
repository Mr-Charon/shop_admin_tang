import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // name: 'index',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  }

]

const router = new VueRouter({
  routes
})
// 配置全局前置守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else { next('/login') }
})
export default router
