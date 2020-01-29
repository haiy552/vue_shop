import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {loading} from './untils/index'
import './common/js/fsrem'

Vue.prototype.$loading = loading
Vue.config.productionTip = false
import {  Swipe, SwipeItem , Icon } from 'vant';
Vue.use(Swipe)
   .use(SwipeItem)
   .use(Icon);
// const def_lazy_img = () => import('../static/img/loading.gif')
// Vue.use(VueLazyLoad,{
//   loading: def_lazy_img
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
