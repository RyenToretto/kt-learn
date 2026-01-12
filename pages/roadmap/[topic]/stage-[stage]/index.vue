<script setup lang="ts">
import { tailwindStages, tailwindDays } from '~/data/roadmaps/tailwind'
import { topics } from '~/data/topics'

const route = useRoute()
const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

const topicId = computed(() => route.params.topic as string)
const stageNumber = computed(() => parseInt(route.params.stage as string))

const topic = computed(() => topics.find(t => t.id === topicId.value))
const stage = computed(() => tailwindStages.find(s => s.stageNumber === stageNumber.value))
const days = computed(() => tailwindDays.filter(d => stage.value?.days.includes(d.id)))

// 模拟进度
const completedDays = ref(['tw-day-1', 'tw-day-2', 'tw-day-3', 'tw-day-4', 'tw-day-5', 'tw-day-6', 'tw-day-7', 'tw-day-8'])
const currentDay = ref('tw-day-9')

const stageProgress = computed(() => {
  const stageDayIds = stage.value?.days || []
  const completed = stageDayIds.filter(id => completedDays.value.includes(id)).length
  return Math.round((completed / stageDayIds.length) * 100)
})

const stageColors: Record<number, string> = {
  1: 'emerald',
  2: 'blue',
  3: 'purple',
  4: 'orange',
  5: 'rose',
  6: 'amber'
}
</script>

