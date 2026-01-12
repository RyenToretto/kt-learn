// 学习路径相关类型
export interface Topic {
  id: string
  title: string
  description: string
  category: 'tailwind' | 'vue' | 'react' | 'angular' | 'rxjs' | 'typescript' | 'css' | 'html' | 'javascript'
  icon: string
  color: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string // 预计学习时长
  tags: string[]
}

export interface LearningPoint {
  id: string
  topicId: string
  dayId: string
  title: string
  description: string
  content: string // Markdown 内容
  codeExamples: CodeExample[]
  tips: string[]
  references: Reference[]
  completed?: boolean
}

export interface CodeExample {
  id: string
  title: string
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'vue' | 'jsx' | 'tsx'
  code: string
  preview?: boolean // 是否支持预览
}

export interface Reference {
  title: string
  url: string
  type: 'docs' | 'article' | 'video' | 'github'
}

export interface Day {
  id: string
  stageId: string
  dayNumber: number
  title: string
  description: string
  objectives: string[]
  learningPoints: string[] // LearningPoint IDs
  estimatedTime: string
  completed?: boolean
}

export interface Stage {
  id: string
  stageNumber: number
  title: string
  description: string
  color: string
  icon: string
  days: string[] // Day IDs
  objectives: string[]
  prerequisites: string[]
}

export interface Roadmap {
  id: string
  title: string
  description: string
  category: Topic['category']
  stages: string[] // Stage IDs
  totalDays: number
  totalHours: number
}

// 用户进度相关
export interface UserProgress {
  completedPoints: string[]
  completedDays: string[]
  currentDayId: string
  streak: number
  totalStudyMinutes: number
  lastStudyDate: string
}

// 打赏相关
export interface PaymentCode {
  type: 'wechat' | 'alipay'
  imageUrl: string
  label: string
}

// 通用UI类型
export interface NavItem {
  path: string
  label: string
  icon: string
}

export interface ThemeOption {
  value: 'light' | 'dark' | 'hero'
  label: string
  icon: string
}
