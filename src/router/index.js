import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes=[
  {
    path:'/',
    component:Main,
    name:'Main',
    redirect:"/home", //重定向跳转到home
    children:[]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]
const router = new VueRouter({
    routes
  })

export default router