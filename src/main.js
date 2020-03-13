// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

// 使用vueResource
Vue.use(vueResource)

// 自定义指令
Vue.directive('rainbox', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8)
    console.log(Math.random().toString().slice(0, 6))
  }
})


// 自定义过滤器
/* eslint-disable no-new */
/**
 * 把标题的所有小写改成大写
 */
Vue.filter('toUppercase', (value) => {
  // console.log('value:'+value)
  return value.toUpperCase();
})

/***
 * 把多余内容省略
 */
Vue.filter('omit',(value)=>{
  console.log('value:'+value)
  return value.slice(0,100)+'...';
})


// 创建路由
// 如果不想在地址上显示#，可以使用下面的mode
// const myrouter = new VueRouter({
//   routes:router,
//   mode:"history"
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
