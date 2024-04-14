<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 17:39
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

// 默认缓存所有包裹的组件，可以通过include 或者 exclude 进行筛选
// 1. <keep-alive :include="['A']">
// 2. <keep-alive :exclude="['B']">
// 3. <keep-alive  :max="10">    有效缓存组件最大个数为10   ,采用LRU

// write here ....
import {ref} from 'vue'
import KeepLiveChildComA from "@components/useKeepLive/keepLiveChildComA.vue";
import KeepLiveChildComB from "@components/useKeepLive/keepLiveChildComB.vue";
import {onMounted,onUnmounted,onActivated,onDeactivated} from "vue";

const flag = ref<Boolean>(true)

// 开启keep-live ，新增触发的钩子 onActivated,onDeactivated

onMounted(()=>{
  //  开启了keep-live，只会触发一次
  console.log("onMounted")
})
onUnmounted(()=>{
  // 开启了keep-live ，“卸载”，这里不会触发
  console.log('onUnMounted')
})
onActivated(() =>{
  // 开启了keep-live ，多次请求处理放在这里，代替 onMounted
  console.log('onActivated')
})
onDeactivated(()=>{
  // 开启了keep-live ，“卸载”会触发这里
  console.log('onDeactivated')
})


</script>
<template>
<el-button @click.prevent="flag=!flag">切换</el-button>
  <keep-alive>
    <KeepLiveChildComA v-if="flag"></KeepLiveChildComA>
    <KeepLiveChildComB v-else></KeepLiveChildComB>
  </keep-alive>

</template>

<style scoped>

</style>