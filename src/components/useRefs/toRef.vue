<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   针对响应式对象，提取某项值做单独修改，如果是非响应式，则不做任何操作
 * @date:         2024/3/28 5:21
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {toRef,reactive,toRefs} from "vue";
// const man      = {name:"xx",age:26,like:"xx"}
// let  manLike  = toRef(man,'like')

const manByRef = reactive({name:"yy",age:26,like:"yy"})
let   manByRefLike = toRef(manByRef,'like')
let    {name,age} = toRefs(manByRef)
const change =() =>{
  //manLike.value = "change"
  manByRefLike.value = "change"
  name.value = "zhznzn"
  age.value = 90
}
</script>

<template>

  <div>
    {{manByRef}}
  </div>
  <hr>
  <button @click="change">change</button>
</template>

<style scoped>

</style>