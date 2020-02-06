<template>
  <!-- 轮播图组件 -->
  <div class="carlist" :class="photoList.length == 0? 'img' : ''" >
    <swiper 
    :options="swiperOption"
    v-if="photoList.length != 0"
    class="carbox">
      <swiperSlide v-for="item in photoList" 
      :key="item.id"
      class="list" >
        <img :src="item.url" />
      </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
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
          clickable: true, // 允许点击小圆点跳转
          color: "red"
        },
        autoplay: {
          delay: 3000, // 轮播图播放的时间段
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
  .img{
    background: url("http://hbimg.b0.upaiyun.com/1e3ead27ad747c7c92e659ac5774587a680bb8d25252-mRVFlu_fw658") no-repeat ;
    background-size: 50% 50%;
    background-position: 50% 50%;
  }
  .carlist{
    width: 100%;
    height: 4rem;
    .carbox{
      width: 100%;
      height: 100%;
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
