import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      name:'index',
      path: '/index',
      component: Index
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
