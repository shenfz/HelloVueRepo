<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:    侦听器 包括一些配选项
 * @date:         2024/3/24 7:15
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
import {ref,watch,reactive} from "vue";

// 1.监听对象如果具有多个层级 则需要开启 deep ，或者声明成reactive对象
// 2.同时监听多个对象 ，组装成数组，新旧值也是数组的形式
// 3.监听对象的某个单一属性 ，需要变成函数
let msg = ref({
  foo:{
    man:{
      name:'xxx',
      age:18
    }
  }
})
let msg1 = reactive({
  foo:{
    man:{
      name:'yyy',
      age:19
    }
  }
})
 // 多个侦听
watch([msg,msg1],(newVal,oldVal)=>{
  // 新旧值  也是数组
  console.log(newVal,oldVal)
},{
  deep:true,  // 开启深度层级侦听
  immediate:true, // 先把此callback调用一次
  flush:'pre' // pre: 组件更新之前执行，sync:同步执行，post:组件更新之后执行
})
// 侦听单一属性
watch(()=> msg1.foo.man.name,(newVal,oldValue)=>{
  console.log(newVal,oldValue)
})
</script>

<template>

</template>