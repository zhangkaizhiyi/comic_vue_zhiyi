import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import http from "../http";
import "@/assets/stylus.css";
import MLoading from "@/components/MLoading.vue"

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);
// 全局可以使用$http
Vue.prototype.$http = http;
// 全局注册必须是两个参数，局部组件中传的是对象，可以es6的方式简写
Vue.component("MLoading",MLoading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


