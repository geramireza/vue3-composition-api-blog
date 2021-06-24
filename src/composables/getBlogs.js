import { ref } from 'vue'
const getBlogs = () => {
    const blogs = ref([])
    const errors = ref(null)

    const load = async () => {
        try{
            const data = await fetch('http://localhost:3000/blogs')
            if(!data.ok){
                throw Error('an error occured during loading')
            }
            blogs.value = await data.json()
        }
        catch(e){
            errors.value = e.message 
        }
    }
        
    return { blogs , errors, load }
}

export default getBlogs