<template>
  <div class="home">
    <SearchBar @search="handleSearch" />
    <LoadingSpinner v-if="loading" text="正在加载相册..." />
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <AlbumGrid v-else :albums="filteredAlbums" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AlbumGrid from '../components/AlbumGrid.vue';
import SearchBar from '../components/SearchBar.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { Album } from '../types/album';

const albums = ref<Album[]>([]);
const filteredAlbums = ref<Album[]>([]);
const loading = ref(true);
const error = ref('');

// 模拟从API获取数据
const fetchAlbums = async () => {
  try {
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟数据
    albums.value = [
      {
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
      }
    ];
    
    filteredAlbums.value = albums.value;
    loading.value = false;
  } catch (err) {
    error.value = '加载相册数据失败';
    loading.value = false;
  }
};

onMounted(() => {
  fetchAlbums();
});

const handleSearch = (term: string) => {
  if (term.trim() === '') {
    filteredAlbums.value = albums.value;
  } else {
    filteredAlbums.value = albums.value.filter(album => 
      album.name.toLowerCase().includes(term.toLowerCase()) ||
      album.description.toLowerCase().includes(term.toLowerCase())
    );
  }
};
</script>

<style scoped>
.error-message {
  text-align: center;
  padding: 40px 20px;
  color: #e74c3c;
  font-size: 18px;
}
</style>