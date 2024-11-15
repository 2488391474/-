<template>
  <div class="common-layout">
    <div class="left_menu">
      <Logo v-if="!setting.logoHidden"></Logo>
      <el-menu
        :collapse:="userStore.isCollapse"
      >
      <Mymenu :routes="userStore.routes"></Mymenu>
    </el-menu>
    </div>
    <div class="right_content">
      <div class="header">header</div>
      <div class="main_content">maincontent</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Logo from "./logo/index.vue";
import Mymenu from "./mymenu/index.vue";
import setting from "@/setting";
import useUserStore from "@/store/user";

const userStore = useUserStore();
onMounted(()=>{
  console.log(userStore.routes);
  
})
</script>

<style scoped lang="scss">
.common-layout {
  height: 100vh;
  background: red;
  display: flex;
  .left_menu {
    background: $base-menu-color;
    width: $base-menu-width;
  }
  .right_content {
    background: blue;
    flex: 1;
    .header {
      background: $top-tarbar-color;
      height: $top-tarbar-height;
    }
    .main_content {
      padding: 16px;
    }
  }
}
</style>
