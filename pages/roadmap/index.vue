<script setup lang="ts">
import { topics } from '~/data/topics'
import { tailwindRoadmap, tailwindStages } from '~/data/roadmaps/tailwind'

const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

const roadmaps = computed(() => [
  {
    ...tailwindRoadmap,
    topic: topics.find(t => t.id === 'tailwind'),
    stages: tailwindStages
  }
])
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
          学习路径
        </h1>
        <p class="text-theme-secondary max-w-2xl mx-auto text-lg">
          系统化的前端技术学习路径，带你从入门到精通
        </p>
      </div>

      <!-- Roadmaps List -->
      <div class="space-y-8">
        <div 
          v-for="roadmap in roadmaps"
          :key="roadmap.id"
          class="card overflow-hidden"
          :class="isHero ? 'hero-corner' : ''"
        >
          <!-- Roadmap Header -->
          <div 
            class="p-6 md:p-8 border-b border-theme"
            :class="isHero ? 'hero-decoration' : ''"
          >
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div 
                class="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                :class="isHero 
                  ? 'bg-hero-gold/20 border border-hero-gold/30' 
                  : 'bg-cyan-500/10'"
              >
                <Icon 
                  :name="roadmap.topic?.icon || 'heroicons:academic-cap-20-solid'" 
                  class="w-8 h-8"
                  :class="isHero ? 'text-hero-magic' : 'text-cyan-500'"
                />
              </div>
              
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <h2 
                    class="text-2xl md:text-3xl font-bold"
                    :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
                  >
                    {{ roadmap.title }}
                  </h2>
                  <span 
                    class="badge"
                    :class="isHero ? 'badge-secondary' : 'badge-primary'"
                  >
                    {{ roadmap.totalDays }}天
                  </span>
                </div>
                <p class="text-theme-secondary">
                  {{ roadmap.description }}
                </p>
              </div>
              
              <NuxtLink 
                :to="`/roadmap/${roadmap.category}`"
                class="btn btn-primary shrink-0"
              >
                <Icon name="heroicons:play-20-solid" class="w-5 h-5" />
                开始学习
              </NuxtLink>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-theme">
              <div>
                <div 
                  class="text-2xl font-bold"
                  :class="isHero ? 'text-hero-gold' : 'text-accent'"
                >
                  {{ roadmap.stages.length }}
                </div>
                <div class="text-sm text-theme-muted">个阶段</div>
              </div>
              <div>
                <div 
                  class="text-2xl font-bold"
                  :class="isHero ? 'text-hero-gold' : 'text-accent'"
                >
                  {{ roadmap.totalDays }}
                </div>
                <div class="text-sm text-theme-muted">天课程</div>
              </div>
              <div>
                <div 
                  class="text-2xl font-bold"
                  :class="isHero ? 'text-hero-gold' : 'text-accent'"
                >
                  {{ roadmap.totalHours }}+
                </div>
                <div class="text-sm text-theme-muted">小时内容</div>
              </div>
            </div>
          </div>
          
          <!-- Stages Preview -->
          <div class="p-6 md:p-8">
            <h3 class="font-semibold text-theme mb-4">课程大纲</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <NuxtLink
                v-for="stage in roadmap.stages"
                :key="stage.id"
                :to="`/roadmap/${roadmap.category}/stage-${stage.stageNumber}`"
                class="p-4 rounded-xl border border-theme hover:border-accent transition-all duration-200 group"
                :class="isHero ? 'hover:border-hero-gold' : ''"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div 
                    class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                    :class="isHero 
                      ? 'bg-hero-gold/20 text-hero-gold' 
                      : 'bg-accent/10 text-accent'"
                  >
                    {{ stage.stageNumber }}
                  </div>
                  <span class="font-medium text-theme group-hover:text-accent transition-colors">
                    {{ stage.title }}
                  </span>
                </div>
                <p class="text-sm text-theme-muted line-clamp-2">
                  {{ stage.description }}
                </p>
                <div class="flex items-center gap-2 mt-3 text-xs text-theme-muted">
                  <Icon name="heroicons:calendar-days-16-solid" class="w-4 h-4" />
                  <span>{{ stage.days.length }} 天</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Coming Soon -->
      <div class="mt-12">
        <h2 
          class="text-2xl font-bold mb-6 text-center"
          :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
        >
          即将推出
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="topic in topics.filter(t => t.id !== 'tailwind')"
            :key="topic.id"
            class="card p-6 opacity-70"
          >
            <div class="flex items-center gap-4 mb-4">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center"
                :class="isHero ? 'bg-hero-bg-tertiary' : `bg-${topic.color}-500/10`"
              >
                <Icon 
                  :name="topic.icon" 
                  class="w-6 h-6"
                  :class="isHero ? 'text-hero-text-muted' : `text-${topic.color}-500`"
                />
              </div>
              <div>
                <h3 class="font-semibold text-theme">{{ topic.title }}</h3>
                <p class="text-sm text-theme-muted">{{ topic.duration }}</p>
              </div>
            </div>
            <div 
              class="text-center py-2 rounded-lg text-sm"
              :class="isHero ? 'bg-hero-bg-tertiary text-hero-text-muted' : 'bg-theme-tertiary text-theme-muted'"
            >
              敬请期待
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
