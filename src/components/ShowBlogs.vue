<template>
  <div id="show-blogs">
    <h1>博客列表</h1>
    <input type="text" placeholder="搜索" v-model="searchContent" />
    <div v-for="(blog,index) in filterBlogs" :key="index" id="single-blog">
      <h3 v-rainbox>{{blog.title | toUppercase}}</h3>
      <article>{{blog.body | omit}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      searchContent: ""
    };
  },
  computed: {
    filterBlogs: function() {
                  var content = this.searchContent;
      return this.blogs.filter(function(blog) {
          console.log("blog:"+blog.title)
          console.log("content:"+content)
        return blog.title.match(content);
      });
    }
  },
  created() {
    // this.$http.get('https://jsonplaceholder.typicode.com/posts')
    // 静态文件只能存放在static中才能被读取
    this.$http.get("../static/post.json").then(data => {
      this.blogs = data.body.slice(0, 10);
      console.log(data);
    });
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0% auto;
}

#single-blog {
  background: #678;
}
</style>
