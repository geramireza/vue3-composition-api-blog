import { ref } from 'vue'
const getBlog = (id) => {
    const blog = ref({})
    const serverErr = ref()
    
    const load = async () => {
        try{
            const data = await fetch('http://localhost:3000/blogs/' + id)
            if(!data.ok){
                throw Error('an error occurred during loading')
            }
            blog.value = await data.json()
        }
        catch(e){
            serverErr.value = e.message 
        }
    }
    
    return { blog , serverErr, load }

}

export default getBlog

