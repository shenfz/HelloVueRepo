<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/14 14:13
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
// 1. 发布订阅模式
// 2. getCurrentInstance 只能在 setup 或生命周期钩子中使用
// 3. getCurrentInstance 方法就能获取当前组件的实例(替代vue2 中的this)、上下文来操作 router 和 vuex 等
import EmitCom2 from "@components/useMitt/emitCom2.vue";
import EmitCom1 from "@components/useMitt/emitCom1.vue";
</script>

<template>
 <emit-com1> </emit-com1>
  <emit-com2> </emit-com2>
</template>

<style scoped>

</style>