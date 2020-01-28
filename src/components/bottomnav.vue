<template>
  <div class="bottomnav">
    <div class="nav" 
    v-for="(item,index) in navlist" 
    :key="item.name"
    :class="index == num? 'bg' : ''"
    @click="cInit(item.ename,index)">
        <span :class="item.class"></span>
        <span v-text="item.name" ></span>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'bottomnav',
  props: ['navlist', 'num'],
  data(){
      return {
      
      }
  },
  created(){
    
  },
  methods:{
    cInit(url,index){
        this.$router.push({path:`/${url}`});
        this.$emit('changeNum',index);
    }
  }

}
</script>

<style scoped lang="scss">
@import '../common/style/mixin';
    .bg {
      span{
        color: red !important;
      }
        // background: $fc !important; 
    }
    .bottomnav{
        display: flex;
        position: fixed;
        width:100%;
        height: 0.8rem;
        bottom:0;
        background-color: $fc;
        text-align: center;
        align-items: center;
        box-shadow: 0px 5px 9px 5px rgba(0, 0, 0, 0.3);
        .nav{
            flex:1;
            height: 100%;
            display: flex;
            flex-flow: column;
            text-align: center;
            padding: 0.1rem;
            span{
                font-size: 0.2rem;
            }
        }
    }
  
</style>