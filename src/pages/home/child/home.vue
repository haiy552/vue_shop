<template>
  <div class="home">
   <!-- 轮播图 -->
   <carlist class="carphoto" :photoList="photoList"></carlist>
   <!-- 导航栏 -->
   <navList :navList="navList"></navList>
   <!-- 楼层 -->
   <floorList :floorDataList="floorDataList"></floorList> 
  </div>
</template>
<script>
// promise请求
import { car, nav, floordata} from "../../../api/index";
// 组件
import carlist from '../../../components/carlist';
import navList from '../../../components/nav';
import floorList from '../../../components/floorList';
export default {
  name: 'home',
  data(){
    return{
      // 轮播图列表
      photoList: [],
      // 导航列表
      navList:[],
      // 楼层列表
      floorDataList:[]
    }
  },
  created(){
    // 轮播图初始化
    this.carList();
    // 导航初始化
    this.create_nav();
    // 楼层初始化
    this.floorList_init();
  },
  methods:{
    cInit(res){
      // let data = res.data.message;
          return res.map(item => {
            return {id: item.goods_id, url: item.image_src, name: item.name, }
      })
    },
    carList(){
      car().then(res => {this.photoList = this.cInit(res)})
    },
    create_nav(){
      nav().then(res => {this.navList = this.cInit(res)})
    },

    floorList_init(){
      floordata().then(res => {
        // let data = res.data.message;
          this.floorDataList = res.map(item => {
            return [{titleName:item.floor_title.name, titleUrl:item.floor_title.image_src},
            item.product_list.map(item => {return {productName: item.name, productUrl: item.image_src, navigatorUrl: item.navigator_url}})
            ]
          })
      })
    }


  },
  components:{
    carlist,
    navList,
    floorList,
  }
}
</script>

<style scoped lang="scss">
    .home{
        width: 100%;
        height: calc(100vh -2rem);
        background-color: #fff;
        overflow: auto;
    }
</style>
