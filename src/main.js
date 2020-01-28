import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/js/fsrem'




import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false


// const def_lazy_img = () => import('../static/img/loading.gif')
// Vue.use(VueLazyLoad,{
//   loading: def_lazy_img
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
