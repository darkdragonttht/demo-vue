import Vue from 'vue'
import App from './AppHome'
import router from './router'
import store from '@/store'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
