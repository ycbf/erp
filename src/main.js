// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from './mock/index'  //mock
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import 'font-awesome/scss/font-awesome.scss'    //图标库扩展
import VueScroll from 'vuescroll'   //自定义滚动条
import 'vuescroll/dist/vuescroll.css'   //自定义滚动条
import './assets/css/common.scss'  //统一的初始样式


Vue.config.productionTip = false
Mock.mockData()
Vue.use(ElementUI)

Vue.use(VueScroll, {ops: {bar: {background: '#C0C4CC'}}})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
