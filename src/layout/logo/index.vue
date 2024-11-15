<template>
  <div class="logo">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
    .logo{
        width: 100%;
        height: $logo-height;
        align-items: center;
        display: flex;
        gap:10px;
        border-bottom: 1px solid #fff;
        img{
            height: $logo-height;
            width:$logo-height;
            object-fit: contain;
        }
        p{
            flex: 1;
            color:#fff;
        }
    }
</style>
