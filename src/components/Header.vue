<template>
  <header class="site-header">
    <div class="container mx-auto px-4 py-6">
      <h1 class="text-2xl font-bold">PicSee 图片展示</h1>
      <nav class="mt-4">
        <ul class="flex space-x-6">
          <li><router-link to="/" class="hover:text-blue-500" active-class="text-blue-500 font-bold">首页</router-link></li>
          <li><router-link to="/about" class="hover:text-blue-500" active-class="text-blue-500 font-bold">关于</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// 页头组件不需要额外的逻辑
</script>

<style scoped>
.site-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  z-index: 100;
}

.site-header h1 {
  color: #333;
}

.site-header a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.site-header a:hover {
  color: #4a90e2;
}
</style>