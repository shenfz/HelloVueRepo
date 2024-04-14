<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/14 16:06
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
import useJsxEmit from './useTsxEmits.tsx'
const getItem = (item:any) =>{
  console.log('parent get: ',item)
}

</script>

<template>
<useJsxEmit @on-click="getItem" name="xxxx"></useJsxEmit>
</template>

<style scoped>

</style>