// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from './vuex/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import http from './axios'; 
import filters from './filters'

Vue.use(iView)
Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  components: { App },
  template: '<App/>'
})
