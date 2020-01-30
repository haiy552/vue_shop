<template>
  <div class="goodsList">
    <tiTle class="font">
      <van-icon class="icon" name="arrow-left" @click="goBack" />
      <span class="font1">商品列表</span> 
    </tiTle>
    <div class="list" v-if='flag'>
        <li v-for="item in goodsList" 
        :key="item.goodsId" 
        @click="getgoodsDetail(item.goodsId)"
        class="list-item">
          <div class="goodsLeft">
            <img :src="item.goodsUrl" alt="">
          </div>
          <div class="goodsRight">
            <span class="goodsTitle">{{item.goodsName}}</span>
            <span class="goodsPrice">{{`￥${item.goodsPrice}.00`}}</span>
          </div>
        </li>
    </div>
    
    <div class="box" v-else-if='!flag'>
      <div class="loading"></div>
    </div>
  </div>
</template>

<script>

import {goodsList} from '../../api/index'
import tiTle from '../../components/tiTle';
export default {
  name: 'goodsList',
  data(){
      return {
        goodsList: [],
        flag: false,
        loading: false,
        count: 0
      }
  },
  watch:{
    goodsList(n){
      if(n){
        this.flag = false;
        setTimeout(() => {this.flag = true}, 100)
      }
    }
  },
  computed: {
  },
  created(){
    this.goodsListInit()
  },
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
      this.$router.go(-1)
    },
    getgoodsDetail(id){
      this.$router.push({path:`/goodsDetail?goodsid=${id}`})
    }

  },
  components:{
    tiTle

  }
}
</script>

<style scoped lang="scss">
@import '../../common/style/mixin';
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
            height: 3rem;
            display: flex;
            box-sizing: border-box;

            .goodsLeft{
              height: 2.5rem;
              width: 40%;
              background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580145404198&di=e9c8d3bdea2e511271f2d8d6b75300cb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D5b8366d5b5315c6043956be7bdb0cbe6%2F8bf95443fbf2b211286e4f8ec38065380ed78ef4.jpg);
              background-size: cover;
              img{
                height: 100%;
                width: 100%;
              }
            }
            .goodsRight{
              height: 100%;
              width: 60%;
              padding: 0.1rem 0.1rem 0 0.1rem;
              .goodsTitle{
                @include b3;
              }
              .goodsPrice{
                display: block;
                padding-top: 0.1rem;
                font-size: 0.4rem;
                color: red;
              }
            }
          
        }
      }
      
    }

    
  
</style>