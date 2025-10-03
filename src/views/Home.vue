<script setup lang="ts">
import { ref, computed } from 'vue'
import { getAllAlbums } from '@/utils/albums'
import AlbumGrid from '@/components/AlbumGrid.vue'
import SearchBar from '@/components/SearchBar.vue'

const albums = getAllAlbums()
const searchTerm = ref('')

const filteredAlbums = computed(() => {
  if (!searchTerm.value) {
    return albums
  }
  
  return albums.filter(album => {
    if (!album || typeof album !== 'object') return false;
    
    const name = album.name ?? '';
    const description = album.description ?? '';

    return (
      name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">PicSite 相册集</h1>
    
    <SearchBar v-model:searchTerm="searchTerm" />
    
    <div v-if="filteredAlbums.length > 0">
      <AlbumGrid :albums="filteredAlbums" />
    </div>
    <div v-else class="text-center text-gray-500">
      没有找到匹配的相册
    </div>
  </div>
</template>