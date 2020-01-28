<template>
  <div class="floorList">
      <div class="floorBox" v-for="item in floorDataList" :key="item.index">
          <div class="top"><img :src="item[0].titleUrl" :alt="item.titleName"></div>
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
    display: flex;
    flex-flow: column;
    .floorBox{
      display: flex;
      flex-flow: column;
      padding-top: 0.2rem;
      // height: 6rem;
      .top{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .bottom{
       
        li{
          float: left;
          width: 33.33%;
          &:nth-of-type(n+2){
          height: calc(33.33vw * 386 / 232 / 2); 
          border-left: 0.1rem solid #fff;  
        }
         &:nth-child(2),
         &:nth-child(3){
          border-bottom: 0.1rem solid #fff;  
        }
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