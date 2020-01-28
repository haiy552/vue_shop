<template>
  <div class="carlist">
    <el-carousel trigger="click" height="4rem" :interval="4000">
      <el-carousel-item v-for="item in photoList" :key="item.id">
        <img :src= 'item.url' alt="" height="100%" width="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'carlist',
  props: ["photoList"],
  created(){
    
  },
  methods:{
    
  }

}
</script>

<style scoped lang="scss">

   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
