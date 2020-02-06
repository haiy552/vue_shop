<template>
  <div class="homenav">
   <!-- 标题 -->
   <tiTle class="font">
      <van-icon class="icon" name="wap-nav" @click="goSort"/>
     <div class="search">
       <van-icon class="icon" name="search" color="red"/>
       <input type="text" class="text" value='' ref="text" placeholder="电视" @keydown.enter="search()">
     </div>
     <span @click="login">退出</span>
   </tiTle>
   <transition name="router-fade" mode="out-in">
    <router-view ></router-view>
   </transition>
   <!-- 底部导航 -->
   <bottomnav 
   class="bottomnav" 
   :navlist="navlist"
   ></bottomnav>  
   <!-- 这是一个空盒子 -->
   <div class="space"></div>
  </div>
</template>
<script>
// 组件
import tiTle from '@/components/tiTle';
import bottomnav from '@/components/bottomnav';
export default {
  name: 'homenav',
  data(){
    return{
      navlist:[
            {class:'wap-home', name:'首页', ename: 'home'},
            {class:'shop-collect', name:'分类', ename: 'sort'},
            {class:'cart', name:'购物车', ename: 'cart'} 
        ] 
    }
  },

  methods:{
      changeNum(index){
        this.num = index;
      },
      search(){
        let value = this.$refs.text.value;
        this.$router.push({path:`/goodsList?name=${value}`})
      },
      goSort(){
        this.$router.push({path:`/sort`});
        this.navlist.forEach(item => {item.checked = false});
        this.navlist[1].checked = true;
      },
      // onRefresh() {
      //   setTimeout(() => {
      //   this.isLoading = false;
      //   location.reload([false]);
      //   }, 1000);
      // },
      login(){
        this.$router.push({path:`/`})
      }
  },
  components:{
    tiTle,
    bottomnav
    
  }
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity 2s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
    .homenav{
        width: 100%;
        height: 100%;
        .font{
          .icon{
            @include ct;
            color: $fc;
            left: 0.2rem;
            font-size: 0.45rem;
          }
          .search{
            @include center;
            width: 5rem;
            height: 0.5rem;
            .icon{
              @include ct;
              z-index: 3;
              left: 0.1rem;
              font-size: 0.3rem;
            }
            .text{
              width: 100%;
              height: 100%;
              border-radius: 0.25rem;
              padding: 0.1rem 0.1rem 0.1rem 0.5rem;
              box-sizing: border-box;
              @include center;
              z-index: 0;
              font-size: 0.2rem;
            }
          }
          span{
            @include ct;
            right: 0.2rem;
            color: $fc;
          }
        }
        .space{
          height: 1rem;
          background-color: #fff;
        }
    }

</style>
