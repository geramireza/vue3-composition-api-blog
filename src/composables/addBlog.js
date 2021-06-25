import { ref } from 'vue'
const addBlog = (data) =>{
    let serverErr = ref(null)
    const post = async () => {
        try{
            const result = await fetch('http://localhost:3000/blogs',{
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                method:'POST',
                body:JSON.stringify(data)
            })

            if(!result.ok){
                throw Error('an error occurred during creating blog')
            }
        }
        catch(e){
            serverErr.value = e.message
        }
        return serverErr
    }
    return { post }
}

export default addBlog