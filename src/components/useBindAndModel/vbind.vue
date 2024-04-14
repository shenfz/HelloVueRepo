<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/3/24 8:05
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

const objectOfAttrs = {
  id: 'id00',
  class: 'wrapper'
}
//  各种属性绑定
let id:string = "id02"
let enabled = false

// 双大括号
// 1.仅支持JavaScript表达式
// 2.可调用函数

let date:number
function formatDate(date:number):string {
  return date as unknown as string
}

</script>

<template>
  <div v-bind = objectOfAttrs ></div>
  <div :id="id"></div>
  <button :disabled="enabled"></button>
  <div :id="`list-${id}`"></div>
  <time :title="formatDate(date)" :datetime="date.toString()">
    {{ formatDate(date) }}
  </time>
</template>

<style scoped>

</style>