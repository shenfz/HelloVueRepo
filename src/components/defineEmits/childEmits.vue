<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:  触发事件，通知父组件
 * @date:         2024/3/24 7:38
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {ref} from 'vue'
// emit() 的第一个参数是事件的名称。其他所有参数都将传递给事件监听器
 const emitName:string = 'response'
 let sendYet = ref(false)

//=========================  js 写法
const emitJs = defineEmits([emitName,"on-click"])
setTimeout(() =>{
  emitJs(emitName,'hello 老登',"im tom")
  sendYet.value = true
},2000)

// ============================== ts 写法 1 泛型使用
// const emitsTs = defineEmits<{
//   (e:typeof emitName,name?:string):void
//   (e:"on-click",name?:string):void
// }>()
//
// setTimeout(() =>{
//   emitsTs(emitName,'hello 老登')
//   sendYet.value = true
// },2000)

//========================== ts 写法 2
// const emits = defineEmits(['sendFatherData']);
// const sendSon = () => {
//   //3.发送方法，发送的数据
//   emits('sendFatherData', '这是子组件发送过来的数据');
// };

</script>

<template>
    <p>
       are you send ?  {{ sendYet }}
    </p>
</template>

<style scoped>

</style>
