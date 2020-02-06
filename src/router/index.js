import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '@/App'
const homeNav = () => import('@/pages/home/homenav')
const goodsList = () => import('@/pages/goods/goodslist')
const goodsDetail = () => import('@/pages/goods/goodsdetail')
const cart = () => import('@/pages/cart/cartlist')
const login = () => import('@/pages/logins/login')

const home = () => import('@/pages/home/child/home')
const sort = () => import('@/pages/home/child/sort')

Vue.use(VueRouter)

const routes = [
    {path: '/', component: login},
    {
      path: '/home',
      component: homeNav,
      children:[
        {path: '/home', component: home},
        {path: '/sort', component: sort, meta:{keepAlive: true}}
      ]
    },
    {path: '/goodsList', name:'goodsList', component: goodsList, meta:{keepAlive: true}},
    {path: '/goodsDetail', component: goodsDetail},
    {path: '/cart', component: cart}]



const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  routerPush,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
  } else {
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop;
    }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

export default router

