<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:  声明周期
 * @date:         2024/3/24 7:03
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
/*
*  v-if 处理的组件会触发 dom的加载和卸载，对应的钩子会执行
*
* */
import {ref} from "vue";
import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";
import {onRenderTracked,onRenderTriggered} from "vue";
// beforeCreate created setup语法糖模式下 没有这两个生命周期的， setup去代替
console.log('setup')
let div = ref<HTMLDivElement>()
// 创建之前
onBeforeMount(() =>{
  console.log('onBeforeMount')
})
// 创建完成
onMounted(() =>{
  console.log(' onMounted ')
})
//更新之前 能拿到的是更新之前的值
onBeforeUpdate(() =>{

})
// 更新之后
onUpdated(() =>{

})

//卸载之前
onBeforeUnmount(() =>{

})
//卸载之后
onUnmounted(() =>{

})
// 常用用作调试   收集事件
onRenderTracked((e) =>{
  console.log(e)
})
onRenderTriggered((e) =>{
  console.log(e)
})
</script>

<template>
<div ref = div>

</div>
</template>

<style scoped>

</style>