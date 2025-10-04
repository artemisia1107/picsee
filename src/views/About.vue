<template>
  <div class="about">
    <h1>关于我们</h1>
    <div v-if="loading">
      <LoadingSpinner text="正在加载内容..." />
    </div>
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-else class="about-content" v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

const loading = ref(true);
const error = ref('');
const content = ref('');

// 模拟从Markdown文件加载内容
const loadContent = async () => {
  try {
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 模拟内容
    content.value = `
      <h2>欢迎来到 PicSee</h2>
      <p>PicSee 是一个现代化的图片展示平台，专注于为您提供最佳的图片浏览体验。</p>
      
      <h3>我们的特色</h3>
      <ul>
        <li>简洁优雅的界面设计</li>
        <li>快速流畅的浏览体验</li>
        <li>响应式布局，支持各种设备</li>
        <li>丰富的图片管理功能</li>
      </ul>
      
      <h3>技术栈</h3>
      <p>我们使用了现代化的技术栈来构建这个应用：</p>
      <ul>
        <li>Vue 3 + TypeScript</li>
        <li>Vite 构建工具</li>
        <li>Tailwind CSS 样式框架</li>
      </ul>
      
      <h3>联系我们</h3>
      <p>如果您有任何问题或建议，请通过以下方式联系我们：</p>
      <p>Email: support@picsee.com</p>
    `;
    
    loading.value = false;
  } catch (err) {
    error.value = '加载内容失败';
    loading.value = false;
  }
};

onMounted(() => {
  loadContent();
});
</script>

<style scoped>
.about {
  padding: 24px;
}

.about h1 {
  font-size: 2em;
  margin-bottom: 24px;
  text-align: center;
}

.about h2 {
  font-size: 1.5em;
  margin-top: 24px;
  margin-bottom: 16px;
}

.about h3 {
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 12px;
}

.about ul {
  margin: 12px 0;
  padding-left: 24px;
}

.about li {
  margin-bottom: 8px;
}

.error-message {
  text-align: center;
  padding: 40px 20px;
  color: #e74c3c;
  font-size: 18px;
}
</style>