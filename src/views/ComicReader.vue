<template>
  <div class="comic-reader">
    <ul>
      <li v-for="page in pages" :key="page.pid" >
        <img :src=page.purl class="page-img"> 
      </li>
    </ul>
  </div>
</template>

<script>

export default{
  name:"ComicReader",
  data:function(){
    return {
      pages:{}
    }
  },
  watch:{
     $route(to){
       if (to !== undefined){
          this.getPages()
       }else{
         return 
       }
     }
   },
  methods:{
    async getPages(){
      const cid = this.$route.params.cid
      let ret = await this.$http.get("comic/getPages",{params:{cid,cid}})
      
      this.pages = ret.data.data
      console.log(this.pages)
    }
  },
  created(){
    this.getPages()
  }
}
</script>
<style lang="stylus">
  .comic-reader
    .page-img
      width :100%
</style>




