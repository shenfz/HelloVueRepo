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

</script>

<template>
  <div>
    <h1 class="s1"> 我是插槽1 </h1>
    <h2 class="s2"> 我是插槽2 </h2>
    <slot></slot>
  </div>
</template>

<style scoped>
  :slotted(.a){
    background-color: #535bf2;
  }
</style>