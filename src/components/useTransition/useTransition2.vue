<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 18:33
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
import "animate.css"
// 过渡组件，六个中间态
// 1.    <transition name="fade">  给定name，style加后缀的形式 eg: fade-enter-active
// 2.    <transition leave-active-class="animate__animated animate__tada" enter-active-class="animate__animated animate__shakeX"> 使用三方动画库
// 3.   八个生命钩子 ，其实也是为的使用动画库  eg: gasp  ，  greenSock
// 过渡组件 属性
// 2.   <transition :duration="{enter:500,leave:1000}">    出现过渡动画持续500ms，消失过渡1s

import {ref} from "vue";
const flag = ref<Boolean>(true)

</script>

<template>
  <div class="content">
    <el-button @click="flag = !flag">switch</el-button>
    <transition :duration="{enter:500,leave:1000}" enter-active-class="animate__animated animate__tada" leave-active-class="animate__animated animate__shakeX">
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

</style>