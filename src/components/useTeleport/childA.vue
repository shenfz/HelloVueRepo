<script setup lang="ts">
/**
 * @package:
 * @Function:
 * @author:        shenfz
 * @description:
 * @date:         2024/4/9 23:55
 * @version:      v1.0.0
 * @email         1328919715@qq.com
 */


</script>

<template>
   <div class="dialog">
     <header class="header">
       <div>我是弹窗</div>
       <el-icon><CloseBold></CloseBold></el-icon>
     </header>
     <main class="main">
       我是主题内容
     </main>
     <footer class="footer">
       <el-button size="small">cancel</el-button>
       <el-button size="small" type="primary">sure</el-button>
     </footer>
   </div>
</template>

<style scoped>
  .dialog{
    width: 400px;
    height: 400px;
    background: #213547;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50px;
    top: 50px;
    margin-left: -200px;
    margin-top: -200px;
  }
  .header{
    display: flex;
    color: white;
    border-bottom: 1px solid #535bf2;
    padding: 10px;
  }
  .main{
    flex: 1;
    color: #242424;
    padding: 10px;
  }
</style>