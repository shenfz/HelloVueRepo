<script setup lang="ts">/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/3/24 7:26
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

    // 1.子组件接收属性，需要自定义
    // 2.模板中使用，可以直接 `{{ title}}` 访问
    // 3.js部分访问，需要定义常量接收后，再索引使用
//======================================= js
/*const props = defineProps({
      title:{
        msg: String,
        default:"默认值"
      },
      arr:[]

})
console.log(props.title)*/

//===================================== ts
// withDefaults 是  ts特有的。给参数绑定默认值
 withDefaults(defineProps<{
  title:string,
  arr:number[]
}>(),{
   title: () => "默认值",
   arr:() =>{
     return [0,0,0]
   }
 })

</script>

<template>
<div>
  <h1> title from parent： {{ title }}</h1>
  <h1> array from parent ： {{ arr }}</h1>
</div>

</template>
