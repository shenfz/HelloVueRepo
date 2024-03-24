<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:  v-model的数据双向绑定
 * @date:         2024/3/22 4:57
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {ref} from 'vue'

const text = ref('')



</script>

<template>
      <input v-model="text" placeholder="please input"/>
     <p v-if='text == "" '>{{ text }}</p>
     <p v-else>{{ text }}</p>
</template>

<style scoped>

</style>