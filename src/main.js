// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
Vue.config.productionTip = false

// 使用vueResource
Vue.use(vueResource)


Vue.directive('rainbox',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8)
    console.log(Math.random().toString().slice(0,6))
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
