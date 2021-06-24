import { ref } from 'vue'
const addBlog = (blog) =>{
    let errors = ref([])
    const post = async () => {
        try{
            const data = await fetch('http://localhost:3000/blogs',{
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                method:'POST',
                body:JSON.stringify(blog)
            })

            if(!data.ok){
                throw Error('an error occurred during creating blog')
            }
        }
        catch(e){
            errors.value.push(e.message)
        }

        return errors.value
    }

    return { post }
}

export default addBlog