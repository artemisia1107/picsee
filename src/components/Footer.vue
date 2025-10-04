<template>
  <footer class="site-footer flex flex-col items-center justify-center gap-0">
    <p class="text-gray-600">
      © {{ currentYear }} PicSee 图片展示. 保留所有权利.
    </p>
    <p class="text-gray-500 text-sm">
      使用 Vue 3 + TypeScript + Vite 构建
    </p>
  </footer>
</template>


<script setup lang="ts">
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.site-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #eaeaea;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  /* 👇 保证有高度，文字才能在区域正中 */
  height: 80px;

  /* 👇 让 flex 生效 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
