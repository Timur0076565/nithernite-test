import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/scss/main.scss'

import { vuetify } from './utils/plugins'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
