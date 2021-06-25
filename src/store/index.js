import { ref, watch, watchEffect } from 'vue'
import { createStore } from 'vuex'
import getBlogs from '../composables/getBlogs'
import getBlog from '../composables/getBlog'
import addBlog from '../composables/addBlog'
import updateBlog from '../composables/updateBlog'
import deleteBlog from '../composables/deleteBlog'

const store = createStore({
    state:{
      
    },
    getters:{
        getBlogs: () => () => {
            const { blogs , serverErr , load } = getBlogs()
            load()
            return { blogs, serverErr }
        },
        getBlog: () => (id) => {
            const { blog , serverErr, load } = getBlog(id)
            load()
            return { blog, serverErr}    
        },
    },
    actions:{
        addBlog: (state,blog) => {
           const { post } = addBlog(blog)
           return post() 
        },
       editBlog: (state,blog) =>{
           const { update } = updateBlog(blog)
            return update()
       },
       deleteBlog: (state,id) =>{
           const { remove } = deleteBlog(id)
           return remove()  
       }
    }
})

export default store