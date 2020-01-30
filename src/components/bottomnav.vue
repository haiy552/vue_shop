<template>
  <div class="bottomnav">
    <div class="nav" 
    v-for="(item,index) in navlist" 
    :key="item.name"
    :class="item.checked? 'bg' : ''"
    @click="cInit(item.ename,index)">
        <van-icon class="icon" :name="item.class" />
        <span v-text="item.name" ></span>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'bottomnav',
  props: ['navlist'],
  data(){
      return {
      
      }
  },
  created(){
    
  },
  methods:{
    cInit(url,index){
        this.$router.push({path:`/${url}`});
        this.navlist.forEach(item => {item.checked = false});
        this.navlist[index].checked = true;
    }
  }

}
</script>

<style scoped lang="scss">
@import '../common/style/mixin';
    .bg {
      .icon,
      span{
        color: red !important;
      }
    }
    .bottomnav{
        display: flex;
        position: fixed;
        align-items: center;
        width:100%;
        height: 1rem;
        bottom:0;
        background-color: $fc;
        box-shadow: 0px 5px 9px 5px rgba(0, 0, 0, 0.3);
        // padding: 0.1rem 0.1rem 0.3rem 0.1rem;
        .nav{
            width: 25%;
            height: 60%;
            display: flex;
            flex-flow: column;
            text-align: center; 
        }
    }
  
</style>