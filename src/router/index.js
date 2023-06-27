import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from '@/components/UserLogin.vue'
import UserHome from '@/components/UserHome.vue'
import Welcome from '@/components/UserWelcome.vue'
import User from '@/components/user/MyUser.vue'
import Rights from '@/components/power/UserRights.vue'
import Roles from '@/components/power/UserRoles.vue'
import Cate from '@/components/goods/MyCate.vue'
import Params from '@/components/goods/MyParams.vue'
import GoodsList from '@/components/goods/MyList.vue'
import Add from '@/components/goods/MyAdd.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: UserLogin },
    { path: '/login', component: UserLogin },
    {
      path: '/home',
      component: UserHome,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: User },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/params', component: Params },
        { path: '/goods', component: GoodsList },
        { path: '/goods/add', component: Add }
      ]
    }
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
