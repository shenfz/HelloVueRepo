<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/10 19:04
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....

// 6.  demo示例 数值增长动画

import "animate.css"
import gasp from 'gsap'
 import {reactive,watch} from "vue";

const num = reactive({
  current:0,
  tweenedNumber:0
})
watch(() => num.current,(newVal,_) => {
  gasp.to(num,{
    duration:1,
    tweenedNumber:newVal
  })
})
</script>

<template>
   <div>
     <input v-model="num.current" step="20" type="number" >
     <div>
       {{num.tweenedNumber.toFixed()}}
     </div>
   </div>
</template>

<style scoped>

</style>