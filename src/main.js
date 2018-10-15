import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  console.log('触发全局前置钩子')
  next()
})

router.afterEach((to, from) => {
  console.log('触发全局后置钩子')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
