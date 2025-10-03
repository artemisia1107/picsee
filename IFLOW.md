# PicSite 项目概述

## 项目简介

PicSite 是一个使用 Next.js 构建的在线图片展示网站。它允许用户浏览相册、查看图片，并提供了简单的搜索功能。

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **UI库**: React, Tailwind CSS
- **其他依赖**: 
  - `gray-matter` 用于解析 Markdown 文件中的 frontmatter
  - `react-markdown` 用于渲染 Markdown 内容

## 项目结构

```
.
├── public/                 # 静态资源文件夹
│   └── images/             # 图片资源
├── src/
│   ├── app/                # 应用页面和组件
│   │   ├── album/[id]/     # 相册详情页面
│   │   ├── components/     # 公共组件 (相册卡片、图片网格等)
│   │   └── utils/          # 应用工具函数
│   ├── content/            # 内容文件 (Markdown 格式的相册描述)
│   │   └── albums/         # 相册描述文件
│   ├── types/              # TypeScript 类型定义
│   └── utils/              # 通用工具函数
├── package.json            # 项目依赖和脚本
└── README.md               # 项目说明文档
```

## 核心功能模块

### 1. 相册管理
- 相册数据通过 Markdown 文件 (`src/content/albums/*.md`) 进行管理。
- 每个相册文件包含元数据 (id, name, date, description, coverImage) 和图片列表。
- 工具函数 `src/app/utils/albums.ts` 负责读取和解析这些 Markdown 文件，提供获取所有相册、根据ID获取特定相册和搜索相册的功能。

### 2. 页面路由
- **首页 (`/`)**: 展示所有相册的网格视图。
- **相册详情页 (`/album/[id]`)**: 展示特定相册中的所有图片。

### 3. 组件
- **AlbumCard**: 显示单个相册的封面、名称、日期和描述。
- **AlbumGrid**: 以网格形式展示多个 AlbumCard。
- **ImageGrid**: 在相册详情页以网格形式展示所有图片。
- **SearchBar**: 提供相册搜索功能。

## 开发与部署

### 开发环境
1. 安装依赖: `npm install` 或 `yarn install`
2. 启动开发服务器: `npm run dev` 或 `yarn dev`

### 构建与生产部署
1. 构建项目: `npm run build` 或 `yarn build`
2. 启动生产服务器: `npm start` 或 `yarn start`

### 添加新相册
1. 在 `src/content/albums/` 目录下创建一个新的 Markdown 文件。
2. 在文件中添加 frontmatter 元数据和图片列表。
3. 将对应的图片文件放入 `public/images/` 目录下的相应文件夹中。