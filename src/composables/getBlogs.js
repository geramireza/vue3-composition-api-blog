import { ref } from 'vue'
const getBlogs = () => {
    const blogs = ref([])
    const serverErr = ref(null)

    const load = async () => {
        try{
            const data = await fetch('http://localhost:3000/blogs')
            if(!data.ok){
                throw Error('an error occured during loading')
            }
            blogs.value = (await data.json()).reverse()
        }
        catch(e){
            serverErr.value = e.message 
        }
    }
        
    return { blogs , serverErr, load }
}

export default getBlogs