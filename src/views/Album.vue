<template>
  <div class="album" v-if="album">
    <h1 class="album-title">{{ album.name }}</h1>
    <p class="album-date">{{ album.date }}</p>
    <p class="album-description">{{ album.description }}</p>
    <ImageGrid :images="album.images" />
  </div>
  <div class="album-not-found" v-else-if="notFound">
    <h1>相册未找到</h1>
    <p>抱歉，您访问的相册不存在。</p>
  </div>
  <LoadingSpinner v-else-if="loading" text="正在加载相册..." />
  <div v-else-if="error" class="error-message">{{ error }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ImageGrid from '../components/ImageGrid.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { Album } from '../types/album';

const route = useRoute();
const album = ref<Album | null>(null);
const loading = ref(true);
const error = ref('');
const notFound = ref(false);

// 模拟从API获取数据
const fetchAlbum = async (id: string) => {
  try {
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 模拟数据
    if (id === '2025') {
      album.value = {
        id: '2025',
        name: '自然风光',
        date: '2025-09-19',
        description: '美丽的自然风光摄影集',
        coverImage: '/images/2025/cover.jpg',
        images: [
          '/images/2025/1.png',
          '/images/2025/2.jpg',
          '/images/2025/3.jpg'
        ]
      };
    } else {
      notFound.value = true;
    }
    
    loading.value = false;
  } catch (err) {
    error.value = '加载相册数据失败';
    loading.value = false;
  }
};

onMounted(async () => {
  const albumId = route.params.id as string;
  await fetchAlbum(albumId);
});
</script>

<style scoped>
.album {
  padding: 24px;
}

.album-title {
  font-size: 2em;
  margin-bottom: 16px;
}

.album-date {
  color: #666;
  margin-bottom: 16px;
}

.album-description {
  margin-bottom: 24px;
  color: #333;
}

.album-not-found {
  padding: 24px;
  text-align: center;
}

.error-message {
  text-align: center;
  padding: 40px 20px;
  color: #e74c3c;
  font-size: 18px;
}
</style>