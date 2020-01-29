<template>
  <div class="sort">
    <!-- 分类 -->
   <categories :leftCatList="leftCatList" 
   :rightCatList="rightCatList"
   @rightCatListInit="rightCatListInit" ></categories> 
  </div>
</template>
<script>
// promise请求
import { cat } from "../../../api/index";
// 组件
import categories from '../../../components/categories';

export default {
  name: 'sort',
  data(){
    return{
      // 分类
      leftCatList: [],
      rightCatList: [],
    }
  },
  created(){
    // 分类初始化
    this.catListInit();
    this.rightCatListInit(0);
    
  },
  methods:{
    // catInit(){
    //   cat().then(res => {
    //     let data = res.data.message;
    //     // 待用递归的方法
    //     this.catList = data.map(item => {
    //       // 总类
    //       return {catId: item.cat_id, catName: item.cat_name, flag: false, catChildren:
    //         // 子类
    //         item.children.map(item => {
    //           return {catPid: item.cat_Pid, catPname: item.cat_name}
    //         })
    //       }
    //     })
    //   })
    // },
    
    catListInit(){
      cat().then(res => {
        // let data = res.data.message;
        this.leftCatList = res.map(item => {
          return {catId: item.cat_id, catName: item.cat_name}
        });
      })
    },
    rightCatListInit(index){
      cat().then(res => {
        let data = res[index]['children'];
        // console.log(data);
        this.rightCatList = data.map(item => {
          return {catId: item.cat_id, catName: item.cat_name, children: item.children.map(item => {
            return {catId: item.cat_id, catName: item.cat_name, catUrl: item.cat_icon}
          })}
        });
      })
    }
},
  components:{
    categories
  }
}
</script>

<style scoped lang="scss">
    .sort{
        width: 100%;
        height:100%;
    }
</style>
