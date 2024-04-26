<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/3/28 4:34
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {reactive} from "vue";

interface Person {
  name?:string
  age?:number
  email?:string
}

let form = reactive<Person>({})
// let formReadOnly = readonly(form)
let arrs = reactive<{arr:string[]}>({
  arr: []
})
// let list = reactive({name:"xxx"})
const addArr = ['x','y','z']
const submit = () => {
  // formReadOnly.name ? formReadOnly.name = form.name : formReadOnly.name = form.name
  console.log(form)
}
const add = () => {
  setTimeout(() => {
    // arrs.arr.push(...addArr)
    arrs.arr = addArr
  },1000)
}
</script>

<template>
  <form v-show="false">
    <input v-model="form.name"  type="text"/>
    <hr>
    <input v-model="form.age" type="number">
    <hr>
    <button @click.prevent="submit"> submit !!</button>
  </form>
  <br>
  <br>
  <form>
    <div>
      <ul>
        <li v-for="item in arrs"> {{ item }}</li>
      </ul>
    </div>
    <button @click.prevent="add"> add !!</button>
  </form>

</template>

<style scoped>

</style>
