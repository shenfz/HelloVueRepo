<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/9 18:34
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */
// 注册组件 字符串模式


import {ref,shallowRef} from "vue";

const tabData = ref([
  {
    name:'A',
    com:'CardA'
  },
  {
    name:'B',
    com:'CardB'
  },
  {
    name:'C',
    com:'CardC'
  },

])

const active = ref(0)
const cmdID = shallowRef('CardA')

const switchtab = (item,index) =>{
  cmdID.value = item.com
  active.value = index
}

</script>

<script lang="ts">
import CardA from "@components/dynamicComponents/cardComs/cardA.vue";
import CardB from "@components/dynamicComponents/cardComs/cardB.vue";
import CardC from "@components/dynamicComponents/cardComs/cardC.vue";
export default {
  components:{
    CardA,
    CardB,
    CardC
  }
}
</script>

<template>
  <div style="display: flex">
    <div :class="[active == index ? 'active':'']" class="tabs" v-for="(item,index) in tabData">
      <div @click="switchtab(item,index)">{{item.name}}</div>
    </div>
  </div>
  <component :is="cmdID"></component>
</template>

<style scoped>
.tabs{
  border: 1px solid #CCC;
  padding: 5px 10px;
  margin: 5px;
}
</style>