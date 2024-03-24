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
import {ref} from 'vue'
const msg = ref('from parent')

</script>

<template>
<child-with-slots>
  <h1>
    {{ msg }}
  </h1>
</child-with-slots>
</template>

<style scoped>

</style>