<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/3/24 7:26
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import Child from "./child.vue"
import {ref} from 'vue'

//  传属性值给子组件 ，且可以双向绑定
const title = ref("sent t o child ")
const arr = [1,2,3]
</script>

<template>
  <input v-model = title />
  <child :title = title :arr=arr> </child>
</template>

<style scoped>

</style>