---
title: 'Markdown 样式指南'
description: '这里有一些在 Astro 中编写 Markdown 内容时可以使用的基本 Markdown 语法示例。'
pubDate: '2024-06-19'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

这里有一些在 Astro 中编写 Markdown 内容时可以使用的基本 Markdown 语法示例。

## 标题

以下 HTML `<h1>`—`<h6>` 元素代表六个级别的章节标题。`<h1>` 是最高级别的章节标题，而 `<h6>` 是最低级别。

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 段落

在这个数字化的时代，知识的传播速度越来越快。作为一名技术爱好者，我深深地相信，通过分享和交流，我们能够让彼此的世界变得更加丰富多彩。每一个想法都值得被倾听，每一个经验都值得被传承。

无论是在编程的世界里探索新的可能性，还是在生活的舞台上寻找属于自己的节奏，我们都需要保持学习的心态，用开放的心胸去接纳新的知识和观点。

## 图片

### 语法

```markdown
![替代文本](./完整或相对路径/图片)
```

### 效果

![blog placeholder](../../assets/blog-placeholder-about.jpg)

## 引用块

引用块元素代表从其他来源引用的内容，可选择包含引文（必须在 `footer` 或 `cite` 元素内），以及可选的内联更改，如注释和缩写。

### 无引文来源的引用

#### 语法

```markdown
> 智慧不在于知道所有答案，而在于知道如何提出正确的问题。  
> **注意**：在引用块中你可以使用 _Markdown 语法_。
```

#### 效果

> 智慧不在于知道所有答案，而在于知道如何提出正确的问题。  
> **注意**：在引用块中你可以使用 _Markdown 语法_。

### 有引文来源的引用

#### 语法

```markdown
> 不要通过共享内存来通信，通过通信来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>
```

#### 效果

> 不要通过共享内存来通信，通过通信来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上面这句话摘自 Rob Pike 在 2015年11月18日 Gopherfest 上的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格

### 语法

```markdown
| 斜体     | 粗体     | 代码     |
| -------- | -------- | -------- |
| _斜体_   | **粗体** | `代码`   |
```

### 效果

| 斜体     | 粗体     | 代码     |
| -------- | -------- | -------- |
| _斜体_   | **粗体** | `代码`   |

## 代码块

### 语法

我们可以使用三个反引号 ``` 在新行中编写代码片段，用三个反引号关闭。为了突出显示特定语言的语法，在前三个反引号后写上语言名称，例如：html、javascript、css、markdown、typescript、txt、bash

````markdown
```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>示例 HTML5 文档</title>
  </head>
  <body>
    <p>测试</p>
  </body>
</html>
```
````

### 效果

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>示例 HTML5 文档</title>
  </head>
  <body>
    <p>测试</p>
  </body>
</html>
```

## 列表类型

### 有序列表

#### 语法

```markdown
1. 第一项
2. 第二项
3. 第三项
```

#### 效果

1. 第一项
2. 第二项
3. 第三项

### 无序列表

#### 语法

```markdown
- 列表项
- 另一个项
- 还有一个项
```

#### 效果

- 列表项
- 另一个项
- 还有一个项

### 嵌套列表

#### 语法

```markdown
- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪
```

#### 效果

- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪

## 其他元素 — abbr、sub、sup、kbd、mark

### 语法

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> 结束会话。

大多数<mark>蝾螈</mark>都是夜行性的，它们捕食昆虫、蠕虫和其他小型生物。
```

### 效果

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> 结束会话。

大多数<mark>蝾螈</mark>都是夜行性的，它们捕食昆虫、蠕虫和其他小型生物。
