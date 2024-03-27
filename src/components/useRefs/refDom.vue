<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   ref直接获取dom
 * @date:         2024/3/28 4:13
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
import {ref} from 'vue'

// 名称对应 dom001  => ref="dom001"
const dom001 = ref<HTMLDivElement>()
function logGetDom(){
  console.log(dom001.value?.innerText)
}

</script>

<template>
<div ref="dom001">
  我是dom
</div>
  <hr>
  <button @click="logGetDom">click me!!</button>
</template>

<style scoped>

</style>