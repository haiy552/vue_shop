<template>
  <div class="carlist">
    <van-swipe class="carbox" :autoplay="3000" indicator-color="red">
      <van-swipe-item class="list" v-for="item in photoList" :key="item.id">
        <img :src="item.url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'carlist',
  props: ["photoList"],
  created(){
    
  },
  methods:{
    
  },
  components:{
 
  }

}
</script>

<style scoped lang="scss">
  .carlist{
    width: 100%;
    .carbox{
      width: 100%;
      height: 4rem;
      .list{
        width: 100%;
        height: 100%;
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
