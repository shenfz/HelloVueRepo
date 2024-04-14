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

// 5.  demo示例 对一个二位数组进行打乱和动画演示

import "animate.css"
import {ref} from 'vue'
import _ from "lodash";
let items = ref(Array.apply(null,{length:81} as number[]).map((_,index) =>{
  return {
     id:index,
     number:(index % 9) + 1
  }
}))

const shuffle = () =>{
  items.value = _.shuffle(items.value)
}

</script>

<template>
  <div>
    <button @click="shuffle">shuffle it</button>
    <transition-group class="warp" move-class="arr" tag="div">
      <div class="items" v-for="item in items" :key="item.id" >
        {{ item.number }}
      </div>
    </transition-group>
  </div>
</template>

<style  scoped>
 .warp{
   display: flex;
   flex-wrap: wrap;
   width: calc(25px * 10 + 9px);
   .items{
     display: flex;
     align-items: center;
     justify-content: center;
     width: 25px;
     height: 25px;
     border: 1px solid #535bf2;
   }
 }

 .arr{
   transition: all 1s;
 }

</style>