<template>
  <div class="taggedBlogs">
      <div class="blog" v-for="blog in blogs" :key="blog.id">
          <h1><router-link :to="'/blog/' + blog.id ">{{ blog.title }}</router-link></h1>
          <p> {{ blog.body }} </p>
      </div>
  </div>
</template>

<script>
import getBlogs from '../../composables/getBlogs'
import snippet from '../../composables/snippet'
import taggedBlogs from '../../composables/taggedBlogs'

import { useRoute } from 'vue-router'
import { watch, watchEffect } from 'vue'

export default {
    
    setup(){

        const route = useRoute()
        const { blogs, errors, load } = getBlogs()
        load()
        watchEffect(() =>{
            snippet(blogs.value)
            blogs.value = taggedBlogs(blogs.value,route.params.tag)
        })
        
        return { blogs ,errors  }
    }


}
</script>

<style scoped>
.taggedBlogs{
    max-width: 700px;
    margin: 10px auto;
    background-color: white;
    font-size: 18px;
    padding: 30px;
    text-align: left;
  }
  .blog{
    border-bottom: 1px solid lightgray;
  }
  a{
    display: block;
    color: rgb(153, 152, 152);
    text-decoration: none;
  }
  a:hover{
      color: blue
  }

</style>