const snippet = (blogs) =>{
        blogs.map( item => {
           return item.body = item.body.length > 80 ? item.body.substring(0,80) + '...' : item.body
      })
}

export default snippet