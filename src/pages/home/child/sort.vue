<template>
  <div class="sort">
    <!-- 分类 -->
    <categories 
    :leftCatList="leftCatList" 
    :rightCatList="rightCatList"
    @rightCatListInit="rightCatListInit" >
    </categories> 
  </div>
</template>
<script>

// promise请求
import { cat } from "@/api/index";
// 组件
import categories from '@/components/categories';

export default {
  name: 'sort',
  data(){
    return{
      // 分类
      leftCatList: [],
      rightCatList: []
    }
  },
  watch:{

  },
  created(){
    // 分类初始化
    this.catListInit();
    this.rightCatListInit(0);
  },
  methods:{
    catListInit(){
      cat().then(res => {
        this.leftCatList = res.map(item => {
          return {catId: item.cat_id, catName: item.cat_name}
        });
      })
    },
    rightCatListInit(index){
      cat().then(res => {
        let data = res[index]['children'];
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

</style>
