import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'

Vue.config.productionTip = false

window.EventHub = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


