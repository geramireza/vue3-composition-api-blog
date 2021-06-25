<template>
        <div class="alert">
              <p class="error" style="display:inline-block" v-if="serverErr">{{ serverErr }}</p>
             <ol class="error" v-else-if="errors.length">
                <li v-for="error in errors " :key="error"> the {{ error }} field is required</li>
                <span class="close" @click="errors.length = 0">&times;</span>
            </ol>
            <p v-else-if="showAlert" class="success">The new blog created successfully

                <span class="close" @click="showAlert = !showAlert">&times;</span>
            </p>
          </div>           
    
</template>

<script>
export default {
    props:['errors','serverErr','showAlert']


}
</script>

<style>

 
</style>