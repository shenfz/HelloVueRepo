<script setup lang="ts">

import UseCustomOrder1 from "@components/useCustomOrder/useCustomOrder1.vue";
import StyleScoped1 from "@/cssComponents/useStyleScoped/styleScoped1.vue";
import DynamicStyle2 from "@/cssComponents/useStyleScoped/dynamicStyle2.vue";
import UseStyleMudule1 from "@/cssComponents/useStyleModule/useStyleMudule1.vue";

// 1. 使用加载插件 [useCustomPlugin]

// const intance = getCurrentInstance()
// intance?.proxy?.$useLoading.show()
// setTimeout(()=>{
//   intance?.proxy?.$useLoading.hidden()
// },3000)

</script>
<template>
 <div>
<use-style-mudule1></use-style-mudule1>
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