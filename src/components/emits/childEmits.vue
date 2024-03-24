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
 const emitname = 'response'
 let sendYet = ref(false)
const emiTs = defineEmits([emitname])

setTimeout(() =>{
  emiTs(emitname,'hello 老登',"im tom")
  sendYet.value = true
},2000)


</script>

<template>
    <p>
       are you send ?  {{ sendYet }}
    </p>
</template>

<style scoped>

</style>