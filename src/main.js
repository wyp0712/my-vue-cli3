import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created () {
    this.$ajax.get('/api/page', function (res) {
      console.log(res)
    })
  }
}).$mount('#app')
