<script setup lang="ts">

// 1. 使用加载插件 [useCustomPlugin]

// const intance = getCurrentInstance()
// intance?.proxy?.$useLoading.show()
// setTimeout(()=>{
//   intance?.proxy?.$useLoading.hidden()
// },3000)

</script>
<template>
 <div>
<use-keep-live1></use-keep-live1>
 </div>
</template>

<script lang="ts">

// interface Tree {
//   name:string
//   checked:boolean
//   children?:Tree[]
// }
// 递归数据
// const data = reactive<Tree[]>([
//       {
//         name:"1",
//         checked:false,
//         children:[{
//           name:"1-1",
//           checked:false
//         }]
//       },
//       {
//         name:"2",
//         checked:true,
//         children:[{
//           name:"2-1",
//           checked:false
//         }]
//       },
//       {
//         name:"3",
//         checked:false,
//         children:[{
//           name:"3-1",
//           checked:false,
//           children:[{
//             name:"3-1-1",
//             checked:true
//           }]
//         }]
//       }
//     ]
// )
</script>