<template>
  <div>
    <form v-if="isShow">
      <h4>写博客</h4>
      <label>主题:</label>
      <input v-model="blogs.title" type="text" />
      <br />
      <label>内容</label>
      <textarea v-model="blogs.content"></textarea>
      <br />
      <label>分类</label>
      <div v-for="(item,index) in blogs.type" :key="index">
        <input type="checkbox" v-model="blogs.categorys" :value="item" />
        {{item}}
      </div>

      <label>作者</label>
      <select v-model="blogs.author">
        <option :value="author" v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>
      <br />
      <button @click="postData">提交</button>
    </form>
    <hr />
    <div v-if="isShow">
      <h4>博客总览</h4>
      <p>{{blogs.title}}</p>
      <p>{{blogs.content}}</p>
      <li v-for="(item,index) in blogs.categorys" :key="index">{{item}}</li>
      <p>{{blogs.author}}</p>
    </div>

    <div v-if="!isShow">发表成功</div>
  </div>
</template>

<script>
export default {
  name: "WriterBlogs",
  data() {
    return {
      blogs: {
        title: "",
        content: "",
        type: ["java", "c", "c++"],
        categorys: [],
        author: ""
      },
      isShow: true,

      authors: ["小黑", "小白", "小绿"]
    };
  },

  methods: {
    postData: function() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", [
          {
            userId: 1,
            body: {
              title: this.blogs.title,
              content: this.blogs.content,
              categorys: this.blogs.categorys,
              author: this.blogs.author
            }
          }
        ])
        .then(function(data) {
          //  alert("11")
          console.log(data);
          this.isShow = false;
        });
    }
  }
};
</script>

<style scoped>
</style>
