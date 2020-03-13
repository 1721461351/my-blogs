<template>
  <div id="app">
    <Head-blogs></head-blogs>
    <router-view/>
   <!-- <Writer-blogs></Writer-blogs> -->
   <!-- <Show-blogs></Show-blogs> -->
  </div>
</template>

<script>
import WriterBlogs from '@/components/WriterBlogs'
import ShowBlogs from '@/components/ShowBlogs'
import HeadBlogs from '@/components/HeadBlogs'
import SingleBlog from '@/components/SingleBlog'

export default {
  name: 'App',
  components:{
    WriterBlogs,
    ShowBlogs,
  SingleBlog,
    HeadBlogs
  }
}
</script>

<style>

</style>
