<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   vue中使用类
 * @date:         2024/3/28 5:59
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
// new  使用构造函数
const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);

</script>

<template>

</template>

<style scoped>

</style>