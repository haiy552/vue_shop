<template>
    <div class="goodsDetail">
      <i class="el-icon-arrow-left" @click="goBack"></i>
      <carlist class="carphoto" :photoList="photoList"></carlist>
        <div>
            <span>{{goodsDetailList.goodsName}}</span>
            <span>{{goodsDetailList.goodsPrice}}</span>
        </div>  
  </div>
</template>

<script>
import carlist from '../../components/carlist';
import {goodsDetail} from '../../api/index'
export default {
  name: 'goodsDetail',
  data(){
      return {
          goodsDetailList:[],
          // 轮播图列表
          photoList: [],
      }
  },
  watch:{
   goBack(){
      this.$router.go(-1)
    },
  },
  computed: {
  },
  created(){
    this.goodsDetailListInit()
  },
  methods:{
    imgmap(data){
      let pics = data.pics;
      return pics.map(item => {
        return {id: item.pics_id, url: item.pics_sma}
      })
    },
    goodsDetailListInit(){
      let id = this.$route.query.goodsid;
      goodsDetail(id).then(res => {
        this.goodsDetailList = {
            goodsId: res.cat_id, 
            goodsName: res.goods_name, 
            goodsPrice: res.goods_price}
            // goodsUrl: this.imgmap(res)
        this.photoList = this.imgmap(res)
        });
        
    },
    goBack(){
      this.$router.go(-1)
    },
    getgoodsDetail(id){
      this.$router.push({path:`/goodsDetail?goodsid=${id}`})
    }

  },
  components:{
    carlist,
  }
}
</script>

<style scoped lang="scss">
@import '../../common/style/mixin';
       .el-icon-arrow-left{
         position: fixed;
          top: 0.2rem;
          left: 0.2rem;
          font-size: 0.45rem;
          color: $fc;
          padding: 0.08rem;
          background-color: rgba(0,0,0,0.5);
          border-radius: 50%;
          z-index: 2;
        }
        .carphoto{
          z-index: 2;
        }
       
    
  
</style>