<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 19:04
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....

// 4.   <transition-group tag="section">   tag后加元素标签，可以再给内部包一层div
import {reactive} from "vue";
import "animate.css"
const list = reactive<number[]>([1,2,3,3,4,4,5])
const add = () =>{
  list.push(list.length + 1)
}

const pop = () =>{
  list.pop()
}
</script>

<template>
  <button @click="add">
    ADD
  </button>

  <button @click="pop">
    POP
  </button>
  <transition-group  leave-active-class="animate__animated animate__shakeX" enter-active-class="animate__animated animate__bounceOutDown" >
    <div v-for="item in list">
      {{ item }}
    </div>
  </transition-group>
</template>

<style scoped>

</style>