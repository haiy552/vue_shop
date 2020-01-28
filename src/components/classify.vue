<template>
  <div class="tiTle">
      <li >
          <img src="" alt="">
      </li>  
  </div>
</template>

<script>

export default {
  name: 'varlist',
  props: [],
  created(){
    
  },
  methods:{
    
  }

}
</script>

<style scoped lang="scss">
@import '../common/style/mixin';

  .tiTle{
      width:100%;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      background: $blue;
      h3{
         color: $fc; 
         font-family:'华文彩云';
      }
  }
</style>