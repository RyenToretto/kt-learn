import type { Stage, Day, LearningPoint } from '~/types'

// Tailwind CSS 学习路径 - 阶段定义
export const tailwindStages: Stage[] = [
  {
    id: 'tw-stage-1',
    stageNumber: 1,
    title: '基础入门',
    description: '了解 Tailwind CSS 的核心概念，掌握基本的工具类使用方法',
    color: 'emerald',
    icon: 'heroicons:academic-cap-20-solid',
    days: ['tw-day-1', 'tw-day-2', 'tw-day-3', 'tw-day-4', 'tw-day-5'],
    objectives: [
      '理解 Utility-First 理念',
      '掌握核心布局类',
      '学会响应式设计基础',
      '配置开发环境'
    ],
    prerequisites: ['HTML 基础', 'CSS 基础知识']
  },
  {
    id: 'tw-stage-2',
    stageNumber: 2,
    title: '布局与间距',
    description: '深入学习 Flexbox、Grid 布局系统，掌握间距和定位技巧',
    color: 'blue',
    icon: 'heroicons:squares-2x2-20-solid',
    days: ['tw-day-6', 'tw-day-7', 'tw-day-8', 'tw-day-9', 'tw-day-10'],
    objectives: [
      '精通 Flex 布局',
      '掌握 Grid 系统',
      '理解间距系统',
      '学会复杂定位'
    ],
    prerequisites: ['完成阶段一']
  },
  {
    id: 'tw-stage-3',
    stageNumber: 3,
    title: '视觉样式',
    description: '学习颜色、字体、阴影、边框等视觉属性的使用技巧',
    color: 'purple',
    icon: 'heroicons:paint-brush-20-solid',
    days: ['tw-day-11', 'tw-day-12', 'tw-day-13', 'tw-day-14', 'tw-day-15'],
    objectives: [
      '掌握颜色系统',
      '理解字体排版',
      '学会阴影和效果',
      '边框和圆角技巧'
    ],
    prerequisites: ['完成阶段二']
  },
  {
    id: 'tw-stage-4',
    stageNumber: 4,
    title: '交互与动画',
    description: '掌握过渡动画、状态变体、交互效果的实现方法',
    color: 'orange',
    icon: 'heroicons:cursor-arrow-rays-20-solid',
    days: ['tw-day-16', 'tw-day-17', 'tw-day-18', 'tw-day-19', 'tw-day-20'],
    objectives: [
      '实现平滑过渡',
      '创建自定义动画',
      '掌握状态变体',
      '交互反馈设计'
    ],
    prerequisites: ['完成阶段三']
  },
  {
    id: 'tw-stage-5',
    stageNumber: 5,
    title: '高级技巧',
    description: '学习自定义配置、插件开发、组件封装等高级内容',
    color: 'rose',
    icon: 'heroicons:rocket-launch-20-solid',
    days: ['tw-day-21', 'tw-day-22', 'tw-day-23', 'tw-day-24', 'tw-day-25'],
    objectives: [
      '自定义配置',
      '创建插件',
      '组件化封装',
      '性能优化'
    ],
    prerequisites: ['完成阶段四']
  },
  {
    id: 'tw-stage-6',
    stageNumber: 6,
    title: '实战项目',
    description: '通过综合项目实践，巩固所学知识并提升实战能力',
    color: 'amber',
    icon: 'heroicons:trophy-20-solid',
    days: ['tw-day-26', 'tw-day-27', 'tw-day-28', 'tw-day-29', 'tw-day-30'],
    objectives: [
      '完成多个实战组件',
      '构建完整页面',
      '响应式最佳实践',
      '代码复用技巧'
    ],
    prerequisites: ['完成阶段五']
  }
]

