import type { Topic } from '~/types'

export const topics: Topic[] = [
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: '现代化的工具类优先 CSS 框架，快速构建自定义用户界面',
    category: 'tailwind',
    icon: 'simple-icons:tailwindcss',
    color: 'cyan',
    difficulty: 'beginner',
    duration: '30天',
    tags: ['CSS', '工具类', '响应式', '现代化']
  },
  {
    id: 'vue',
    title: 'Vue.js',
    description: '渐进式 JavaScript 框架，用于构建用户界面',
    category: 'vue',
    icon: 'simple-icons:vuedotjs',
    color: 'green',
    difficulty: 'intermediate',
    duration: '45天',
    tags: ['框架', '响应式', '组件化', 'MVVM']
  },
  {
    id: 'react',
    title: 'React',
    description: 'Facebook 出品的声明式、组件化 UI 库',
    category: 'react',
    icon: 'simple-icons:react',
    color: 'blue',
    difficulty: 'intermediate',
    duration: '45天',
    tags: ['库', 'JSX', '虚拟DOM', '单向数据流']
  },
  {
    id: 'angular',
    title: 'Angular',
    description: 'Google 维护的全功能企业级前端框架',
    category: 'angular',
    icon: 'simple-icons:angular',
    color: 'red',
    difficulty: 'advanced',
    duration: '60天',
    tags: ['框架', 'TypeScript', '依赖注入', 'RxJS']
  },
  {
    id: 'rxjs',
    title: 'RxJS',
    description: '响应式编程库，使用可观察序列处理异步数据',
    category: 'rxjs',
    icon: 'simple-icons:reactivex',
    color: 'pink',
    difficulty: 'advanced',
    duration: '30天',
    tags: ['响应式', 'Observable', '函数式', '异步']
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'JavaScript 的超集，添加了类型系统和更强大的工具',
    category: 'typescript',
    icon: 'simple-icons:typescript',
    color: 'blue',
    difficulty: 'intermediate',
    duration: '21天',
    tags: ['类型', '编译', 'OOP', '工具']
  }
]

export const topicColors: Record<string, { bg: string; text: string; border: string }> = {
  tailwind: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-500',
    border: 'border-cyan-500/30'
  },
  vue: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-500',
    border: 'border-emerald-500/30'
  },
  react: {
    bg: 'bg-sky-500/10',
    text: 'text-sky-500',
    border: 'border-sky-500/30'
  },
  angular: {
    bg: 'bg-red-500/10',
    text: 'text-red-500',
    border: 'border-red-500/30'
  },
  rxjs: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-500',
    border: 'border-pink-500/30'
  },
  typescript: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
    border: 'border-blue-500/30'
  }
}

// Hero theme colors
export const heroTopicColors: Record<string, { bg: string; text: string; border: string }> = {
  tailwind: {
    bg: 'bg-hero-magic/10',
    text: 'text-hero-magic',
    border: 'border-hero-magic/30'
  },
  vue: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30'
  },
  react: {
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    border: 'border-sky-500/30'
  },
  angular: {
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    border: 'border-red-500/30'
  },
  rxjs: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    border: 'border-pink-500/30'
  },
  typescript: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/30'
  }
}
