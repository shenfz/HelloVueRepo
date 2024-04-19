<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   一个封装成插件的全局加载 提示组件
 * @date:         2024/4/18 1:14
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// write here ....

const isShow = ref<boolean>(false)
const show = () => isShow.value = true
const hidden = () => isShow.value = false

// 抛出
defineExpose({
  show,
  hidden,
  isShow,
})

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  }]

</script>

<template>
  <el-table v-loading="isShow" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<style scoped>
body {
  margin: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>