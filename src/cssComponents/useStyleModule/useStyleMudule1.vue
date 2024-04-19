<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/18 3:03
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
// 1. 默认引用名 $style   eg:  <div :class="[$style.border,$style.back]">
// 2. 具名               eg: <style module="zx">    <div :class="[zx.border,zx.back]">
</script>

<template>
 <div :class="[zx.border,zx.back]">
     动态 css
 </div>
</template>

<style module="zx">
  .back{
   background-color: #747bff ;
 }

 .border{
   border: #213547 solid 8px;
 }
</style>