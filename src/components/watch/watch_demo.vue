<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:    侦听器
 * @date:         2024/3/24 7:15
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
import {ref,watch} from "vue";

 const todoId = ref(1)
 const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

//TODO  watch
watch(todoId,()=>{
    fetchData()
})

</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>