import Vue from 'vue'
import Router from 'vue-router'
import WriterBlogs from '@/components/WriterBlogs'
import ShowBlogs from '@/components/ShowBlogs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WriterBlogs',
      component: WriterBlogs
    },
    {
      path: '/ShowBlogs',
      name: 'ShowBlogs',
      component: ShowBlogs
    }
  ]
})
