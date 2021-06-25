const taggedBlogs = (blogs,tag) =>{
       return blogs.filter( (item) => {
        return item.tags.includes(tag)
        })
    }

export default taggedBlogs    
    