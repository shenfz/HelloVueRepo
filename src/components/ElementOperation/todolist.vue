<script setup="ts">

/**
 * @package:
 * @Function:    元素添加和删除
 * @author:        shenfz
 * @description:
 * @date:         2024/3/22 4:55
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import { ref } from 'vue'

// 给每个 todo 对象一个唯一的 id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  // ...
  todos.value.push({id:id++,text: `Learn ${newTodo.value}`})
}

function removeTodo(todo) {
     todos.value.splice(todos.value.indexOf(todo),1)
  // todos.value = todos.value.filter((word) => word.id != todo.id)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>