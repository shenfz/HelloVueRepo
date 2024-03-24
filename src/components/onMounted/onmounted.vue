<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:   ref 同名元素 onMounted 后，改变其内容
 * @date:         2024/3/24 7:03
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {ref} from 'vue'
import {onMounted} from "vue";

// init it
const pDomEle = ref(null)
// after mount ,do something
onMounted(() =>{
  setTimeout(()=> {
    pDomEle.value.textContent = "content changed!!"
  },2000)
})

</script>

<template>
  <p ref = "pDomEle"> It's me  </p>
</template>

<style scoped>

</style>