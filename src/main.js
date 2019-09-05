import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import VueRouter from 'vue-router'

import Goods from './components/goods/goods.vue'
import Ratings from './components/ratings/ratings.vue'
import Seller from './components/seller/seller.vue'

import axios from 'axios'
import './common/stylus/index.styl'
// 第三方插件必须引用
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.prototype.$axios = axios

const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass: 'active'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
