<template>
  <div class="comic-detail">
    <m-loading v-if="!comic"></m-loading>
    <div v-else>
      <div class="comic-head">
        <!-- 漫画背景图 -->
        <section
          class="comic-background"
          :style="{
            background:
              'url(' +
              comic.cover +
              ') no-repeat scroll  center / 100% content-box content-box',
          }"
        >
          <div class="mask"></div>
        </section>
        <!-- 漫画详情和漫画章节 -->
        <div class="comic-body">
          <section class="comic-info">
            <div class="comic-name">
              <h1>{{ comic.name }}</h1>
            </div>
            <div class="comic-desc">{{ comic.desc }}</div>
            <div class="comic-author">{{ comic.author }}</div>
          </section>
          <section class="comic-divider"></section>
          
          <!-- 漫画章节 -->
          <section class="comic-chapters">
            <ul>
              <li
                v-for="chapter in comic.chapters"
                :key="chapter.cid"
                @click="goToReader(chapter.cid)"
                class="chapter-item"
              >
                <div class="chapter-item-content">
                  <img
                    :src="chapter.pages[0].purl"
                    class="chapter-cover"
                    v-if="chapter.pages != null"
                  />
                  <div class="chapter-title">
                    {{ chapterName(chapter.name) }}
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <!-- 猜你喜欢 -->
          <section class="comic-like">
            <div>猜你喜欢</div>
            <comic-list-view :comics="comicsLike" :direction="true"></comic-list-view>
          </section>
        </div>
        <!-- 底部导航栏 -->
        <div class="comic-footer"></div>
      </div>
    </div>
  </div>
</template>


<script>
import ComicListView from '../components/ComicListView.vue';
export default {
  components: { ComicListView },
  name: "ComicDetail",
  data: function () {
    return {
      comic: null,
      comicsLike:null
    };
  },
  watch: {
    $route(to) {
      //  第一次进入组件的时候不会调用，之后离开和进入都会调用
      if (to.path != "/" && to.path.indexOf("pic") == -1) {
        this._getComicDetailByID(this.$route.params.id);
      }
    },
  },
  methods: {
    async _getComicDetailByID(id) {
      let ret = await this.$http.get("comic/getComicDetailById/" + id);
      this.comic = ret.data.data;
    },
    async getComicLike(){
      const ret = await this.$http.get("comic/getAllComic");
      this.comicsLike = ret.data.data
    },
    goToReader(cid) {
      this.$router.push("/comic/pic/" + cid);
    },
    chapterName(name) {
      return name.replace(this.comic.name, "");
    },
  },
  created() {
    this._getComicDetailByID(this.$route.params.id);
    this.getComicLike();
  },
};
</script>
<style lang="stylus">
.comic-detail {
  .comic-head {
    // 背景图
    .comic-background {
      position: absoulte;
      top: -10px;
      left: 0;
      overflow: hidden;
      width: 100%;
      z-index: 1;

      .mask {
        height: 300px;
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }

  .comic-body {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 4;

    // 漫画详情
    .comic-info {
      margin: 8.2rem 0.9rem 0;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 0 0 0.3rem 0.3rem;
      -webkit-box-shadow: 0 5px 30px 0px #cccccc;
      box-shadow: 0 5px 30px 0px #cccccc;
      padding: 1rem;
      padding-bottom: 100px;

      .comic-name {
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        padding-top: 1rem;
        padding-bottom: 0.75rem;
      }

      .comic-desc {
        color: #666666;
        font-size: 0.6rem;
        line-height: 0.9rem;
        margin-bottom: 0.5rem;
        padding: 0 1.2rem;
      }

      .comic-author {
        padding: 0 1.2rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
    }

    .comic-divider {
      margin-top: 20px;
      height: 80px;
      width: 100%;
      background-color: orange;
    }

    // 漫画章节
    .comic-chapters {
      margin-top: 30px;
      padding: 10px;
      // 横向滚动只需要 white-space: nowrap，不换行，出现滚动条，overflow-x隐藏
      white-space: nowrap;
      overflow-x: auto;

      // 每一章节
      .chapter-item {
        display: inline-block;
        border: 0.025rem solid #e8e7e5;
        border-radius: 0.3rem;
        box-sizing: border-box;
        position: relative;

        .chapter-item-content {
          display: block;
          width: 6.55rem;
          font-size: 0;
          margin: 0;
          overflow: hidden;
          height: 5.75rem;
          position: relative;

          // 章节封面
          .chapter-cover {
            display: block;
            background-color: #f3f3f3;
            width: 100%;
            height: 3.85rem;
            object-fit: cover;
          }

          .chapter-title {
            text-indent: 0.5rem;
            padding-right: 0.5rem;
            font-size: 0.7rem;
            line-height: 38px;
            padding-top: 0;
            color: #0c1220;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>