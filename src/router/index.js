import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from '@/components/UserLogin.vue'
import UserHome from '@/components/UserHome.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: UserLogin },
    { path: '/login', component: UserLogin },
    { path: '/home', component: UserHome }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // next() 放行 next('/login')强制跳转

  // 访问登录页 放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
