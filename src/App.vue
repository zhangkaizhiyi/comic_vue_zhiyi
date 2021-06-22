<template>
  <div id="app">
    <m-header></m-header>
    <div style="margin-top:80px">
      <keep-alive>
        <router-view/>
    </keep-alive> 
    </div>
  </div>
</template>



<script >
import MHeader from "./components/MHeader.vue"
export default{
  components:{
    MHeader
  }
}
</script>

