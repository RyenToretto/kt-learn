<script setup lang="ts">
import { tailwindStages, tailwindDays, tailwindRoadmap } from '~/data/roadmaps/tailwind'
import { topics } from '~/data/topics'

const route = useRoute()
const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

const topicId = computed(() => route.params.topic as string)

const topic = computed(() => topics.find(t => t.id === topicId.value))
const roadmap = computed(() => topicId.value === 'tailwind' ? tailwindRoadmap : null)
const stages = computed(() => topicId.value === 'tailwind' ? tailwindStages : [])
const days = computed(() => topicId.value === 'tailwind' ? tailwindDays : [])

// Group days by stage
const stageWithDays = computed(() => 
  stages.value.map(stage => ({
    ...stage,
    daysList: days.value.filter(d => stage.days.includes(d.id))
  }))
)

const stageColors: Record<number, { bg: string; text: string; border: string }> = {
  1: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/30' },
  2: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/30' },
  3: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/30' },
  4: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/30' },
  5: { bg: 'bg-rose-500/10', text: 'text-rose-500', border: 'border-rose-500/30' },
  6: { bg: 'bg-amber-500/10', text: 'text-amber-500', border: 'border-amber-500/30' }
}

// 模拟进度
const completedDays = ref(['tw-day-1', 'tw-day-2', 'tw-day-3', 'tw-day-4', 'tw-day-5', 'tw-day-6', 'tw-day-7', 'tw-day-8'])
const currentDay = ref('tw-day-9')
</script>

