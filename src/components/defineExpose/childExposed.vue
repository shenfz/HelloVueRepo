<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   常用场景 ，子组件表单，暴露各种验证和清空方法给父组件使用
 * @date:         2024/4/8 18:21
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
defineExpose({
  exposedChildName:"xxx child",
  open:() =>{
    console.log("exposed child func => open")
  }
})

</script>

<template>

</template>

<style scoped>

</style>