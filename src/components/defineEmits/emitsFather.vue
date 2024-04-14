<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/3/24 7:38
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */

import {ref} from 'vue'

let respMsg = ref('nothing')
function callback(emitName:string,msg:string){
    respMsg.value = 'get: ' + emitName + msg
}
</script>

<template>
    <child-emits @response = callback ></child-emits>
    <p>
      {{ respMsg }}
    </p>
</template>

<style scoped>

</style>