import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {loading} from './untils/index'
import './common/js/fsrem'
import 'swiper/dist/css/swiper.css'


Vue.prototype.$loading = loading
Vue.config.productionTip = false
// 轮播字体
import {  Swipe, SwipeItem , Icon } from 'vant';
// 底部导航
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
// 标签页
import { Tab, Tabs } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Icon);
Vue.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon);
Vue.use(Tab).use(Tabs);
Vue.use(VueAwesomeSwiper)
// const def_lazy_img = () => import('../static/img/loading.gif')
// Vue.use(VueLazyLoad,{
//   loading: def_lazy_img
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
