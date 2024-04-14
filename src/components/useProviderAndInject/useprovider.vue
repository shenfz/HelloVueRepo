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

// 1. vue3中， css 可以与变量绑定   eg:v-bind(xxx)
// 2. provide 中注入变量，可被inject者修改， 可以添加可读属性 readonly
// 3. provide 和 inject 传入的键名需要一致  eg: boxColor
// 4.  inject 出来可能为undefined ，当做一些修改操作，需要用断言 `！`
import {ref, provide} from "vue";

 const colorVal = ref<String>('red')
provide('boxColor', colorVal)
// provide('boxColor',readonly(colorVal))
</script>

<template>
  <h1> 爷爷 </h1>
  <br>
  <div>
    <label> 红色
      <input v-model="colorVal" value="red" type="radio" name="color">
    </label>
    <label> 黑色
      <input v-model="colorVal" value="black" type="radio" name="color">
    </label>
    <label> 蓝色
      <input v-model="colorVal" value="blue" type="radio" name="color">
    </label>
  </div>
  <div class="box"></div>
  <div>
    <use-inject01></use-inject01>
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