<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAlbumById } from '@/utils/albums'
import ImageGrid from '@/components/ImageGrid.vue'

const route = useRoute()
const album = ref<any>(null)

onMounted(() => {
  const albumData = getAlbumById(route.params.id as string)
  if (albumData) {
    album.value = albumData
  }
})
</script>

<template>
  <div class="container mx-auto px-4" v-if="album">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">{{ album.name }}</h1>
      <p class="text-gray-600">{{ album.date }}</p>
      <p>{{ album.description }}</p>
    </div>
    <ImageGrid :images="album.images" />
  </div>
  <div v-else class="container mx-auto px-4 py-8 text-center">
    <p>相册未找到</p>
  </div>
</template>