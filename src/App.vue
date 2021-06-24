<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/blogs">Blogs</router-link>
    <router-link to="/blog/add">Add Blog</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  background-color: #eee;

}

#nav {
  padding: 20px;
  border-bottom: 1px solid lightgray;
  background-color: #ccc;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 10px 15px ;
  border-radius: 5px;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #fff;
  background-color: crimson;
}
</style>
