import Vue from 'vue'

import App from './App.vue'
import { store } from '@/store/index'

import '@/styles/fullpage.min.css'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true

import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
