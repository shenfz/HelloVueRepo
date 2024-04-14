<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/9 23:06
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

// 1. await 置于顶层时,是es2017的特性，整个组件应该当作 异步组件使用
// 2. 引入异步组件的两种方式
// 3.展示异步组件必须使用  suspense [两个插槽 default 和 fallback]，分别展示加载成功和加载未完成的样式

import {defineAsyncComponent} from "vue";
import Skeleton from "@components/useAsyncComponents/skeleton.vue";
const syncV = defineAsyncComponent(() => import('@/components/useAsyncComponents/syncVue.vue'))

</script>

<template>
 <Suspense>
   <template #default>
     <syncV></syncV>
   </template>
   <template #fallback>
     <skeleton></skeleton>
   </template>

 </Suspense>
</template>

<style scoped>

</style>