<template>
<div>
  <h1>{{blog.title}}</h1>
  <article>{{blog.body}}</article>
</div>
</template>

<script>
export default {
    name:"SingleBlog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{
                title:"",
                body:""
            }
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+
        this.id).then((data)=>{
            console.log("single"+data.body)
            this.blog = data.body
        })
    }
}
</script>

<style>

</style>