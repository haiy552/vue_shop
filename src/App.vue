<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <vue-page-stack>
        <router-view></router-view>
      </vue-page-stack>
    </transition>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
  mounted(){
    this.add()
  },
  methods:{
      ...mapMutations(["CART"]),
    add(){
        let list = JSON.parse(window.sessionStorage.getItem('list'));
        if(list){
            this.CART(list)
        }
    }
  },
}
</script>
<style lang="scss">
  @import './common/style/common';
	#app{
    font-size: 0.3rem;
    .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .5s;
    }
    .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
    }
  }
  
</style>
