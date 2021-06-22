<template>
  <div class="home">
    <m-loading v-if="!comics"></m-loading>
    <div v-else>
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="comic in slides" :key="comic.id">
          <van-image
            :src="comic.cover"
            width="100%"
            height="300px"
            fit="cover"
          />
        </van-swipe-item>
      </van-swipe>
      <!-- 漫画内容 -->
      <comic-list-view :comics="comics"></comic-list-view>
    </div>
  </div>
</template>

<script>
import ComicListView from '../components/ComicListView.vue';
export default {
  name: "Home",
  data: function () {
    return {
      comics: null,
    };
  },
  components:{
    ComicListView
  },
  computed: {
    slides() {
      if (!this.comics) return;
      return this.comics.slice(0, 4);
    },
  },
  methods: {
    async getAllComic() {
      // this.$http是一个axios的实例
      const ret = await this.$http.get("comic/getAllComic");
      debugger
      this.comics = ret.data.data;
      console.log(this.comics)
    },
    // 进入漫画详情页
    goComicDetail(id) {
      this.$router.push("/comicDetail/" + id);
    },
  },
  mounted() {
    this.getAllComic();
  },
};
</script>
<style lang="stylus">
.home {
  margin-top: 85px;
}
</style>