<template>
  <div class="album-card">
    <img :src="album.coverImage" :alt="album.name" class="album-cover" />
    <div class="album-info">
      <h3 class="album-name">{{ album.name }}</h3>
      <p class="album-date">{{ album.date }}</p>
      <p class="album-description">{{ album.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Album } from '../types/album';

const props = defineProps<{
  album: Album;
}>();
</script>

<style scoped>
.album-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.album-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.album-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.album-info {
  padding: 16px;
}

.album-name {
  margin: 0 0 8px 0;
  font-size: 1.2em;
  font-weight: bold;
}

.album-date {
  margin: 0 0 8px 0;
  color: #666;
  font-size: 0.9em;
}

.album-description {
  margin: 0;
  color: #333;
  font-size: 0.9em;
}
</style>