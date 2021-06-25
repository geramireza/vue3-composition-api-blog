<template>
  <div class="home">
        <ErrorAlert v-if="serverErr" >
            <template v-slot:title>
                <h3>Opps!</h3>
            </template>
            <template v-slot:body>
                <p>{{ serverErr }}</p>
            </template>    

        </ErrorAlert>

    <ul>
      <li v-for="blog in blogs" :key="blog.id" ><router-link :to="'/blog/' + blog.id" >{{ blog.title }}</router-link></li>
    </ul>

  </div>
</template>

<script>
  import store from '../store'
  import ErrorAlert from '../components/ErrorAlert.vue'

export default {
  components:{ErrorAlert},
  setup(){
    const {blogs,serverErr } = store.getters.getBlogs()

    return { blogs ,serverErr }

  },



}
</script>

<style scoped>
.home{
    max-width: 700px;
    margin: 10px auto;
    background-color: white;
    font-size: 18px;
    padding: 30px;
    text-align: left;
  }
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
