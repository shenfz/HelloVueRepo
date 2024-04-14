<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 18:08
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....

// 过渡组件，六个中间态
// 1.    <transition name="fade">  给定name，style加后缀的形式 eg: fade-enter-active
// 2.    <transition leave-active-class="animate__animated animate__tada" enter-active-class="animate__animated animate__shakeX"> 使用三方动画库
// 3.    八个生命钩子 ，其实也是为的使用动画库   eg: gasp  ，  greenSock
// 4.    过渡组件组，常用与对列表的渲染动画

// 过渡组件 属性
// 2.   <transition :duration="{enter:500,leave:1000}">    出现过渡动画持续500ms，消失过渡1s


import {ref} from "vue";
const flag = ref<Boolean>(true)


</script>

<template>
<div class="content">
  <el-button @click="flag = !flag">switch</el-button>
  <transition name="fade">
    <div v-if="flag" class="box">

    </div>
  </transition>
</div>
</template>

<style scoped>
 .box{
   width: 200px;
   height: 200px;
   background: #535bf2;
 }

 .fade-enter-from{
   width: 200px;
   height: 200px;
 }
 .fade-enter-active{
  transition: all 1.5s ease;
 }
 .fade-enter-to{
   width: 200px;
   height: 200px;
   transform: scale(2);
   background: #213547;
 }

 .fade-leave-from{
   width: 200px;
   height: 200px;
 }
 .fade-leave-active{
   transition: all 2s ease-in-out;
 }
 .fade-leave-to{
   width: 200px;
   height: 200px;
   transform: scale(2);
   background: #213547;
 }

</style>