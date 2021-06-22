import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('@/views/Home.vue')
const ComicDetail = ()=>import('@/views/ComicDetail.vue')
const ComicReader = ()=>import('@/views/ComicReader.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comicDetail/:id',
    name: 'ComicDetail',
    component: ComicDetail
  },
  {
    path:"/comic/pic/:cid",
    component: ComicReader
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