<template>
  <div class="min-h-screen py-8 md:py-12">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-theme-muted mb-8">
        <NuxtLink to="/" class="hover:text-theme transition-colors">首页</NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <NuxtLink to="/roadmap" class="hover:text-theme transition-colors">学习路径</NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <span class="text-theme">{{ topic?.title }}</span>
      </nav>

      <!-- Header -->
      <div 
        class="card p-6 md:p-8 mb-8"
        :class="isHero ? 'hero-corner hero-decoration' : ''"
      >
        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <div 
            class="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
            :class="isHero 
              ? 'bg-hero-gold/20 border border-hero-gold/30' 
              : 'bg-cyan-500/10'"
          >
            <Icon 
              :name="topic?.icon || 'heroicons:academic-cap-20-solid'" 
              class="w-10 h-10"
              :class="isHero ? 'text-hero-magic' : 'text-cyan-500'"
            />
          </div>
          
          <div class="flex-1">
            <h1 
              class="text-3xl md:text-4xl font-bold mb-2"
              :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
            >
              {{ roadmap?.title }}
            </h1>
            <p class="text-theme-secondary text-lg">
              {{ roadmap?.description }}
            </p>
          </div>
        </div>

        <!-- Progress Overview -->
        <div class="mt-8 pt-6 border-t border-theme">
          <div class="flex flex-wrap items-center gap-6 mb-4">
            <div class="flex items-center gap-2">
              <Icon 
                name="heroicons:check-circle-20-solid" 
                class="w-5 h-5 text-green-500"
              />
              <span class="text-theme-secondary">
                已完成 <strong class="text-theme">{{ completedDays.length }}</strong> 天
              </span>
            </div>
            <div class="flex items-center gap-2">
              <Icon 
                name="heroicons:play-circle-20-solid" 
                class="w-5 h-5"
                :class="isHero ? 'text-hero-gold' : 'text-accent'"
              />
              <span class="text-theme-secondary">
                进行中: <strong class="text-theme">第 9 天</strong>
              </span>
            </div>
            <div class="flex items-center gap-2">
              <Icon 
                name="heroicons:clock-20-solid" 
                class="w-5 h-5 text-theme-muted"
              />
              <span class="text-theme-secondary">
                剩余 <strong class="text-theme">{{ (roadmap?.totalDays || 30) - completedDays.length }}</strong> 天
              </span>
            </div>
          </div>
          
          <div class="progress-bar h-3">
            <div 
              class="progress-bar-fill"
              :style="{ width: `${(completedDays.length / (roadmap?.totalDays || 30)) * 100}%` }"
            />
          </div>
        </div>
      </div>

      <!-- Stages -->
      <div class="space-y-8">
        <div
          v-for="stage in stageWithDays"
          :key="stage.id"
          class="card overflow-hidden stagger-item"
          :class="isHero ? '' : ''"
        >
          <!-- Stage Header -->
          <NuxtLink
            :to="`/roadmap/${topicId}/stage-${stage.stageNumber}`"
            class="block p-6 border-b border-theme hover:bg-theme-tertiary/30 transition-colors group"
          >
            <div class="flex items-center gap-4">
              <div 
                class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                :class="isHero 
                  ? 'bg-hero-gold/20 border border-hero-gold/30' 
                  : stageColors[stage.stageNumber]?.bg"
              >
                <Icon 
                  :name="stage.icon" 
                  class="w-7 h-7"
                  :class="isHero ? 'text-hero-gold' : stageColors[stage.stageNumber]?.text"
                />
              </div>
              
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-3 mb-1">
                  <span 
                    class="text-xs font-medium px-2 py-0.5 rounded"
                    :class="isHero 
                      ? 'bg-hero-gold/10 text-hero-gold' 
                      : stageColors[stage.stageNumber]?.bg + ' ' + stageColors[stage.stageNumber]?.text"
                  >
                    阶段 {{ stage.stageNumber }}
                  </span>
                  <span class="text-sm text-theme-muted">
                    {{ stage.daysList.length }} 天
                  </span>
                </div>
                <h2 class="text-xl font-bold text-theme truncate">
                  {{ stage.title }}
                </h2>
                <p class="text-theme-secondary text-sm mt-1 line-clamp-1">
                  {{ stage.description }}
                </p>
              </div>
              
              <Icon 
                name="heroicons:chevron-right-20-solid" 
                class="w-6 h-6 text-theme-muted group-hover:text-theme transition-colors"
              />
            </div>
          </NuxtLink>
          
          <!-- Days List -->
          <div class="divide-y divide-theme/50">
            <NuxtLink
              v-for="day in stage.daysList"
              :key="day.id"
              :to="`/roadmap/${topicId}/stage-${stage.stageNumber}/day-${day.dayNumber}`"
              class="flex items-center gap-4 p-4 md:px-6 hover:bg-theme-tertiary/20 transition-colors group"
            >
              <!-- Status Icon -->
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                :class="[
                  completedDays.includes(day.id)
                    ? 'bg-green-500 text-white'
                    : currentDay === day.id
                    ? isHero ? 'bg-hero-gold text-hero-bg' : 'bg-accent text-white'
                    : 'bg-theme-tertiary text-theme-muted'
                ]"
              >
                <Icon 
                  v-if="completedDays.includes(day.id)"
                  name="heroicons:check-16-solid" 
                  class="w-5 h-5"
                />
                <Icon 
                  v-else-if="currentDay === day.id"
                  name="heroicons:play-16-solid" 
                  class="w-5 h-5"
                />
                <span v-else class="text-sm font-medium">{{ day.dayNumber }}</span>
              </div>
              
              <!-- Day Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs text-theme-muted">Day {{ day.dayNumber }}</span>
                  <span 
                    v-if="currentDay === day.id"
                    class="text-xs px-2 py-0.5 rounded animate-pulse"
                    :class="isHero ? 'bg-hero-gold/20 text-hero-gold' : 'bg-accent/10 text-accent'"
                  >
                    进行中
                  </span>
                </div>
                <h3 class="font-medium text-theme truncate group-hover:text-accent transition-colors">
                  {{ day.title }}
                </h3>
              </div>
              
              <!-- Duration -->
              <div class="hidden sm:flex items-center gap-2 text-sm text-theme-muted">
                <Icon name="heroicons:clock-16-solid" class="w-4 h-4" />
                <span>{{ day.estimatedTime }}</span>
              </div>
              
              <Icon 
                name="heroicons:chevron-right-16-solid" 
                class="w-5 h-5 text-theme-muted"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
