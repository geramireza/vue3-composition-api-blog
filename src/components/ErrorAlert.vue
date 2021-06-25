<template>
      <div class="alert">
              <p class="error" style="display:inline-block">
                  <slot name="title"></slot>
                  <slot name="body"></slot>
              </p>
      </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
export default {
  props:[''],
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