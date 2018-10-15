import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      components: {
        About : About
      },
      beforeEnter: (to, from, next) => {
        console.log('触发about Component钩子')
        from: {path:'/'}
        to: {path:'/about'}
        next()
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        Home: Home
      },
      beforeEnter: (to, from, next) => {
        console.log('触发home Component钩子')
        from: {path:'/'}
        to: {path:'/about'}
        next()
      }
    }
  ]
})

// Router.beforeEach((to, from, next) => {
//   next()
// })
