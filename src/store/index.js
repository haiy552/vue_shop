import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	//latitude: '', // 当前位置纬度
	//longitude: '', // 当前位置经度
	cartList: [], // 加入购物车的商品列表
	goodsTotal:'',
	userInfo: null, //用户信息
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
