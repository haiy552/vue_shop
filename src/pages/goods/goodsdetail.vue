<template>
  <div class="goodsList">
    <tiTle>
        <span>商品信息</span>
    </tiTle>
    <div>
        <div>
            <img :src="goodsDetailList.goodsUrl" alt="">
        </div>
        <div>
            <span>{{goodsDetailList.goodsName}}</span>
            <span>{{goodsDetailList.goodsPrice}}</span>
        </div>
    </div>   
  </div>
</template>

<script>
import {goodsDetail} from '../../api/index'
import tiTle from '../../components/tiTle';
export default {
  name: 'goodsList',
  data(){
      return {
          goodsDetailList:[]
      }
  },
  watch:{
   
  },
  computed: {
  },
  created(){
    this.goodsDetailListInit()
  },
  methods:{
    goodsDetailListInit(){
      let id = this.$route.query.goodsid;
    //   console.log(this.$route.query);
      goodsDetail(id).then(res => {
          console.log(res);
        this.goodsDetailList = [{
            goodsId: res.cat_id, 
            goodsName: res.goods_name, 
            goodsPrice: res.goods_price, 
            goodsUrl: res.goods_small_logo}]
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
      height: 100vh;
      background-color: $fc;
      .el-icon-arrow-left{
        @include font;
        @include ct;
        margin-left: 0.1rem;
      }
      .font{
       height: 5vh;
       line-height: 5vh;
       position: relative;
       .font1{
         @include center;
         @include font;
       }
      }
      .box{
         @include center;
      }
      .infinite-list-wrapper{
        width: 100%;
        height: 95vh;
        .list{
          display: flex;
          flex-flow: column;
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
      
    }
    
  
</style>