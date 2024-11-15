<template>
  <template v-for="route in props.routes" :key="route.path">
    <template v-if="!route.children">
      <el-menu-item :index="String(route.path)" :title="route.meta.title">
        <template #title>
          <el-icon>
            <component :is="route.meta.icon"></component>
          </el-icon>
          {{ route.meta.title }}
        </template>
      </el-menu-item>
    </template>
    <template v-else>
      <el-sub-menu :index="String(route.path)">
        <template #title>
          <el-icon>
            <component :is="route.meta.icon"></component>
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <Mymenu :routes="route.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
interface Route {
  path: string;
  meta: {
    title: string;
  };
  children?: Route[];
}

const props = defineProps(["routes"]);
</script>
<script lang="ts">
export default {
  name: "Mymenu",
};
</script>
