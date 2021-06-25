<template>
  <div class="alert">
       <p class="success">
           <slot name="title"></slot>
           <slot name="body"></slot>
         <span class="close" @click="close">&times;</span>
        </p>
  </div>
</template>

<script>

export default {
  props:['showAlert'],
  setup(props,{emit}){
    const close = () =>{
      emit('close')
    }

    return { close }
  }  
}
</script>

<style>

</style>