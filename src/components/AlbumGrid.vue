<template>
  <div class="album-grid">
    <AlbumCard 
      v-for="album in albums" 
      :key="album.id" 
      :album="album" 
      @click="goToAlbum(album.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Album } from '../types/album';
import AlbumCard from './AlbumCard.vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  albums: Album[];
}>();

const router = useRouter();

const goToAlbum = (id: string) => {
  router.push(`/album/${id}`);
};
</script>

<style scoped>
.album-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
}
</style>