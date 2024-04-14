<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 *
 * @date:         2024/4/8 18:21
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */


import ChildExposed from "@/components/defineExpose/childExposed.vue";
import {ref} from 'vue';
const childVue = ref<InstanceType<typeof ChildExposed>>()
// 读取子组件的属性和调用方法
console.log(childVue.value.exposedChildName)
childVue.value.open()

</script>

<template>
<child-exposed ref="ChildExposed"> </child-exposed>
</template>

<style scoped>

</style>