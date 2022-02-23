import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 完整引入
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 按需引入 按照了包 npm install babel-plugin-component -D
import '@/lib/elementui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
