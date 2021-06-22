<template>
  <div class="m-loading">
  </div>
</template>


<script >
  export default {
    name: 'MLoading'
  }
</script>
<style lang="stylus">
  .m-loading
    margin : 300px auto;
    background: url('~@/assets/img/loading.svg') center center no-repeat; 
    background-size:cover;
    width: 50px;
    height: 50px;
    
    // 定义动画
    @keyframes rotation
      from 
        transform: rotate(0deg);
      to 
        transform: rotate(360deg);
    // 使用动画
    animation: rotation 3s linear infinite;
</style>
