<template>
  <div class="blogs">
    <div class="blog" v-for="blog in sneppit" :key="blog.id">
      <h1><router-link :to="{ name: 'Show', params:{ id: blog.id }}" >{{ blog.title }}</router-link></h1>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
  import getBlogs  from '../../composables/getBlogs'

export default {
  setup(){
    const sneppit = ref([])
    const { blogs , errors , load } = getBlogs()
    load()


  const sneppitBody = () =>{
        sneppit.value = blogs.value.map( item => {
        item.body = item.body.substring(0,80) + '...'
        return item
      })
    }

    watch(blogs ,() => {
      sneppitBody() 
    })



    return { sneppit ,errors}
  },



}
</script>

<style scoped>
  .blogs{
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
