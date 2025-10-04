import { Album } from '@/types/album'

// 模拟相册数据
const mockAlbums: Album[] = [
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
  },
  {
    id: 'about',
    name: '关于页面',
    date: '2025-10-01',
    description: '关于PicSee项目的介绍',
    coverImage: '/images/about/show-logo.webp',
    images: [
      '/images/about/logo.png',
      '/images/about/logo-rc.png',
      '/images/about/show-logo.webp'
    ]
  }
];

export function getAllAlbums(): Album[] {
  return mockAlbums;
}

export function getAlbumById(id: string): Album | undefined {
  return mockAlbums.find(album => album.id === id);
}

export function searchAlbums(query: string): Album[] {
  return mockAlbums.filter(album => 
    album.name.toLowerCase().includes(query.toLowerCase()) ||
    album.description.toLowerCase().includes(query.toLowerCase())
  );
}