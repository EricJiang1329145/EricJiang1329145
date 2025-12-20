# 项目结构说明

## 1. 项目概览

这是一个基于Astro框架构建的静态博客网站，使用GitHub Pages进行部署。

## 2. 目录结构

```
├── public/              # 静态资源文件（图片、字体等）
├── src/                  # 源代码目录
│   ├── assets/         # 图片资源
│   ├── components/     # Astro组件
│   ├── content/       # Markdown/MDX博客内容
│   │   └── blog/      # 博客文章
│   ├── layouts/      # 页面布局组件
│   ├── pages/       # 页面路由
│   │   ├── blog/      # 博客相关页面
│   │   ├── about.astro  # 关于页面
│   │   ├── index.astro  # 首页
│   │   └── rss.xml.js   # RSS订阅
│   ├── styles/       # 样式文件
│   ├── consts.ts      # 常量定义
│   └── content.config.ts # 内容配置
├── docs/               # 项目文档
├── .vscode/           # VS Code配置
├── astro.config.mjs   # Astro配置
├── package.json        # 项目依赖和脚本
├── tsconfig.json      # TypeScript配置
└── README.md         # 项目说明
```

## 3. 核心配置文件说明

### 3.1 astro.config.mjs

Astro框架的主要配置文件，包含以下关键配置：
- `site`: 网站部署地址（https://EricJiang1329145.github.io）
- `base`: 网站部署路径（/blog）
- `integrations`: 集成的插件（mdx、sitemap）

### 3.2 package.json

项目依赖和脚本配置：
- `dev`: 启动本地开发服务器
- `build`: 构建生产版本到dist目录
- `preview`: 预览构建结果
- `deploy`: 构建并部署到GitHub Pages

### 3.3 content.config.ts

内容集合配置，定义了博客文章的结构和类型。

## 4. 部署配置

项目使用GitHub Pages部署，部署到`gh-pages`分支。部署脚本：
```bash
npm run deploy
```

部署后访问地址：https://ericjiang1329145.github.io/blog

## 5. 开发流程

1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`
3. 访问本地地址：http://localhost:4321
4. 编写内容：在`src/content/blog/`目录下创建Markdown/MDX文件
5. 构建生产版本：`npm run build`
6. 部署到GitHub Pages：`npm run deploy`

## 6. 内容管理

博客文章使用Markdown或MDX格式编写，存储在`src/content/blog/`目录下。每篇文章需要包含以下Frontmatter：

```yaml
title: 文章标题
description: 文章描述
date: 2025-12-20  # 发布日期
```

## 7. 组件说明

- `BaseHead.astro`: 页面头部组件，包含meta标签、标题等
- `Header.astro`: 网站导航栏
- `Footer.astro`: 网站页脚
- `FormattedDate.astro`: 日期格式化组件
- `BlogPost.astro`: 博客文章布局

## 8. 更新记录

### 2025-12-20
- 初始化项目结构
- 配置GitHub Pages部署
- 创建项目文档
- 修改Astro配置，添加`base: '/blog'`配置，使网站能部署到/blog路径
- 更新了部署相关文档