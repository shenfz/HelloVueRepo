<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   高级侦听  包括一些配选项
 * @date:         2024/4/3 11:08
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

let msg1 = ref<string>('')
let msg2 = ref<string>('')

// 返回一个停止回调
const stop = watchEffect((oninvalidate) =>{
  // 调用之前执行的函数
  // 场景： 防抖，清除接口
  oninvalidate(() =>{
    console.log('before exec')
  })
  // 自动监听受影响的ref
  console.log("====> msg1: ",msg1.value)
  console.log("====> msg2: ",msg2.value)
},{
  flush:'post' // 页面dom 加载完成后再执行监听里面的内容
})

const  stopWatch = () =>{
  stop()
}

</script>

<template>
<input type="text" v-model="msg1">
<input type="text" v-model="msg2">
  <button @click="stopWatch">stop watch</button>
</template>

<style scoped>

</style>