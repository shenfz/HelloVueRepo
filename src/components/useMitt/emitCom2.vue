<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/14 14:12
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
import {getCurrentInstance} from "vue";
const instance = getCurrentInstance()

// 1.具名事件 监听
instance?.proxy?.$Bus.on('on-emit-com',(str:any) =>{
  console.log("B=============> ",str)
})
// 2. 匹配事件名
instance?.proxy?.$Bus.on('*',(eventName:string,str:any) =>{
  console.log("B=============> ","catch event name:",eventName,"content:",str)
})
// 3。off
instance?.proxy?.$Bus.off("on-emit-com")
// 4.all clear
instance?.proxy?.$Bus.all.clear()

</script>

<template>
<div>
  <h1>emit com2</h1>
</div>
</template>

<style scoped>

</style>