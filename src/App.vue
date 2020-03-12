<template>
  <div id="app">
    <!-- <router-view/> -->
   <!-- <Writer-blogs></Writer-blogs> -->
   <Show-blogs></Show-blogs>
  </div>
</template>

<script>
import WriterBlogs from '@/components/WriterBlogs'
import ShowBlogs from '@/components/ShowBlogs'
export default {
  name: 'App',
  components:{
    WriterBlogs,
    ShowBlogs
  }
}
</script>

<style>

</style>
