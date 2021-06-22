<template>
  <div class="m-header">
    <div @click="$router.go(-1)" v-if="this.$route.path != '/'" >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-back"></use>
      </svg>
    </div>
    <svg v-else class="icon" aria-hidden="true">
      <use xlink:href="#icon-comic"></use>
    </svg>
  </div>
</template>


<script >
  export default {
    name: 'MHeader'
  }
</script>
<style lang="stylus">
  .m-header
    z-index: 100
    position :fixed;
    top:0px;
    left:0px;
    width :100%;
    height :70px;
    background-color #fff
</style>
