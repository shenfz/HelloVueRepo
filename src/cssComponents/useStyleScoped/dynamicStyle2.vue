<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/18 2:44
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....

// 1.动态 style
// 1.1  使用v-bind绑定

const styleB = ref({
  color: 'pink',
})

setTimeout(() =>{
  styleB.value.color = 'red'
},2000)
</script>

<template>
 <div class="cdd"  >
   动态 css
 </div>
</template>

<style scoped>
  .cdd {
    background-color: v-bind('styleB.color');
  }

</style>