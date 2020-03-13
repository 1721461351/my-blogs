import Vue from 'vue'
import Router from 'vue-router'
import WriterBlogs from '@/components/WriterBlogs'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'WriterBlogs',
      component: WriterBlogs,
    },
    {
      path: '/',
      name: 'ShowBlogs',
      component: ShowBlogs,
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog,
    },
    
  ],
  // 防止出#号
  mode:"history"

})

// export default [
//   {
//     path:"/add",component:ShowBlogs,
//   },
//   {
//     path:"/",component:WriterBlogs,
//   }
// ]
