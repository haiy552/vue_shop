<template>
  <!-- header -->
  <div class="tiTle">
      <slot></slot>    
  </div>
</template>

<script>

export default {
  name: 'varlist'
}
</script>

<style scoped lang="scss">
@import '@/common/style/mixin';

  .tiTle{
      width:100%;
      background: $red;
      height: 1rem;
      position: sticky;
      top: 0;
      z-index: 999;
  }
</style>