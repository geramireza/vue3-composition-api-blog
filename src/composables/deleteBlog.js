import { ref } from 'vue'

const deleteBlog = (id) => {
    const errors = ref(null)
    const remove = async () =>{
        try{
        const data = await fetch('http://localhost:3000/blogss/' + id,{
            method:'DELETE'
        })
        if(!data.ok){
            throw Error('an error occurred during deleteing')
        }
        
        }
        catch(e)
        {
            errors.value = e.message
        }

        return errors.value
    }

    return { remove }

}

export default deleteBlog