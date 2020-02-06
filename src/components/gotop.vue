<template>
  <div class="goTop">
      
  </div>
</template>

<script>

export default {
  name: 'floorList',
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';
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