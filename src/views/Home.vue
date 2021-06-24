<template>
  <div class="home">
    <ul>
      <li v-for="blog in blogs" :key="blog.id" ><router-link :to="'/blog/' + blog.id" >{{ blog.title }}</router-link></li>
    </ul>
  </div>
</template>

<script>
  import getBlogs  from '../composables/getBlogs'

export default {
  setup(){
    const { blogs , errors , load } = getBlogs()
    
    load()
    return { blogs ,errors }
  },



}
</script>

<style scoped>
  ul{
    list-style: none;
    max-width: 700px;
    margin: 10px auto;
    background-color: white;
    font-size: 18px;
    padding: 0;
  }
  li{
    border-bottom: 1px solid lightgray;
  }
  a{
    display: block;
    padding: 20px;
    text-decoration: none;
    color:rgb(102, 101, 101);

  }
  a:hover{
      color: blue
  }

</style>
