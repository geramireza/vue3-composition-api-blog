import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddBlog from '../views/blogs/AddBlog.vue'
import TaggedBlogs from '../views/blogs/TaggedBlogs.vue'
import EditBlog from '../views/blogs/EditBlog.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/blogs',
    component: () => import('../views/blogs/Blogs.vue'),
    name: 'Blogs',
  },
  {
    path:'/blog/:id',
    name:'Show',
    component: () => import('../views/blogs/ShowBlog.vue'),
    props: true,
  },
  {
    path:'/blog/add',
    name:'Add',
    component: AddBlog,
  },
  {
    path:'/blog/:id/edit',
    name:'Edit',
    component: EditBlog,
    props:true
  },
  {
    path:'/tags/:tag',
    name:'Tags',
    component: TaggedBlogs,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
