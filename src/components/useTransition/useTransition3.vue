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
// 1.    <transition name="fade">  给定name，加后缀的形式
// 2.   <transition leave-active-class="animate__animated animate__tada" enter-active-class="animate__animated animate__shakeX">
// 3.   八个生命钩子 ，其实也是为的使用动画库  eg: gasp  ，  greenSock
import {ref} from "vue";
const flag = ref<Boolean>(true)
//=======================================   enter
const EnterForm = (el:Element) =>{
  console.log("进入之前",el)
}
const enterActive = (el:Element) =>{
  console.log("过渡曲线",el)
}
const EnterTo = (el:Element) =>{
  console.log("过渡完成",el)
}
const EnterCanceled = (el:Element) =>{
  // 切换过快 导致的
  console.log("动画被打断",el)
}
//===================================  leave
const LeaveForm = (el:Element) =>{
  console.log("离开之前",el)
}
const Leave = (el:Element,done:Function) =>{
  console.log("过渡曲线",el,done())
}
const AfterLeave = (el:Element) =>{
  console.log("过渡完成",el)
}
const LeaveCanceled = (el:Element) =>{
  // 切换过快 导致的
  console.log("动画被打断",el)
}


</script>

<template>
  <div class="content">
    <el-button @click="flag = !flag">switch</el-button>
    <transition
     @before-enter="EnterForm"
     @enter="enterActive"
     @after-enter="EnterTo"
     @enter-cancelled="EnterCanceled"

     @before-leave="LeaveForm"
     @leave = "Leave"
     @after-leave="AfterLeave"
     @leaveCancelled="LeaveCanceled"
    >
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