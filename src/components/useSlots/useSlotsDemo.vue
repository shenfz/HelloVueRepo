<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/3/24 7:57
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {reactive} from "vue";

type names = {
  name:string
  age:number
}

const data = reactive<names[]>([
    {
     name:"1",
     age:1
    },  {
    name:"2",
    age:2
  },  {
    name:"3",
    age:3
  },  {
    name:"4",
    age:4
  },  {
    name:"5",
    age:5
  }
])

</script>

<template>
  <div>
    <header class="header">
      <slot></slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
    <footer class="footer">
       <div v-for="(item,index) in data">
         <slot name="footer" :item="item" :index="index"></slot>
       </div>
    </footer>
  </div>

  <div>
    <footer class="footer2">
      <slot name="footer2"></slot>
    </footer>
  </div>
</template>

<style scoped>
.header{
  height: 200px;
  background: #535bf2;
  color: #CCCCCC;
}
.main{
  height: 200px;
  background: #213547;
  color: #CCCCCC;
}
.footer{
  height: 200px;
  background: #242424;
  color: #CCCCCC;
}
</style>