<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/14 16:50
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....
//  1. 自定义指令 以 `v`开头
//  2. 绑定内容、类型可以自定义  eg: bindingObj
// 通过实现 自定义指令，进行鉴权以及权限按钮的展示
// permission

import type {Directive, FunctionDirective} from "vue";

localStorage.setItem('user','xiao')

//mock后台拿到的数据
const permission = [
    'xiao:shop:add',
   // 'xiao:shop:delete',
    'xiao:shop:edit',
]

//
const userName = localStorage.getItem('user') as string
const vAuthButton:Directive<HTMLElement,string> = (el,bindingObj) => {
  if (!permission.includes(userName + ':' + bindingObj.value)){
    // 无鉴权信息，style处理
    el.style.display = 'none'
  }
}
</script>

<template>
<div class="btns">
  <button v-auth-button="'shop:add'">Add</button>
  <button v-auth-button="'shop:delete'">Delete</button>
  <button v-auth-button="'shop:edit'">Edit</button>
</div>
</template>

<style scoped>
 .btns{

   margin: 20px;
   justify-content: center;
   border: 4px #535bf2;
 }
</style>