<template>
  <div class="min-h-screen py-8 md:py-12">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-theme-muted mb-8 flex-wrap">
        <NuxtLink to="/" class="hover:text-theme transition-colors">首页</NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <NuxtLink to="/roadmap" class="hover:text-theme transition-colors">学习路径</NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <NuxtLink :to="`/roadmap/${topicId}`" class="hover:text-theme transition-colors">
          {{ topic?.title }}
        </NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <span class="text-theme">阶段 {{ stageNumber }}</span>
      </nav>

      <!-- Stage Header -->
      <div 
        class="card p-6 md:p-8 mb-8"
        :class="isHero ? 'hero-corner hero-decoration' : ''"
      >
        <div class="flex flex-col md:flex-row md:items-start gap-6">
          <div 
            class="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
            :class="isHero 
              ? 'bg-hero-gold/20 border border-hero-gold/30' 
              : `bg-${stageColors[stageNumber]}-500/10`"
          >
            <Icon 
              :name="stage?.icon || 'heroicons:academic-cap-20-solid'" 
              class="w-8 h-8"
              :class="isHero ? 'text-hero-gold' : `text-${stageColors[stageNumber]}-500`"
            />
          </div>
          
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <span 
                class="text-sm font-medium px-3 py-1 rounded-full"
                :class="isHero 
                  ? 'bg-hero-gold/10 text-hero-gold border border-hero-gold/30' 
                  : `bg-${stageColors[stageNumber]}-500/10 text-${stageColors[stageNumber]}-500`"
              >
                阶段 {{ stageNumber }}
              </span>
              <span class="text-sm text-theme-muted">
                共 {{ stage?.days.length }} 天
              </span>
            </div>
            <h1 
              class="text-2xl md:text-3xl font-bold mb-3"
              :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
            >
              {{ stage?.title }}
            </h1>
            <p class="text-theme-secondary">
              {{ stage?.description }}
            </p>
          </div>
        </div>

        <!-- Progress -->
        <div class="mt-6 pt-6 border-t border-theme">
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-theme-secondary">阶段进度</span>
            <span 
              class="text-sm font-medium"
              :class="isHero ? 'text-hero-gold' : 'text-accent'"
            >
              {{ stageProgress }}%
            </span>
          </div>
          <div class="progress-bar">
            <div 
              class="progress-bar-fill"
              :style="{ width: `${stageProgress}%` }"
            />
          </div>
        </div>

        <!-- Objectives -->
        <div class="mt-6 pt-6 border-t border-theme">
          <h3 class="font-semibold text-theme mb-4 flex items-center gap-2">
            <Icon name="heroicons:flag-20-solid" class="w-5 h-5 text-accent" />
            学习目标
          </h3>
          <div class="grid sm:grid-cols-2 gap-3">
            <div 
              v-for="(obj, index) in stage?.objectives"
              :key="index"
              class="flex items-center gap-3 p-3 rounded-lg bg-theme-tertiary/30"
            >
              <div 
                class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                :class="isHero 
                  ? 'bg-hero-gold/20 text-hero-gold' 
                  : 'bg-accent/10 text-accent'"
              >
                {{ index + 1 }}
              </div>
              <span class="text-theme-secondary text-sm">{{ obj }}</span>
            </div>
          </div>
        </div>

        <!-- Prerequisites -->
        <div v-if="stage?.prerequisites.length" class="mt-6 pt-6 border-t border-theme">
          <h3 class="font-semibold text-theme mb-3 flex items-center gap-2">
            <Icon name="heroicons:bookmark-20-solid" class="w-5 h-5 text-orange-500" />
            前置要求
          </h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="prereq in stage?.prerequisites"
              :key="prereq"
              class="text-sm px-3 py-1 rounded-full bg-orange-500/10 text-orange-500"
            >
              {{ prereq }}
            </span>
          </div>
        </div>
      </div>

      <!-- Days List -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-theme mb-4">每日学习内容</h2>
        
        <NuxtLink
          v-for="day in days"
          :key="day.id"
          :to="`/roadmap/${topicId}/stage-${stageNumber}/day-${day.dayNumber}`"
          class="card p-5 md:p-6 block group hover:scale-[1.01] transition-all duration-200 stagger-item"
          :class="currentDay === day.id ? (isHero ? 'ring-2 ring-hero-gold' : 'ring-2 ring-accent') : ''"
        >
          <div class="flex items-start gap-4">
            <!-- Status & Day Number -->
            <div 
              class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
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
                name="heroicons:check-20-solid" 
                class="w-6 h-6"
              />
              <span v-else class="text-lg font-bold">{{ day.dayNumber }}</span>
            </div>
            
            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-sm text-theme-muted">Day {{ day.dayNumber }}</span>
                <span 
                  v-if="completedDays.includes(day.id)"
                  class="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-500"
                >
                  已完成
                </span>
                <span 
                  v-else-if="currentDay === day.id"
                  class="text-xs px-2 py-0.5 rounded animate-pulse"
                  :class="isHero ? 'bg-hero-gold/20 text-hero-gold' : 'bg-accent/10 text-accent'"
                >
                  进行中
                </span>
              </div>
              <h3 class="text-lg font-semibold text-theme mb-2 group-hover:text-accent transition-colors">
                {{ day.title }}
              </h3>
              <p class="text-theme-secondary text-sm mb-4">
                {{ day.description }}
              </p>
              
              <!-- Objectives -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="obj in day.objectives.slice(0, 3)"
                  :key="obj"
                  class="text-xs px-2 py-1 rounded-full bg-theme-tertiary/50 text-theme-muted"
                >
                  {{ obj }}
                </span>
              </div>
            </div>
            
            <!-- Duration & Arrow -->
            <div class="hidden sm:flex flex-col items-end gap-2">
              <div class="flex items-center gap-1 text-sm text-theme-muted">
                <Icon name="heroicons:clock-16-solid" class="w-4 h-4" />
                <span>{{ day.estimatedTime }}</span>
              </div>
              <Icon 
                name="heroicons:arrow-right-20-solid" 
                class="w-5 h-5 text-theme-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
              />
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <div class="flex items-center justify-between mt-8 pt-8 border-t border-theme">
        <NuxtLink
          v-if="stageNumber > 1"
          :to="`/roadmap/${topicId}/stage-${stageNumber - 1}`"
          class="btn btn-secondary"
        >
          <Icon name="heroicons:arrow-left-20-solid" class="w-5 h-5" />
          上一阶段
        </NuxtLink>
        <div v-else />
        
        <NuxtLink
          v-if="stageNumber < 6"
          :to="`/roadmap/${topicId}/stage-${stageNumber + 1}`"
          class="btn btn-primary"
        >
          下一阶段
          <Icon name="heroicons:arrow-right-20-solid" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
