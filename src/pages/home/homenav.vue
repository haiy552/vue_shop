<template>
  <div class="homenav">
   <!-- 标题 -->
   <tiTle class="font">
     <router-link :to="{path: '/sort'}">
      <i class="el-icon-s-data"></i>
     </router-link>
     <div class="search">
       <i class="el-icon-search"></i>
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
            {class:'el-icon-s-home', name:'首页', checked: true, ename: 'home'},
            {class:'el-icon-menu', name:'分类', checked: false, ename: 'sort'},
            {class:'el-icon-shopping-cart-2', name:'购物车', checked: false, ename: 'shop'},
            {class:'el-icon-user', name:'我的', checked: false, ename: 'my'}
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
        position: relative;
        width: 100%;
        top: 0;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        .font{
          height: 6vh;
          position: relative;
          .el-icon-s-data{
            @include ct;
            color: $fc;
            left: 0.2rem;
            font-size: 0.45rem;
          }
          .search{
            @include center;
            width: 5rem;
            height: 4vh;
            
            .el-icon-search{
              @include ct;
              z-index: 2;
              left: 0.1rem;
            }
            .text{
              width: 100%;
              height: 100%;
              border-radius: 0.25rem;
              padding: 0.1rem 0.1rem 0.1rem 0.5rem;
              box-sizing: border-box;
              @include center;
              z-index: 1;
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
          height: 5%;
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
