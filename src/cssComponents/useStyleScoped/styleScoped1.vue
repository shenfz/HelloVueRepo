<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/18 2:22
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....

// 1. 在子组件改变 父组件的样式 使用  `:slotted(.a){}`
// 2. 在父组件，进行样式穿透，影响到子组件 ，使用 `:deep(.f){}`

// 3. 全局style
// 3.1  不使用 scoped eg: <style>{ color: red;}</style>>
// 3.2  在 scoped，使用 `:global() `

import slottedScopedCom from './useStyleScoped.vue'

</script>

<template>
  <slottedScopedCom>
    <h1 class="a">this will be slotted</h1>
  </slottedScopedCom>

</template>

<style scoped>
   :deep(.s1){
     background-color: aquamarine;
   }
   :global(.s2){
     background-color: chartreuse;

   }
</style>