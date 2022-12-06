import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index'
import vuetify from './plugins/vuetify'
import axios from "axios"

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.prototype.$setItem = Vue


new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
