<template>
  <div class="search-bar">
    <input 
      type="text" 
      v-model="searchTerm" 
      placeholder="搜索相册..." 
      class="search-input"
      @input="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchTerm = ref('');

const emit = defineEmits<{
  (e: 'search', term: string): void;
}>();

const handleSearch = () => {
  emit('search', searchTerm.value);
};
</script>

<style scoped>
.search-bar {
  padding: 24px;
  text-align: center;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}
</style>