<template>
  <div class="goodsList">
    <!-- header -->
    <tiTle class="font">
      <van-icon class="icon" name="arrow-left" @click="goBack" />
      <span class="font1">商品列表</span> 
    </tiTle>
    <!-- 商品栏 -->
    <div class="list" v-if="goodsList.length != 0">
        <li v-for="item in goodsList" 
        :key="item.goodsId" 
        @click="getgoodsDetail(item.goodsId)"
        class="list-item">
          <div class="goodsLeft">
            <img :src="item.goodsUrl || 'http://hbimg.b0.upaiyun.com/1e3ead27ad747c7c92e659ac5774587a680bb8d25252-mRVFlu_fw658'"/>
          </div>
          <div class="goodsRight">
            <span class="goodsTitle">{{item.goodsName}}</span>
            <span class="goodsPrice">{{`￥${item.goodsPrice}`}}</span>
          </div>
        </li>
    </div>
    <!-- 缓冲动画 -->
    <loading v-if="goodsList.length == 0"></loading>
  </div>
</template>

<script>
// promise方法
import {goodsList} from '@/api/index'
// 组件
import tiTle from '@/components/tiTle';
import loading from '@/components/loading';
export default {
  name: 'goodsList',
  data(){
      return {
        goodsList: [],
        count: 0
      }
  },
  watch:{
  
  },
  computed: {
  },
  created(){
    this.goodsListInit();
  },
  // beforeRouteLeave(to,from,next){
  //   const toUrl = '/goodsDetail';
  //   const fromUrl = "/goodsList";
  //   if(to.path == toUrl){
  //       this.changeKeepAlive(fromUrl, true);
  //       next();
  //   }else{
  //       this.changeKeepAlive(fromUrl, false);
  //       next();
  //   }
    
  // },
  methods:{
    goodsListInit(){
      let id = this.$route.query.id || '';
      let keyword = this.$route.query.name || '';
      
      goodsList(id,keyword).then(res => {
        let data = res.goods;
        this.goodsList =  data.map(item => {
          return {goodsId: item.goods_id, 
                  goodsName: item.goods_name, 
                  goodsPrice: item.goods_price, 
                  goodsUrl: item.goods_small_logo}
        })
      })
    },
    goBack(){
      this.$router.back()
    },
    getgoodsDetail(id){
      this.$router.push({path:`/goodsDetail?goodsid=${id}`})
    }
  },
  components:{
    tiTle,
    loading
  }
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';
     .goodsList{
      width: 100%;
      height: 100%;
      background-color: $fc;
      .font{
        
       .icon{
          @include ct;
          color: $fc;
          left: 0.2rem;
          font-size: 0.45rem;
        }
       .font1{
         @include center;
         color: $fc;
       }
      }
      .box{
         @include center;
      }
      .list{
        width: 100%;
        height: 100%;
        &:nth-of-type(n){
            border-bottom: 0;
        }
          .list-item{
            padding: 0.2rem 0.2rem 0 0.2rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            height: 3rem;
            display: flex;
            .goodsLeft{
              background-size: cover;
              height: 2.5rem;
              width: 40%;
              img{
                height: 100%;
                width: 100%;
              }
            }
            .goodsRight{
              padding: 0.1rem 0.1rem 0 0.1rem;
              height: 100%;
              width: 60%;
              .goodsTitle{
                @include b3;
              }
              .goodsPrice{
                padding-top: 0.1rem;
                font-size: 0.4rem;
                display: block;
                color: red;
              }
            }
          
        }
      }
      
    }

    
  
</style>