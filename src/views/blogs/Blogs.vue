<template>
  <div class="blogs">
    <ErrorAlert v-if="serverErr" >
            <template v-slot:title>
                <h3>Opps!</h3>
            </template>
            <template v-slot:body>
                <p>{{ serverErr }}</p>
            </template>    

    </ErrorAlert>
    <SuccessAlert v-if="showAlert" :showAlert="showAlert" @close="showAlert = !showAlert"> 
    
     <template v-slot:title>
       <h3>Success!</h3>
     </template>
      <template v-slot:body>
        <p>The blog deleted successfully</p>
     </template>
    </SuccessAlert>

    <div class="blog" v-for="blog in blogs" :key="blog.id">
      <h1><router-link :to="{ name: 'Show', params:{ id: blog.id }}" >{{ blog.title }}</router-link></h1>
      <p>{{ blog.body }}</p>
    </div>
  </div>

</template>

<script>
import { onMounted, ref, watch } from 'vue'
import store from '../../store'
import snippet  from '../../composables/snippet'
import { useRoute} from 'vue-router'
import SuccessAlert from '../../components/SuccessAlert.vue'
import ErrorAlert from '../../components/ErrorAlert.vue'

export default {
  components:{SuccessAlert, ErrorAlert},
  setup(){
    const route = useRoute()
    const showAlert = ref(false)

    const { blogs, serverErr } = store.getters.getBlogs()
      snippet(blogs.value)
      showAlert.value = route.params.showAlert

    return { blogs ,serverErr,showAlert}
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