// 每日学习内容
export const tailwindDays: Day[] = [
  // Stage 1: 基础入门
  {
    id: 'tw-day-1',
    stageId: 'tw-stage-1',
    dayNumber: 1,
    title: 'Tailwind 初识与环境搭建',
    description: '了解 Tailwind CSS 的设计理念，完成开发环境配置',
    objectives: [
      '理解 Utility-First CSS 理念',
      '安装和配置 Tailwind CSS',
      '编写第一个 Tailwind 样式'
    ],
    learningPoints: ['tw-lp-1-1', 'tw-lp-1-2', 'tw-lp-1-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-2',
    stageId: 'tw-stage-1',
    dayNumber: 2,
    title: '尺寸与间距基础',
    description: '学习 width、height、padding、margin 等基础尺寸类',
    objectives: [
      '掌握尺寸单位系统',
      '理解间距比例关系',
      '学会使用 space 和 gap'
    ],
    learningPoints: ['tw-lp-2-1', 'tw-lp-2-2', 'tw-lp-2-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-3',
    stageId: 'tw-stage-1',
    dayNumber: 3,
    title: '文本与排版',
    description: '掌握字体大小、粗细、颜色、对齐等文本样式',
    objectives: [
      '熟练使用文本类',
      '掌握字体样式控制',
      '学会文本装饰效果'
    ],
    learningPoints: ['tw-lp-3-1', 'tw-lp-3-2', 'tw-lp-3-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-4',
    stageId: 'tw-stage-1',
    dayNumber: 4,
    title: '颜色系统入门',
    description: '了解 Tailwind 的颜色调色板和使用方法',
    objectives: [
      '理解颜色命名规则',
      '掌握背景和文本颜色',
      '学会透明度调整'
    ],
    learningPoints: ['tw-lp-4-1', 'tw-lp-4-2', 'tw-lp-4-3'],
    estimatedTime: '1.5小时'
  },
  {
    id: 'tw-day-5',
    stageId: 'tw-stage-1',
    dayNumber: 5,
    title: '响应式设计基础',
    description: '学习断点系统和响应式类的使用',
    objectives: [
      '理解移动优先策略',
      '掌握断点前缀用法',
      '实现简单响应式布局'
    ],
    learningPoints: ['tw-lp-5-1', 'tw-lp-5-2', 'tw-lp-5-3'],
    estimatedTime: '2小时'
  },
  // Stage 2: 布局与间距
  {
    id: 'tw-day-6',
    stageId: 'tw-stage-2',
    dayNumber: 6,
    title: 'Flexbox 布局精讲',
    description: '深入学习 Flex 容器和项目的各种属性',
    objectives: [
      '掌握 flex 容器属性',
      '理解项目对齐方式',
      '学会 flex-grow/shrink'
    ],
    learningPoints: ['tw-lp-6-1', 'tw-lp-6-2', 'tw-lp-6-3'],
    estimatedTime: '2.5小时'
  },
  {
    id: 'tw-day-7',
    stageId: 'tw-stage-2',
    dayNumber: 7,
    title: 'Grid 布局系统',
    description: '学习 CSS Grid 在 Tailwind 中的实现',
    objectives: [
      '创建网格容器',
      '定义行列模板',
      '掌握网格区域'
    ],
    learningPoints: ['tw-lp-7-1', 'tw-lp-7-2', 'tw-lp-7-3'],
    estimatedTime: '2.5小时'
  },
  {
    id: 'tw-day-8',
    stageId: 'tw-stage-2',
    dayNumber: 8,
    title: '定位与层级',
    description: '掌握 position、z-index 等定位相关属性',
    objectives: [
      '理解定位类型',
      '使用 inset 系列',
      '控制层叠顺序'
    ],
    learningPoints: ['tw-lp-8-1', 'tw-lp-8-2', 'tw-lp-8-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-9',
    stageId: 'tw-stage-2',
    dayNumber: 9,
    title: '溢出与滚动',
    description: '学习 overflow、scroll 相关的样式控制',
    objectives: [
      '控制内容溢出',
      '自定义滚动条',
      '实现滚动容器'
    ],
    learningPoints: ['tw-lp-9-1', 'tw-lp-9-2', 'tw-lp-9-3'],
    estimatedTime: '1.5小时'
  },
  {
    id: 'tw-day-10',
    stageId: 'tw-stage-2',
    dayNumber: 10,
    title: '容器与包裹',
    description: '学习 container 和常用布局包裹技巧',
    objectives: [
      '使用 container 类',
      '理解 max-width 系统',
      '居中布局技巧'
    ],
    learningPoints: ['tw-lp-10-1', 'tw-lp-10-2', 'tw-lp-10-3'],
    estimatedTime: '1.5小时'
  },
  // Stage 3: 视觉样式
  {
    id: 'tw-day-11',
    stageId: 'tw-stage-3',
    dayNumber: 11,
    title: '背景样式进阶',
    description: '深入学习背景颜色、渐变、图片等样式',
    objectives: [
      '创建渐变背景',
      '控制背景图片',
      '背景混合效果'
    ],
    learningPoints: ['tw-lp-11-1', 'tw-lp-11-2', 'tw-lp-11-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-12',
    stageId: 'tw-stage-3',
    dayNumber: 12,
    title: '边框与圆角',
    description: '掌握边框样式、宽度、颜色和圆角技巧',
    objectives: [
      '设置边框样式',
      '控制圆角大小',
      '分割线设计'
    ],
    learningPoints: ['tw-lp-12-1', 'tw-lp-12-2', 'tw-lp-12-3'],
    estimatedTime: '1.5小时'
  },
  {
    id: 'tw-day-13',
    stageId: 'tw-stage-3',
    dayNumber: 13,
    title: '阴影与效果',
    description: '学习 box-shadow、opacity、blur 等视觉效果',
    objectives: [
      '应用盒阴影',
      '控制透明度',
      '模糊滤镜效果'
    ],
    learningPoints: ['tw-lp-13-1', 'tw-lp-13-2', 'tw-lp-13-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-14',
    stageId: 'tw-stage-3',
    dayNumber: 14,
    title: '变换与透视',
    description: '掌握 transform 相关的变换效果',
    objectives: [
      '使用 rotate/scale',
      'translate 位移',
      'skew 倾斜效果'
    ],
    learningPoints: ['tw-lp-14-1', 'tw-lp-14-2', 'tw-lp-14-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-15',
    stageId: 'tw-stage-3',
    dayNumber: 15,
    title: '滤镜与混合',
    description: '学习 filter、backdrop-filter 和混合模式',
    objectives: [
      '使用滤镜效果',
      '背景滤镜技巧',
      '混合模式应用'
    ],
    learningPoints: ['tw-lp-15-1', 'tw-lp-15-2', 'tw-lp-15-3'],
    estimatedTime: '2小时'
  },
  // Stage 4: 交互与动画
  {
    id: 'tw-day-16',
    stageId: 'tw-stage-4',
    dayNumber: 16,
    title: '过渡效果',
    description: '学习 transition 相关属性实现平滑动画',
    objectives: [
      '设置过渡属性',
      '控制过渡时间',
      '缓动函数选择'
    ],
    learningPoints: ['tw-lp-16-1', 'tw-lp-16-2', 'tw-lp-16-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-17',
    stageId: 'tw-stage-4',
    dayNumber: 17,
    title: 'CSS 动画',
    description: '掌握内置动画和自定义 keyframes',
    objectives: [
      '使用内置动画',
      '自定义关键帧',
      '动画组合技巧'
    ],
    learningPoints: ['tw-lp-17-1', 'tw-lp-17-2', 'tw-lp-17-3'],
    estimatedTime: '2.5小时'
  },
  {
    id: 'tw-day-18',
    stageId: 'tw-stage-4',
    dayNumber: 18,
    title: '状态变体',
    description: '深入学习 hover、focus、active 等状态',
    objectives: [
      '悬停效果设计',
      '焦点状态样式',
      '激活状态反馈'
    ],
    learningPoints: ['tw-lp-18-1', 'tw-lp-18-2', 'tw-lp-18-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-19',
    stageId: 'tw-stage-4',
    dayNumber: 19,
    title: '组合状态',
    description: '学习 group、peer 等高级状态选择器',
    objectives: [
      '使用 group-hover',
      '掌握 peer 用法',
      '复杂状态组合'
    ],
    learningPoints: ['tw-lp-19-1', 'tw-lp-19-2', 'tw-lp-19-3'],
    estimatedTime: '2.5小时'
  },
  {
    id: 'tw-day-20',
    stageId: 'tw-stage-4',
    dayNumber: 20,
    title: '暗色模式',
    description: '实现完整的暗色模式切换功能',
    objectives: [
      '配置暗色模式',
      '设计暗色配色',
      '平滑切换效果'
    ],
    learningPoints: ['tw-lp-20-1', 'tw-lp-20-2', 'tw-lp-20-3'],
    estimatedTime: '2小时'
  },
  // Stage 5: 高级技巧
  {
    id: 'tw-day-21',
    stageId: 'tw-stage-5',
    dayNumber: 21,
    title: '自定义配置',
    description: '深入 tailwind.config.js 配置文件',
    objectives: [
      '扩展主题配置',
      '自定义颜色',
      '添加新尺寸'
    ],
    learningPoints: ['tw-lp-21-1', 'tw-lp-21-2', 'tw-lp-21-3'],
    estimatedTime: '2.5小时'
  },
  {
    id: 'tw-day-22',
    stageId: 'tw-stage-5',
    dayNumber: 22,
    title: '自定义工具类',
    description: '学习使用 @layer 和 @apply 创建自定义类',
    objectives: [
      '理解 @layer',
      '使用 @apply',
      '创建组件类'
    ],
    learningPoints: ['tw-lp-22-1', 'tw-lp-22-2', 'tw-lp-22-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-23',
    stageId: 'tw-stage-5',
    dayNumber: 23,
    title: '插件开发',
    description: '学习编写 Tailwind CSS 插件',
    objectives: [
      '插件结构',
      '添加工具类',
      '动态变体'
    ],
    learningPoints: ['tw-lp-23-1', 'tw-lp-23-2', 'tw-lp-23-3'],
    estimatedTime: '3小时'
  },
  {
    id: 'tw-day-24',
    stageId: 'tw-stage-5',
    dayNumber: 24,
    title: '性能优化',
    description: '学习 PurgeCSS 和生产环境优化',
    objectives: [
      '内容配置',
      '安全列表',
      '压缩策略'
    ],
    learningPoints: ['tw-lp-24-1', 'tw-lp-24-2', 'tw-lp-24-3'],
    estimatedTime: '2小时'
  },
  {
    id: 'tw-day-25',
    stageId: 'tw-stage-5',
    dayNumber: 25,
    title: 'JIT 引擎与任意值',
    description: '掌握 JIT 模式和任意值语法',
    objectives: [
      '理解 JIT 模式',
      '使用任意值',
      'CSS 变量集成'
    ],
    learningPoints: ['tw-lp-25-1', 'tw-lp-25-2', 'tw-lp-25-3'],
    estimatedTime: '2小时'
  },
  // Stage 6: 实战项目
  {
    id: 'tw-day-26',
    stageId: 'tw-stage-6',
    dayNumber: 26,
    title: '组件实战：按钮系统',
    description: '设计和实现完整的按钮组件系统',
    objectives: [
      '按钮变体设计',
      '尺寸系统',
      '状态样式'
    ],
    learningPoints: ['tw-lp-26-1', 'tw-lp-26-2', 'tw-lp-26-3'],
    estimatedTime: '3小时'
  },
  {
    id: 'tw-day-27',
    stageId: 'tw-stage-6',
    dayNumber: 27,
    title: '组件实战：表单设计',
    description: '构建完整的表单组件库',
    objectives: [
      '输入框样式',
      '选择器设计',
      '表单验证UI'
    ],
    learningPoints: ['tw-lp-27-1', 'tw-lp-27-2', 'tw-lp-27-3'],
    estimatedTime: '3小时'
  },
  {
    id: 'tw-day-28',
    stageId: 'tw-stage-6',
    dayNumber: 28,
    title: '组件实战：卡片与列表',
    description: '设计各种卡片和列表布局',
    objectives: [
      '卡片变体',
      '列表样式',
      '响应式设计'
    ],
    learningPoints: ['tw-lp-28-1', 'tw-lp-28-2', 'tw-lp-28-3'],
    estimatedTime: '2.5小时'
  },
  {
    id: 'tw-day-29',
    stageId: 'tw-stage-6',
    dayNumber: 29,
    title: '页面实战：Landing Page',
    description: '构建完整的落地页面',
    objectives: [
      'Hero 区域',
      '功能展示',
      'CTA 设计'
    ],
    learningPoints: ['tw-lp-29-1', 'tw-lp-29-2', 'tw-lp-29-3'],
    estimatedTime: '4小时'
  },
  {
    id: 'tw-day-30',
    stageId: 'tw-stage-6',
    dayNumber: 30,
    title: '页面实战：Dashboard',
    description: '构建数据仪表盘界面',
    objectives: [
      '布局系统',
      '数据卡片',
      '图表容器'
    ],
    learningPoints: ['tw-lp-30-1', 'tw-lp-30-2', 'tw-lp-30-3'],
    estimatedTime: '4小时'
  }
]

// 部分示例知识点内容
export const tailwindLearningPoints: LearningPoint[] = [
  {
    id: 'tw-lp-1-1',
    topicId: 'tailwind',
    dayId: 'tw-day-1',
    title: '什么是 Utility-First CSS',
    description: '理解 Tailwind CSS 的核心设计理念',
    content: `
# Utility-First CSS 理念

Tailwind CSS 采用 **Utility-First**（工具类优先）的设计理念，这与传统的语义化 CSS 有本质区别。

## 传统 CSS 方式

\`\`\`css
/* 需要为每个组件编写语义化类名 */
.chat-notification {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
\`\`\`

## Tailwind 方式

\`\`\`html
<!-- 直接在 HTML 中使用工具类 -->
<div class="flex items-center p-4 bg-white rounded-lg shadow-md">
  <!-- 内容 -->
</div>
\`\`\`

## 核心优势

1. **无需命名困扰** - 不用再纠结类名
2. **CSS 体积可控** - 不会无限增长
3. **安全的修改** - 改样式不影响其他组件
4. **快速开发** - 边写 HTML 边写样式
    `,
    codeExamples: [
      {
        id: 'ex-1-1-1',
        title: 'Utility-First 示例',
        language: 'html',
        code: `<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/example.jpg" alt="">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">案例研究</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        探索 Tailwind CSS
      </a>
      <p class="mt-2 text-slate-500">
        学习如何使用工具类构建现代化的响应式界面。
      </p>
    </div>
  </div>
</div>`,
        preview: true
      }
    ],
    tips: [
      '刚开始使用时类名会很长，但很快就会熟悉常用的工具类',
      '使用编辑器的 Tailwind IntelliSense 插件可以大大提高效率',
      '不用担心重复 - 通过组件化可以很好地复用样式'
    ],
    references: [
      {
        title: 'Tailwind CSS 官方文档',
        url: 'https://tailwindcss.com/docs/utility-first',
        type: 'docs'
      }
    ]
  },
  {
    id: 'tw-lp-1-2',
    topicId: 'tailwind',
    dayId: 'tw-day-1',
    title: '安装与配置',
    description: '在项目中安装和配置 Tailwind CSS',
    content: `
# 安装 Tailwind CSS

## 使用 npm 安装

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## 配置 tailwind.config.js

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## 添加 Tailwind 指令

在你的 CSS 文件中添加：

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`
    `,
    codeExamples: [
      {
        id: 'ex-1-2-1',
        title: 'Vue 项目配置',
        language: 'javascript',
        code: `// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
})`
      }
    ],
    tips: [
      '确保 content 配置包含所有使用 Tailwind 类的文件',
      '使用 -p 参数会同时创建 postcss.config.js',
      '推荐使用 VS Code 的 Tailwind CSS IntelliSense 扩展'
    ],
    references: [
      {
        title: '安装指南',
        url: 'https://tailwindcss.com/docs/installation',
        type: 'docs'
      }
    ]
  },
  {
    id: 'tw-lp-1-3',
    topicId: 'tailwind',
    dayId: 'tw-day-1',
    title: '编写第一个样式',
    description: '使用 Tailwind 工具类编写基础样式',
    content: `
# 第一个 Tailwind 样式

让我们从最基础的工具类开始。

## 背景颜色

\`\`\`html
<div class="bg-blue-500">蓝色背景</div>
<div class="bg-red-500">红色背景</div>
<div class="bg-green-500">绿色背景</div>
\`\`\`

## 内边距

\`\`\`html
<div class="p-4">四周 16px 内边距</div>
<div class="px-4">左右 16px 内边距</div>
<div class="py-2">上下 8px 内边距</div>
\`\`\`

## 文本样式

\`\`\`html
<p class="text-lg font-bold text-gray-800">大号加粗文本</p>
<p class="text-sm text-gray-500">小号灰色文本</p>
\`\`\`

## 组合使用

\`\`\`html
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  点击我
</button>
\`\`\`
    `,
    codeExamples: [
      {
        id: 'ex-1-3-1',
        title: '简单按钮',
        language: 'html',
        code: `<button class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg 
  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
  transition-colors duration-200">
  开始学习
</button>`,
        preview: true
      }
    ],
    tips: [
      '工具类可以自由组合，顺序不影响效果',
      '使用数字后缀控制大小：text-sm、text-lg、text-xl',
      '颜色使用 色名-深度 格式：blue-500、gray-100'
    ],
    references: [
      {
        title: '核心概念',
        url: 'https://tailwindcss.com/docs/utility-first',
        type: 'docs'
      }
    ]
  }
]

export const tailwindRoadmap = {
  id: 'tailwind-30days',
  title: '30天掌握 Tailwind CSS',
  description: '从零开始，系统学习 Tailwind CSS，30天成为 Tailwind 专家',
  category: 'tailwind' as const,
  stages: tailwindStages.map(s => s.id),
  totalDays: 30,
  totalHours: 60
}
