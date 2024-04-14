<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 20:38
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
import {inject} from "vue";
import type { Ref} from 'vue'
const colorVal = inject<Ref<string>>('boxColor')
const change = () =>{
  // inject 出来可能为undefined ，需要用断言 `！`
  colorVal!.value = 'green'
}
</script>

<template>
 <h1>孙子</h1>
  <button @click="change">changeTo Green</button>
  <div class="box"></div>
</template>

<style scoped>
.box{
  display: flex;
  height: 100px;
  width: 100px;
  background-color: v-bind(colorVal);
  border: 2px solid #213547;
}
</style>