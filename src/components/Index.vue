<template>
  <el-container class="index">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
 .index{
   height: 100%;
   .el-header{
    height: 60px;
    line-height: 60px;
    background-color: #f8d0d0;
   }
   .el-aside{
     background-color: #b8f9fc;
   }
 }
</style>
