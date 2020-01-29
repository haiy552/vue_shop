<template>
  <div class="homenav">
   <!-- 标题 -->
   <tiTle class="font">
     <router-link :to="{path: '/sort'}">
      <van-icon class="icon" name="wap-nav"/>
     </router-link>
     <div class="search">
       <!-- <van-icon name="apps-o" /> -->
       <van-icon class="icon" name="search" color="red"/>
       <input type="text" class="text" value='' ref="text" placeholder="电视" @keydown.enter="search()">
     </div>
     <span>登录</span>
   </tiTle>
   <transition mode="out-in">
      <router-view></router-view>
   </transition>
   <div class="space"></div>
   <!-- 底部导航 -->
   <bottomnav 
   class="bottomnav" 
   :navlist="navlist"
   :num="num"
   @changeNum="changeNum"></bottomnav>  
  </div>
</template>
<script>
// 组件
import tiTle from '../../components/tiTle';
import bottomnav from '../../components/bottomnav';
export default {
  name: 'homenav',
  data(){
    return{
      navlist:[
            {class:'wap-home', name:'首页', checked: true, ename: 'home'},
            {class:'shop-collect', name:'分类', checked: false, ename: 'sort'},
            {class:'cart', name:'购物车', checked: false, ename: 'shop'},
            {class:'friends', name:'我的', checked: false, ename: 'my'}
        ],
        num: 0
    }
  },
  created(){
   
  },
  filters:{
    changeTitlt(data){
      let title;
      data.map(item => {
        if(item.checked == true){   
          title = item.name;
        }
      })
      return title
    }
    
  },
  methods:{
      changeNum(index){
        this.num = index;
      },
      search(){
        let value = this.$refs.text.value;
        this.$router.push({path:`/goodsList?name=${value}`})
      }

  },
  components:{
    tiTle,
    bottomnav
  }
}
</script>

<style scoped lang="scss">
@import '../../common/style/mixin';
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
    .v-enter,
    .v-leave-to{
        opacity:0;
        transform: rotateY(90deg);
        transform-origin: center center;
    }
    
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }
</style>
