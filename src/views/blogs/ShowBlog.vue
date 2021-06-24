<template>
    <div class="showBlog">
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.body }}</p>
        <label for="">Author: </label>
        <span>{{ blog.author }}</span><br> <br>
        <label for="">Tags:</label>
        <ul>
            <li v-for =" tag in blog.tags" :key="tag"> #{{ tag }}</li>
        </ul>

    <button class="button" @click="back">Back</button>

    </div>
</template>

<script>
 import getBlog from '../../composables/getBlog'
    import { useRouter } from 'vue-router'
export default {
    props:['id'],
    setup(props){
        const router = useRouter()
        const { blog , errors, load } = getBlog(props.id)

        load()

    const back = () =>{
        router.go(-1)
    }

        return { blog , errors , back}
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

</style>