// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './axios/index'
import './assets/css/normalize.css'

Vue.config.productionTip = false

Vue.axios = axios
console.dir(Vue)
console.dir(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
