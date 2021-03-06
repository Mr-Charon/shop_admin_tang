import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用element-ui
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
