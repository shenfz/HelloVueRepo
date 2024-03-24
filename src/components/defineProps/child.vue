<script setup lang="ts">/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/3/24 7:26
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

// todo 子组件接收值 需要自定义
const props = defineProps({
  msg: String
})

</script>

<template>
 <h1> {{ msg  || 'nothing get from father component'}}</h1>
</template>

<style scoped>

</style>