<template>
    <div class="showBlog">
        <ErrorAlert v-if="serverErr" @close="close">
            <template v-slot:title>
                <h3>Opps!</h3>
            </template>
            <template v-slot:body>
                <p>{{ serverErr }}</p>
                <span class="close" @click="close">&times;</span>

            </template>    
        </ErrorAlert>

        <div v-if="(isLoading && !serverErr) || (!isLoading && serverErr ) ">

            <h1>{{ blog.title }}</h1>
            <p>{{ blog.body }}</p>
            <label for="">Author: </label>
            <span>{{ blog.author }}</span><br> <br>
            <label for="">Tags:</label>
            <ul>
                <li v-for =" tag in blog.tags" :key="tag"> <router-link :to="{name:'Tags',params:{ tag: tag } }">#{{ tag }} </router-link> </li>
            </ul>

            <div class="flex">
                <button class="button" @click="back">Back</button>
                <button class="button " @click="edit">Edit</button>
                <button class="button delete " @click="remove">Delete</button>

            </div>
        </div>
    
    </div>
</template>

<script>

  import { ref } from 'vue'   
 import store from '../../store'
 import ErrorAlert from '../../components/ErrorAlert.vue'

    import { useRouter } from 'vue-router'
import { watch, watchEffect } from '@vue/runtime-core'
export default {
    props:['id'],
    components:{ ErrorAlert },
    setup(props){
        const router = useRouter()
        const isLoading = ref(true)
        const { blog, serverErr} = store.getters.getBlog(props.id)

    const close = () =>{
        if(isLoading.value)
             router.replace({ name:'Blogs'})

        serverErr.value = null
        isLoading.value = true
    }
    const back = () =>{
        router.go(-1)
    }
    const edit = () =>{
        router.push({name:'Edit',params:{ id: blog.value.id }})
    }
    const remove = () =>{
        store.dispatch('deleteBlog',props.id).then(data => {
            if(data){
                isLoading.value = false
                serverErr.value = data
            }
            else{
                     router.push({name:'Blogs',params:{ showAlert: true }})
                }    
        }).catch( error => { 
            isLoading.value = false
            serverErr.value = error 
        })
    }

        return { blog , serverErr,isLoading, back,edit, remove, close }
    }



}
</script>

<style scoped>

.showBlog{
    max-width: 700px;
    margin: 10px auto;
    background-color: white;
    padding: 20px;
    text-align: left;
}
.showBlog p{
    line-height: 30px;
}

ul{
    list-style: none;
    margin: 0;
}
li{
    color: blue;
}
.button{
    padding: 10px 15px;
    background-color: #eee;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
}
.button.delete{
    border-color: red;
    color: red;
}
.flex{
    padding:30px;
    display: flex;
    justify-content: space-between;
}
.error{
    display: inline-block;
}
.showError{
    text-align: center;
}
</style>