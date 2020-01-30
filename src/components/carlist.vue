<template>
  <div class="carlist" >
    <swiper :options="swiperOption" class="carbox">
      <swiperSlide v-for="item in photoList" :key="item.id" class="list">
        <img :src="item.url" />
      </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carlist',
  props: ["photoList"],
  data(){
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  created(){
    
  },
  methods:{
    
  },
  components:{
    swiper,
    swiperSlide
  }

}
</script>

<style scoped lang="scss">
  .carlist{
    width: 100%;
    height: 4rem;
    .carbox{
      width: 100%;
      height: 100%;
      // background-image: url("http://pic174.nipic.com/file/20180725/25005174_212224094000_2.jpg");
      .list{
        width: 100%;
        height: 100%;
        img{
          display: block;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
