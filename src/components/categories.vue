<template>
  <div class="categories">
    <!-- 左导航 -->
    <div class="leftBox" ref="leftBox">
      <div class="nav" 
      v-for="(item, index) in leftCatList" 
      :key="item.catId" 
      :class="index == num ? 'bg' : ''"
      @click="getrightLIst(index)">
        <h4>{{item.catName}}</h4>
      </div>
    </div>
    <!-- 右视图 -->
    <div class="rightBox" ref="rightBox">
      <div class="catLIst" 
      v-for="item in rightCatList" 
      :key="item.catId">
        <strong>{{item.catName}}</strong>
        <div class="catSlIst">
          <div class="catbox"
          v-for="it in item.children" 
          :key="it.catId" 
          @click="getPage(it.catId)">
              <img :src="it.catUrl" alt="">
              <span>{{it.catName}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categories',
  props: ['leftCatList', 'rightCatList'],
  data(){
    return{
      num: 0
    }
  },
  deactivated () {
    let leftScroll = this.$refs.leftBox.scrollTop;
    let rightScroll = this.$refs.rightBox.scrollTop;
    let cateScroll = [{"leftScroll":leftScroll},{"rightScroll":rightScroll}];
    window.sessionStorage.setItem('cateScroll', JSON.stringify(cateScroll));
  },
  activated () {
    let cateScroll = JSON.parse(window.sessionStorage.getItem("cateScroll")) || null;
    if(cateScroll){
      this.$refs.leftBox.scrollTop = cateScroll[0].leftScroll;
      this.$refs.rightBox.scrollTop = cateScroll[1].rightScroll;
    }
  },
  methods:{
    // getList(index){
    //   this.catList[index].flag ? this.$refs.icon[index].style.transform ='rotateZ(0deg)':this.$refs.icon[index].style.transform= 'rotateZ(-90deg)';
    //   this.catList[index].flag = !this.catList[index].flag;
    // }
    getrightLIst(index=0){
      this.$emit('rightCatListInit',index);
      this.$refs.rightBox.scrollTop = 0;
      this.num = index;
    },
    getPage(id){
      this.$router.push({path:`/goodsList?id=${id}`})
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/common/style/mixin';
  .bg {
      background: $fc !important;
      h4{
        color: red;
      }
  }
  .categories{
    width: 100%;
    display: flex;
    height: calc(100vh - 2rem);
    background-color: $fc;
    .leftBox{
      flex: 1;
      overflow: auto; 
      display: flex;
      flex-flow: column;
      .nav{
        background-color: #f8f8f8;
         text-align: center;
         h4{
          padding: 0.1rem;
          white-space: nowrap;
          cursor: pointer;
          }
        &:nth-of-type(1){
          border: 0;
        }
      } 
    }
    .rightBox{
      flex: 3;
      height: calc(100vh - 2rem);
      overflow: auto;
      .catLIst{
        width: 100%;
        display: flex;
        flex-flow: column;
        padding-top: 0.2rem;
        strong{
          padding-left: 0.1rem;
        }
        .catSlIst{
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          .catbox{
            width: 33.33%;
            display: flex;
            flex-flow: column;
            align-items: center;
            padding: 0.1rem;
            box-sizing: border-box;
            span{
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              display: block;
              width: 100%;
              text-align: center;
            }
            img{
              width: 100%;
              height: 1.5rem;
            }
          } 
        }
      }
    }
  }
</style>
