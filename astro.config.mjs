// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeMathjax from 'rehype-mathjax';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://EricJiang1329145.github.io/blog',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkMath, remarkGfm],
		rehypePlugins: [[rehypeMathjax, {
			// 配置MathJax选项以获得更好的渲染质量
			scale: 1.1, // 增加公式大小
			em: 16, // 基础字体大小
			ex: 8, // ex单位大小
			containerWidth: 80, // 容器宽度
			// 显示选项
			displayAlign: 'center', // 居中显示
			displayIndent: '0', // 缩进
			// 字体选项
			fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-fonts',
		}]],
	},
});
