<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/9 22:16
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// 1.匿名插槽
// 2.具名插槽 ，可以v-slot简写为#
// 3.作用域插槽 ， 父组件可以拿到子组件的数据
// 4.动态插槽

</script>

<template>
 <div class="content">
    <use-slots-demo>
      <template v-slot>
        <div>
          匿名插槽！！！
        </div>
      </template>
    </use-slots-demo>
 </div>
</template>

<style scoped>

</style>