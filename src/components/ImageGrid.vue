<template>
  <div class="image-grid">
    <div 
      v-for="image in images" 
      :key="image" 
      class="image-item"
    >
      <img :src="image" :alt="image" class="album-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  images: string[];
}>();
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 24px;
}

.image-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.album-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>