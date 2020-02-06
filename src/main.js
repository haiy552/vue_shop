import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './vant/index'
import './common/js/fsrem'

Vue.config.productionTip = false

//缓存
import VuePageStack from 'vue-page-stack';
Vue.use(VuePageStack, { router, name: 'VuePageStack', keyName: 'stack-key' });

// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
