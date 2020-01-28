<template>
  <div class="tiTle">
      <slot></slot>    
  </div>
</template>

<script>

export default {
  name: 'varlist',
  data(){
    return {
      
    }
  },
  computed:{
    
  },
  methods:{
    
  }

}
</script>

<style scoped lang="scss">
@import '../common/style/mixin';

  .tiTle{
      width:100%;
      background: $red;
      
  }
</style>