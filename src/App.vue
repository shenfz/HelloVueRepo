<script setup lang="ts">

import UseCustomOrder1 from "@components/useCustomOrder/useCustomOrder1.vue";
</script>
<template>
 <div>
   <use-custom-order1></use-custom-order1>
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