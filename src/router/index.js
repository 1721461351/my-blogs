import Vue from 'vue'
import Router from 'vue-router'
import WriterBlogs from '@/components/WriterBlogs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WriterBlogs',
      component: WriterBlogs
    }
  ]
})
