import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// 引入element-ui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created () {
    // this.$ajax.get('/api/page', function (res) {
    //   console.log(res)
    // })
  }
}).$mount('#app')
