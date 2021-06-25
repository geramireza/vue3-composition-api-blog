import { ref } from 'vue'
const updateBlog = (data) => {
    const serverErr = ref(null)
    const blog = ref(null)

    const update = async () => {

        try{
            const result = await fetch('http://localhost:3000/blogs/' + data.id ,{
                method:'PUT',
                headers:{
                    'Accent':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
                        
            if(!result.ok){
                throw Error('an error occurred during updateing blog')
            }
            
            blog.value = await result.json()
            
        }
        catch(e){
            serverErr.value = e.message 
        }

        return { blog, serverErr }

    }

    return  { update }

}

export default updateBlog