<template>
  <div class="comic-view" @click="goComicDetail(comic.id)">
    <!-- 图片 -->
    <div class="comic-item-img">
      <img :src="comic.cover" />
    </div>
    <!-- 漫画信息 -->
    <div class="comic-item-content">
      <strong class="comic-title">{{ comic.name }}</strong>
      <small class="comic-author">{{ comic.author }}</small>
    </div>
  </div>
</template>


<script >
export default {
  name: "ComicView",
  props:[
    'comic'
  ],
  methods:{
    goComicDetail(id) {
      this.$router.push("/comicDetail/" + id);
    },
  }
};
</script>
<style lang="stylus">
.comic-view {
  display: inline-block;
  background-color: rgba(244, 244, 244, 0.5);
  border-radius: 0 0 0.3rem 0.3rem;
  width: 44%;
  margin-left: 4%;
  vertical-align: top;
  margin-top: 0.75rem;
  box-shadow: 0 0 0.125rem rgb(9 2 4 / 6%);
  .comic-item-img {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: 0.5rem;
    border-radius: 0.3rem 0.3rem 0 0;
    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.3rem 0.3rem 0 0;
    }
  }

  .comic-item-content {
    padding: 0 0.6rem;
    padding-top: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .comic-title {
      display: block;
      margin-bottom: 0.2rem;
      font-size: 0.75rem;
      color: #333;
      min-height: 1.05rem;
    }

    .comic-author {
      display: block;
      margin-bottom: 0.7rem;
      font-size: 0.6rem;
      color: #0c1220;
      min-height: 0.8rem;
    }
  }
}
</style>
