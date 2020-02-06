<template>
  <div class="buttom">
    <!-- 返回 -->
      <van-icon class="goBack" name="arrow-left" @click="goBack" />
      <!-- 回到主页 -->
      <van-icon class="goHome" name="wap-home" @click="goHome" />
  </div>
</template>

<script>
export default {
  name: 'buttom',
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    goHome(){
      this.$router.push({path:`/home`})
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';
    .goBack,
    .goHome{
      position: fixed;
       top: 0.2rem;
       font-size: 0.45rem;
       color: $fc;
       padding: 0.08rem;
       background-color: rgba(0,0,0,0.5);
       border-radius: 50%;
       z-index: 2;
    }
    .goBack{
      left: 0.2rem;
    }
    .goHome{
      right: 0.2rem;
    }
  
</style>