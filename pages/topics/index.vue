<script setup lang="ts">
import { topics, topicColors, heroTopicColors } from '~/data/topics'

const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

const difficultyLabels: Record<string, { label: string; color: string }> = {
  beginner: { label: '入门', color: 'green' },
  intermediate: { label: '中级', color: 'yellow' },
  advanced: { label: '高级', color: 'red' }
}

const getTopicColors = (topicId: string) => {
  return isHero.value ? heroTopicColors[topicId] : topicColors[topicId]
}
</script>

<template>
  <div class="min-h-screen py-8 md:py-12">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 
          class="text-3xl md:text-5xl font-bold mb-4"
          :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
        >
          知识专题
        </h1>
        <p class="text-theme-secondary max-w-2xl mx-auto text-lg">
          深入学习各种前端技术，每个专题都配有系统化的学习路径
        </p>
      </div>

      <!-- Topics Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="topic in topics"
          :key="topic.id"
          :to="topic.id === 'tailwind' ? '/roadmap/tailwind' : '#'"
          class="card p-6 group hover:scale-[1.02] transition-all duration-300 stagger-item"
          :class="[
            isHero ? 'hero-border' : '',
            topic.id !== 'tailwind' ? 'opacity-70 pointer-events-none' : ''
          ]"
        >
          <!-- Topic Icon -->
          <div 
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            :class="getTopicColors(topic.id)?.bg"
          >
            <Icon 
              :name="topic.icon" 
              class="w-8 h-8"
              :class="getTopicColors(topic.id)?.text"
            />
          </div>
          
          <!-- Topic Info -->
          <div class="mb-4">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-theme group-hover:text-accent transition-colors">
                {{ topic.title }}
              </h3>
              <span 
                v-if="topic.id !== 'tailwind'"
                class="text-xs px-2 py-0.5 rounded bg-theme-tertiary text-theme-muted"
              >
                即将推出
              </span>
            </div>
            <p class="text-theme-secondary text-sm line-clamp-2">
              {{ topic.description }}
            </p>
          </div>
          
          <!-- Meta -->
          <div class="flex items-center gap-4 text-sm">
            <span 
              class="px-2 py-0.5 rounded"
              :class="`bg-${difficultyLabels[topic.difficulty].color}-500/10 text-${difficultyLabels[topic.difficulty].color}-500`"
            >
              {{ difficultyLabels[topic.difficulty].label }}
            </span>
            <span class="flex items-center gap-1 text-theme-muted">
              <Icon name="heroicons:clock-16-solid" class="w-4 h-4" />
              {{ topic.duration }}
            </span>
          </div>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-theme">
            <span 
              v-for="tag in topic.tags.slice(0, 4)"
              :key="tag"
              class="text-xs px-2 py-1 rounded-full bg-theme-tertiary/50 text-theme-muted"
            >
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Request Section -->
      <div class="mt-16">
        <div 
          class="card p-8 text-center"
          :class="isHero ? 'hero-decoration' : ''"
        >
          <Icon 
            name="heroicons:light-bulb-20-solid" 
            class="w-12 h-12 mx-auto mb-4"
            :class="isHero ? 'text-hero-gold' : 'text-accent'"
          />
          <h2 
            class="text-xl font-bold mb-3"
            :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
          >
            想学习其他技术？
          </h2>
          <p class="text-theme-secondary mb-6 max-w-lg mx-auto">
            我们正在努力制作更多高质量的学习内容。如果你有想学习的技术，欢迎告诉我们！
          </p>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary inline-flex"
          >
            <Icon name="mdi:github" class="w-5 h-5" />
            提交建议
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
