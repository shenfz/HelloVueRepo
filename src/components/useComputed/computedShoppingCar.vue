<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:  computed的购物车
 * @date:         2024/4/3 9:57
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

// 1. 选项式的 需要实现set 和 get ，允许修改值
// 2. 函数式的 只需要实现 getter，但是不允许修改值 ，只读的
import {ref,computed,reactive} from 'vue'
import {i, l} from "vite/dist/node/types.d-aGj9QkWt";
let firstname = ref('zhang')
let lastname = ref('san')

// 选项式
// let name = computed<string>({
//   get() {
//     return firstname.value + '-' + lastname.value
//   },
//   set(newVal){
//    [firstname.value,lastname.value] = newVal.split('-')
//   }
// })
// const changename = () => {
//   name.value = 'li-si'
// }

// 函数式
// let  name = computed(() => {
//   return firstname.value + '-' + lastname.value
// })

// shopping car
interface Data {
  name:string
  price:number
  num:number
}
let searchKeyword = ref("")
let searchData = computed(()=>{
  return data.filter((item:Data) =>{
    return item.name.includes(searchKeyword.value)
  })
})

let data = reactive<Data[]>([
    {
      name:"red",
    price:10,
    num:10,
    },
  {
    name:"blue",
    price:10,
    num:10,
  },
  {
    name:"yellow",
    price:10,
    num:10,
  },
  {
    name:"grey",
    price:10,
    num:10,
  },

    ])
const total = computed(() =>{
  return data.reduce((prev:number,next:Data) => {
    return prev + next.num * next.price
  },0)
})

const del = (index:number) =>{
  // if (index < 0 || index > data.length){
  //   return
  // }
  data.splice(index,1)
}


</script>

<template>
 <div>
   <div>
     <input placeholder="search" type="text" v-model="searchKeyword">
   </div>
   <div style="margin-top: 20px">
     <table border width="600" cellpadding="0" cellspacing="0">
       <thead>
       <tr>
         <th>name</th>
         <th>price</th>
         <th>number</th>
         <th>total</th>
         <th>delete</th>
       </tr>
       </thead>
       <tbody>
       <tr v-for="(item,index) in searchData">
         <td align="center"> {{ item.name }}</td>
         <td align="center"> {{ item.price }}</td>
         <td align="center"><button @click="item.num>1?item.num--:null">-</button> {{ item.num }} <button @click="item.num<99?item.num++:null">+</button>  </td>
         <td align="center"> {{ item.num * item.price }}</td>
         <td align="center"> <button @click="del(index)">delete</button></td>
       </tr>

       </tbody>
       <tfoot>
       <tr>
         <td>合计</td>
         <td></td>
         <td></td>
         <td> {{ total }}  </td>
       </tr>
       </tfoot>

     </table>
   </div>
 </div>
</template>

<style scoped>

</style>