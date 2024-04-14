<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/14 14:04
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
import {getCurrentInstance} from "vue";
const instance = getCurrentInstance()
const emitT = () =>{
  instance?.proxy?.$Bus.emit('on-emit-com','mitt from emit-com1')
}
</script>

<template>
  <div>
    <h1>emit Com1</h1>
    <button @click="emitT">
      emit
    </button>
  </div>

</template>

<style scoped>

</style>