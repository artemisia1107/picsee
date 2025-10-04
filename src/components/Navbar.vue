<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()
const navigation = ref([
  { name: '主页', path: '/' },
  { name: '关于', path: '/about' }
])

const currentPath = computed(() => route.path)
</script>

<template>
  <nav class="bg-[#f3f3f3] p-4">
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="text-xl font-bold">
        PicSite
      </RouterLink>
      <div>
        <RouterLink 
          v-for="item in navigation" 
          :key="item.path"
          :to="item.path"
          :class="[
            'mr-4',
            currentPath === item.path ? 'font-bold' : ''
          ]"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>