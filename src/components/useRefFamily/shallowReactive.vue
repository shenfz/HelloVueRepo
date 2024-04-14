<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   shallowReactive 只支持浅层修改
 * @date:         2024/3/28 5:08
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {shallowReactive}  from "vue";

const obj = shallowReactive({school:{
  class:{
    group: "xxx"
  }
  }})

const change01 = () => {
  obj.school.class.group = "group xxx"
}
const change02 = () => {
  obj.school = {class: {group: "group yyy"}}
}
</script>

<template>
  <div>
    {{ obj }}
    <button @click="change01">deep change!!</button>
    <button @click="change02">shallow change!!</button>
  </div>
</template>

<style scoped>

</style>