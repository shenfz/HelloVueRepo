<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/9 23:27
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

// 1. await 置于顶层时,是es2017的特性，整个组件应该当作 异步组件使用
// 2. 加载异步组件的两种方式
import {axiosC} from "@/utils/axios.ts";
interface Data {
  data:{
    name:string,
    age:number,
    src:string,
    des:string
  }
}
const {data} = await axiosC.get<Data>('./data.json')

</script>

<template>
  <div class="sync">
    <div class="sync-content">
      <div><img class="srcImg" :src="data.src"></div>
      <div class="sync-pop">
        <div>{{data.name}}</div>
        <div>&nbsp;{{data.age}}</div>
      </div>
    </div>
    <hr>
    <div>
      <div>{{data.des}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>