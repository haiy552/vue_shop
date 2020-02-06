<template>
  <!-- 底部导航 -->
  <div class="bottomnav">
    <div class="nav" 
    v-for="(item) in navlist" 
    :key="item.name"
    :class="$route.path==`/${item.ename}`? 'bg' : ''"
    @click="cInit(item.ename)">
        <van-icon class="icon" :name="item.class" />
        <span v-text="item.name" ></span>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'bottomnav',
  props: ['navlist'],
  methods:{
    cInit(url){
        this.$router.push({path:`/${url}`});
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';
    .bg {
      .icon,
      span{
        color: red !important;
      }
    }
    .bottomnav{
        display: flex;
        position: fixed;
        align-items: center;
        width:100%;
        height: 1rem;
        bottom:0;
        background-color: $fc;
        box-shadow: 0px 5px 9px 5px rgba(0, 0, 0, 0.3);
        // padding: 0.1rem 0.1rem 0.3rem 0.1rem;
        .nav{
            width: 33.33%;
            height: 60%;
            display: flex;
            flex-flow: column;
            text-align: center; 
        }
    }
  
</style>