<template>
  <!-- 首页菜单导航 -->
  <div class="nav">
      <li class="navTitle" v-for="item in navList" :key="item.name">
          <img class="navImg" :src="item.url" title="item.name" alt="item.name">
      </li>  
  </div>
</template>

<script>

export default {
  name: 'varlist',
  props: ['navList'],
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';

  .nav{
      width:100%;
      display:flex;
      flex-flow: wrap;
      .navTitle{
          width: 25%;
          padding: 0.1rem;
          box-sizing: border-box;
          .navImg{
              width: 100%;
          }
      }
  }
</style>