<template>
  <div class="floorList">
      <!-- 每个网格 -->
      <div class="floorBox" v-for="item in floorDataList" :key="item.index">
          <!-- 标题 -->
          <div class="top"><img :src="item[0].titleUrl" :alt="item.titleName"></div>
          <!-- 分类 -->
          <div class="bottom">
              <li v-for="it in item[1]" :key="it.index">
                <img :src="it.productUrl" alt="" >
              </li>
          </div>     
      </div>
  </div>
</template>

<script>

export default {
  name: 'floorList',
  props: ['floorDataList'],
  data(){
    return {
    
    }
  },
  
  methods:{
    
  }

}
</script>

<style scoped lang="scss">
@import '../common/style/mixin';
 
  .floorList{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.1rem;
    padding-top: 0.1rem;
    .floorBox{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      .top{
        width: 100%;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .bottom{
       display: grid;
       grid-template-columns: 1.2fr 1fr 1fr;
       grid-gap: 0.1rem;
        li{
          &:nth-of-type(1){
           grid-row: 1/3;
          }
        //   &:nth-of-type(2),
        //   &:nth-of-type(3){
        //    grid-row:1;
        //   }
        //  &:nth-of-type(4){
        //    grid-row:2;
        //   }
        
          img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        
       
      }
    }
  }
</style>