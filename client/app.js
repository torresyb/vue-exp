import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(ElementUI)

Vue.component('chart', ECharts)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
