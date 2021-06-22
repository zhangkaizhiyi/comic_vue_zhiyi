<template>
  <div class="comic-list-view" :class="{ directionx:direction}">
    <comic-view v-for="comic in comics" :key="comic.id" :comic="comic" ></comic-view>
  </div>
</template>


<script >
import ComicView from "./ComicView.vue"
export default {
  name: "ComicListView",
  props:{
    comics:{
      default:null
    },
    direction:{
      // 默认flase是没有class,是纵向
      default:false
    }
  },
  components:{
    ComicView
  }
};
</script>
<style lang="stylus">
  .comic-list-view
    // 这个class有没有取决于传入的prop里的direction,如果传true,就横向
  .directionx
    white-space:nowrap
    overflow-x :auto
</style>
