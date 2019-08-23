import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { smoke_get, smoke_post } from './request/http' //引入js文件默认是js的后缀

Vue.prototype.$smoke_get = smoke_get;
Vue.prototype.$smoke_post = smoke_post;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
