<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   递归组件
 * @date:         2024/4/8 19:02
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

// 递归组件 绑定事件会参与冒泡，需要设定 阻止冒泡  @click.stop="eventHandler(item)"

// 递归组件 使用递归的方法
// 1. 模板中直接使用vue文件名进行递归
// 2. 再开一个script ，进行名称导出，再在模板中使用
// 3.  使用defineOptions，宏定义，模板中使用
interface Tree {
  name:string
  checked:boolean
  children?:Tree[]
}
defineProps<{
  data?:Tree[]
}>()

defineOptions({
  name:"xiaoman"
})

function clicked(item:Tree){
  console.log(item)
}
</script>


<template>

  <div class="tree" @click.prevent="clicked(item)" v-for="item in data">
    <input v-model="item.checked" type="checkbox"> <span> {{ item.name}} </span>
    <xiaoman v-if="item?.children?.length" :data="item?.children" ></xiaoman>
  </div>

</template>
<style scoped>
.tree{
  margin-left: 20px;
}
</style>