<template>
  <div class="addBlog">
      <h1>Add a new blog</h1>
      <form @submit.prevent="add"> 
          <Alert :errors="errors" :serverErr="serverErr" :showAlert="showAlert"/>
          <div>
            <label for="">Title:</label>
            <input ref='titleRef' type="text" v-model="blog.title" :class="{ red : errors.includes('title') }"
             @keyup="handleKeyEvent">
          </div>
          <div>
            <label for="">Body:</label>
            <textarea type="text" v-model="blog.body" rows="10"  :class="{ red : errors.includes('body') }" @keyup="handleKeyEvent"></textarea>
          </div>
          <div>
              <label for="">Author</label>
              <select v-model= "blog.author"  :class="{ red : errors.includes('author') }"  @change="handleKeyEvent">
                 <option  v-for ="author in authors" :key="author" :value="author">{{ author }}</option>   
              </select>
          </div>
          <div>
              <label for="">Tags:</label>
              <input type="text" v-model="tempTag" @keyup.alt.enter="addTag" placeholder="press alt+enter to add"  
              :class="{ red : errors.includes('tags') }" >
              <div>
                  <span class="pill" v-for="tag in blog.tags" :key="tag" @click="deleteTag(tag)"> {{ tag }}</span>
              </div>
          </div>
          <div class="controls">
              <button class="button">Add Blog</button>
          </div>
          
      </form>  



  </div>

</template>

<script>
import { ref , watch, watchEffect } from 'vue'
import Alert from '../../components/Alert.vue'
import { useStore } from 'vuex'


export default {
    components:{
        Alert
    },
    setup(){
        const store = useStore()
        const blog = ref({title:'',body:'',author:'', tags:[]})
        const tempTag = ref('')
        const errors = ref([])
        const serverErr = ref(null)
        const showAlert = ref(false)
        const authors = ref(['The Vue Team', 'The Laravel Team','The Tutplus Team'])


        const addTag = (e) => {
              const element = e.path[0]
            if(tempTag.value != ''){
                if(!blog.value.tags.includes(tempTag.value))
                    blog.value.tags.push(tempTag.value) 

                    errors.value = errors.value.filter( item => item !== 'tags' )
                    element.classList.remove('red')

            }
            tempTag.value = ''
}
        const deleteTag = (tag) => {
            blog.value.tags = blog.value.tags.filter( item => item != tag )  
            if(blog.value.tags.length == 0 )
                errors.value.push('tags')  
        }
        
        const add = () =>{
            if(validation()){
                 store.dispatch('addBlog',blog.value).then(data => {
                     if( data.value)
                        serverErr.value = data.value
                    else{
                        showAlert.value = true
                         blog.value = {title:'',body:'',author:'', tags:[]}     
           
                    }
                 }).catch(error => serverErr.value = error)
            }
        }
        const validation = () =>{

            let data
            errors.value = []
            for(let key in data = blog.value){
                if( data[key] == '' || data[key] == null){
                    errors.value.push(key)
                }
            }

            return errors.value.length > 0 ? false : true

        }

          const handleKeyEvent = (e) => {
              const element = e.path[0]
                if(blog.value.title != '')
                    errors.value = errors.value.filter( item => item !== 'title' )
                if(blog.value.body != '')
                    errors.value = errors.value.filter( item => item !== 'body' )
                if(blog.value.author != '')
                    errors.value = errors.value.filter( item => item !== 'author' )

                    element.classList.remove('red')
            }


        return { blog, errors,serverErr,showAlert, authors, addTag, tempTag, deleteTag, add, handleKeyEvent }
    }
}
</script>

<style scoped>

    .addBlog{
        max-width: 800px;
        margin: 10px auto;
        background-color: white;
        padding: 20px;
    }
    .addBlog div{
        margin:  10px 0;
        text-align: center;
    }
    label{
        width: 100px;
        display: inline-block;
        text-align: left;
    }
    input,textarea,select{
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 5px;
        outline: none;
        width: 500px ;
        vertical-align: middle;
    }
    select{
        background-color: white;
        box-sizing: content-box;
        font-size: 16px;
        color:rgb(77, 77, 77);
    }
    .pill{
        display: inline-block;
        background-color: #eee;
        border-radius: 30px;
        margin: 10px;
        padding: 5px 10px;
        text-align: left;

    }
    .button{
        padding: 10px 15px;
        color:white;
        font-size: 16px;
        background-color: rgb(87, 198, 235);
        border: 1px solid lightblue;
        display: inline-block;
        border-radius: 5px;
        margin: 20px;
        position: relative;
        left:200px;
        right: 10px;
        top:0;
    }
    .red{
    border: 1px solid red;
}
  
</style>