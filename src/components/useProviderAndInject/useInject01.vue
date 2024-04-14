<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 20:38
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
import {inject} from "vue";
import type { Ref} from 'vue'
const colorVal = inject<Ref<string>>('boxColor')
</script>

<template>
   <h1>父亲</h1>
  <div class="box"></div>
  <div>
    <div>
      <use-inject02></use-inject02>
    </div>
  </div>
</template>

<style scoped>
.box{
  display: flex;
  height: 100px;
  width: 100px;
  background-color: v-bind(colorVal);
  border: 2px solid #213547;
}
</style>