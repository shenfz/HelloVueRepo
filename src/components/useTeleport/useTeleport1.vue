<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/9 23:55
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

// 1. teleport 参数 [disabled] 动态切换开关，[to]传输至哪个 属性名或者标签
// vh : 视口比例  50vh 就是50%的视口

</script>

<template>
  <div class="parent">
    <h1> 父级 </h1>
  </div>
   <teleport :disabled="true" to="body">
     <child-a></child-a>
   </teleport>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.parent{
   background: #1a1a1a;
   height: 50vh;
 }
</style>