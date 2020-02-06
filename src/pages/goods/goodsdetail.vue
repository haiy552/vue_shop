<template>
    <div class="goodsDetail">
      <buttom></buttom>
      <!-- 图片轮播 -->
      <carlist class="carphoto" :photoList="photoList"></carlist>
      <!-- 商品描述 -->
      <div class="goodsShow">
        <div class="goodsPrice" >
          <h2 v-cloak>{{`￥${goodsDetailList.goodsPrice}`}}</h2>
        </div>
        <div class="goodsName">
          <h3 v-cloak>{{goodsDetailList.goodsName}}}</h3>
        </div>  
      </div>  
      <!-- 商品详细 -->
      <van-tabs animated  background="#fff" title-active-color="red" class="goodsNav">
        <van-tab title="商品介绍" class="goodsShow1">
          <div class="goodsShowBox" v-if="photoList != ''">
            <div v-for="item in photoList" :key="item.id" class="goodsBox">
              <img :src="item.url" class="goodsImg"/>
            </div>
          </div>
          <span v-else>暂无</span>
        </van-tab>
        <van-tab title="规格参数">暂无</van-tab>
        <van-tab title="售后保障">暂无</van-tab>
      </van-tabs>

      <!-- 加入购物 -->
      <van-goods-action class="shopWin">
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" :info="cartLength" @click="goCart"/>
        <!-- <van-goods-action-icon icon="star-o" text="收藏" /> -->
        <van-goods-action-button type="warning" text="加入购物车" color="#be99ff" @click="addCart"/>
        <van-goods-action-button type="danger" text="立即购买" color="#7232dd"/>
      </van-goods-action>
      <!-- 这是一个空格 -->
      <div class="space"></div>
      <!-- 回到顶部 -->
      
  </div>
</template>

<script>
import carlist from '@/components/carlist';
import buttom from '@/components/buttom';
import {goodsDetail} from '@/api/index'
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'goodsDetail',
  data(){
      return {
          // 商品信息
          goodsDetailList:[],
          // 轮播图列表
          photoList: []
      }
  },
  computed: {
    ...mapState(["cartList"]),
    cartLength(){
      return this.cartList.length;
    }
  },
  created(){
    this.goodsDetailListInit();
    
  },

  mounted(){
    document.documentElement.scrollTop=0;
  },
  updated() {
    window.sessionStorage.setItem('list', JSON.stringify(this.cartList))
  },
 
  methods:{
    ...mapMutations(["ADD_CART"]),
    imgmap(data){
      let pics = data.pics;
      return pics.map(item => {
        return {id: item.pics_id, url: item.pics_mid};
      })
    },
    goodsDetailListInit(){
      let id = this.$route.query.goodsid;
      goodsDetail(id).then(res => {
        this.goodsDetailList = {
            goodsId: res.goods_id, 
            goodsName: res.goods_name, 
            goodsPrice: res.goods_price,
            goodsNum: 1,
            goodsSImg: res.goods_small_logo,
            checked: true};
        this.photoList = this.imgmap(res);
        }); 
    },
    getgoodsDetail(id){
      this.$router.push({path:`/goodsDetail?goodsid=${id}`})
    },
    addCart(){
      this.ADD_CART(this.goodsDetailList)
    },
    goCart(){
      this.$router.push({path:'/cart'})
    }
  },
  components:{
    carlist,
    buttom
  }
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';
  [v-cloak] {
    display: none !important;
  }
  .goodsDetail{
    width: 100%;
    height: 100%;
    .carphoto{
      z-index: 2;
      height:6rem;
    }
    .goodsShow{
      width: 100%;
      height: 2.5rem;
      background-color: $fc;
      .goodsPrice{
        width: 100%;
        height: 1rem;
        padding: 0.2rem 0 0 0.1rem;
        border-radius: 0.2rem;
        h2{
          color: $red
        }
      }
      .goodsName{
        width: 100%;
        height: 1.2rem;
        padding: 0.2rem 0 0.2rem 0.1rem;
        background-color: $fc;
        border-radius: 0.2rem;
        h3{
          font-family: '黑体';
          @include b3;
        }
      }
    }
    .goodsNav{
      z-index: 1;
      text-align:center;
      margin-top: 2.5rem;
      .goodsShowBox{
        display: flex;
        flex-flow: column;
        .goodsBox{
          width: 100%;
          height: 7rem;
          .goodsImg{
            width:100%;
            height:100%;
          }
        }
      }
    }
    .shopWin{
      z-index: 2;
      height: 1rem;
    }
    .space{
      width:100%;
      height: 1rem;
    }
  }
</style>