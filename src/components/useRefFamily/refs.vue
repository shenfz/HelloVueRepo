<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:  ref使用
 * @date:         2024/3/28 3:58
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
import {type Ref,ref,isRef,shallowRef} from 'vue'
interface Man  {
  name:string
}
// 适合复杂类型 自定义使用
const objByRef01:Ref<Man> = ref({name:"xxx"})
// 指定类型 泛型
const objByRef002  =ref<Man>({name:"xxx"})
//判断是否为响应式类型
const sureIRef = isRef(objByRef01)
// 浅层次 响应式
const shallowObj003 = shallowRef({name:"xxx"})
const change = () =>{
  objByRef01.value.name = "changed xxx"
  shallowObj003.value = {name:"changed xxx"}
}

</script>

<template>

</template>

<style scoped>

</style>