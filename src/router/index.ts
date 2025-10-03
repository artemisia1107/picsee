import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Album from '@/views/Album.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/album/:id', component: Album, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router