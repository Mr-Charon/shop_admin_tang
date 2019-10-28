<template>
  <el-container class="index">
    <el-header>
      <div class="logo">
        <img src="../assets/logo1.png" alt="">
      </div>
      <div class="title">
      <h1>后台管理系统</h1>
      </div>
      <div class="logout">
        欢迎光临~ <a href="javascript;:">退出</a>
      </div>
    </el-header>
    <!-- 侧边栏 -->
    <!-- default-active="2" -->
    <el-container>
      <el-aside width="200px">
      <el-menu
        active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
          <el-menu-item index="1-1">
           <i class="el-icon-s-promotion"></i>
           <span slot='title'>用户列表</span>
          </el-menu-item>
      </el-submenu>
     <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="roles">
           <i class="el-icon-s-promotion"></i>
           <span slot='title'>角色列表</span>
          </el-menu-item>
           <el-menu-item index="rights">
           <i class="el-icon-s-promotion"></i>
           <span slot='title'>权限列表</span>
          </el-menu-item>
      </el-submenu>

    </el-menu>
      </el-aside>
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
   background: url('../assets/1867.jpg') no-repeat;
   background-size: 100% 100%;
   .el-header{
    height: 60px;
    line-height: 60px;
    display: flex;
   .logo{
     width: 180px;
     img{
       width: 140px;
       margin: 10px;
     }
   }
   .title{
     flex: 1;
     line-height: 60px;
     text-align: center;
   }
   .logout{
     width: 180px;
     line-height: 60px;
     text-align: right;
     font-weight: 700;
     a{
       text-decoration: none;
       color: #388af5
     }
   }
   }
   .el-aside{
     border: 1px solid #000;
     .el-menu{
       background-color: rgba(255,255,255,.5);
     }
   }
   .el-main{
     border: 1px solid #000;
     border-left: 0 solid #000;

   }
 }
</style>
