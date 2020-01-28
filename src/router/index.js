import Vue from 'vue'
import VueRouter from 'vue-router'

const homeNav = () => import('../pages/home/homenav')
const goodsList = () => import('../pages/goods/goodslist')
const goodsDetail = () => import('../pages/goods/goodsdetail')

const home = () => import('../pages/home/child/home')
const sort = () => import('../pages/home/child/sort')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: homeNav,
    children:[
      {path: '/home', component: home},
      {path: '/sort', component: sort}
    ]
  },
  {path: '/goodsList', component: goodsList},
  {path: '/goodsDetail', component: goodsDetail},
]

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  routerPush
})

export default router
