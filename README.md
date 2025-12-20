# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Build and deploy to GitHub Pages (gh-pages分支)  |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 部署说明

该项目使用GitHub Pages部署，部署到`gh-pages`分支。部署后可以通过以下地址访问：
- https://ericjiang1329145.github.io/blog

### 配置变更记录
- 2025-12-20: 修改了Astro配置文件，添加了`base: '/blog'`配置，使网站能部署到/blog路径
- 2025-12-20: 完善了项目文档结构，创建了docs文件夹

### 重大更新 (2025-12-20)
#### 1. 路由配置修复
- **问题**: base路径设置为'/blog'但导航链接使用根路径，导致路由冲突
- **解决方案**: 移除astro.config.mjs中的base配置，修复所有导航链接
- **影响文件**: `astro.config.mjs`

#### 2. 视觉设计现代化
- **设计理念**: 实现深色主题 + 玻璃态拟态 + 霓虹光效的现代科技感
- **技术实现**: 
  - 重构`src/styles/global.css`，建立完整的颜色系统和视觉效果
  - 优化`src/components/Header.astro`和`src/components/Footer.astro`
  - 添加动态背景渐变、玻璃态效果和霓虹光效
- **影响文件**: `src/styles/global.css`, `src/components/Header.astro`, `src/components/Footer.astro`

#### 3. 内容本地化
- **任务**: 将所有默认英文博客内容翻译为中文
- **翻译范围**: 
  - 5篇博客文章 (first-post.md, second-post.md, third-post.md, markdown-style-guide.md, using-mdx.mdx)
  - 关于页面 (about.astro)
- **翻译策略**: 保持技术准确性，调整表达方式符合中文习惯
- **影响文件**: `src/content/blog/`目录下的所有文件, `src/pages/about.astro`

#### 4. 开发环境优化
- **服务器**: 启动Astro开发服务器，运行在http://localhost:4323
- **功能验证**: 所有路由正常，样式效果完整，热重载功能正常
- **状态**: 开发环境稳定运行

#### 5. 文档完善
- **创建**: `docs/对话总结报告.md` - 完整的项目变更记录和技术文档
- **内容**: 详细记录所有技术实现、问题解决和最佳实践

### 项目当前状态
- ✅ 路由配置完全正常
- ✅ 视觉设计现代化，科技感十足
- ✅ 内容完全中文化
- ✅ 开发服务器稳定运行 (http://localhost:4323)
- ✅ 所有功能测试通过
- ✅ 日期格式修复，博客页面正常显示

### 技术修复记录
- **日期格式问题**: 将博客文章前置元数据中的中文日期格式改为ISO格式 (YYYY-MM-DD)，确保Astro正确解析
- **内容完整性**: 验证所有5篇博客文章和关于页面都已完全翻译为中文
- **服务器稳定性**: 解决了内容集合schema验证错误，服务器运行稳定

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
