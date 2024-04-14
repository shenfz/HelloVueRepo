<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 17:38
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....

import {ref} from "vue";
import {onMounted,onUnmounted,onActivated,onDeactivated} from "vue";

const inputB = ref<String>("")

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
<script lang="ts">
export default {
  name: "B"
}
</script>
<template>
  <div class="KeepLiveChildComB">
    <h1>我是组件B</h1>
    <el-input type="text" v-model="inputB" style="width: 240px" placeholder="Please input" ></el-input>
  </div>
</template>

<style scoped>

</style>