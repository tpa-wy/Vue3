<template>
  <el-menu router :default-active="$route.path">
    <el-menu-item-group>
      <template #title>菜单1</template>
      <el-menu-item index="/demo1"> 选项1 </el-menu-item>
      <el-menu-item index="/demo2"> 选项2 </el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
export default {};
</script>

<style>
</style>