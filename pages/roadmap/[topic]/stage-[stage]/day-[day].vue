<script setup lang="ts">
import { tailwindStages, tailwindDays, tailwindLearningPoints } from '~/data/roadmaps/tailwind'
import { topics } from '~/data/topics'

const route = useRoute()
const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

const topicId = computed(() => route.params.topic as string)
const stageNumber = computed(() => parseInt(route.params.stage as string))
const dayNumber = computed(() => parseInt(route.params.day as string))

const topic = computed(() => topics.find(t => t.id === topicId.value))
const stage = computed(() => tailwindStages.find(s => s.stageNumber === stageNumber.value))
const day = computed(() => tailwindDays.find(d => d.dayNumber === dayNumber.value))
const learningPoints = computed(() => 
  tailwindLearningPoints.filter(lp => day.value?.learningPoints.includes(lp.id))
)

// Current learning point
const currentPointIndex = ref(0)
const currentPoint = computed(() => learningPoints.value[currentPointIndex.value])

// Navigation
const prevDay = computed(() => tailwindDays.find(d => d.dayNumber === dayNumber.value - 1))
const nextDay = computed(() => tailwindDays.find(d => d.dayNumber === dayNumber.value + 1))

const getPrevDayRoute = () => {
  if (!prevDay.value) return null
  const prevStage = tailwindStages.find(s => s.days.includes(prevDay.value!.id))
  return `/roadmap/${topicId.value}/stage-${prevStage?.stageNumber}/day-${prevDay.value.dayNumber}`
}

const getNextDayRoute = () => {
  if (!nextDay.value) return null
  const nextStage = tailwindStages.find(s => s.days.includes(nextDay.value!.id))
  return `/roadmap/${topicId.value}/stage-${nextStage?.stageNumber}/day-${nextDay.value.dayNumber}`
}

// Mark complete
const isCompleted = ref(false)
const markComplete = () => {
  isCompleted.value = true
}

// Copy code
const copyCode = async (code: string) => {
  await navigator.clipboard.writeText(code)
}

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
    <div class="max-w-5xl mx-auto px-4 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-theme-muted mb-6 flex-wrap">
        <NuxtLink to="/" class="hover:text-theme transition-colors">首页</NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <NuxtLink :to="`/roadmap/${topicId}`" class="hover:text-theme transition-colors">
          {{ topic?.title }}
        </NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <NuxtLink :to="`/roadmap/${topicId}/stage-${stageNumber}`" class="hover:text-theme transition-colors">
          阶段 {{ stageNumber }}
        </NuxtLink>
        <Icon name="heroicons:chevron-right-16-solid" class="w-4 h-4" />
        <span class="text-theme">Day {{ dayNumber }}</span>
      </nav>

      <!-- Day Header -->
      <div 
        class="card p-6 md:p-8 mb-6"
        :class="isHero ? 'hero-decoration' : ''"
      >
        <div class="flex flex-col md:flex-row md:items-start gap-4">
          <div 
            class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
            :class="isHero ? 'bg-hero-gold/20 border border-hero-gold/30' : `bg-${stageColors[stageNumber]}-500/10`"
          >
            <span 
              class="text-xl font-bold"
              :class="isHero ? 'text-hero-gold' : `text-${stageColors[stageNumber]}-500`"
            >
              {{ dayNumber }}
            </span>
          </div>
          
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-sm text-theme-muted">Day {{ dayNumber }}</span>
              <span class="text-theme-muted">·</span>
              <span class="text-sm text-theme-muted">{{ day?.estimatedTime }}</span>
            </div>
            <h1 
              class="text-2xl md:text-3xl font-bold mb-3"
              :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
            >
              {{ day?.title }}
            </h1>
            <p class="text-theme-secondary">
              {{ day?.description }}
            </p>
          </div>
          
          <button
            v-if="!isCompleted"
            @click="markComplete"
            class="btn btn-primary shrink-0"
          >
            <Icon name="heroicons:check-20-solid" class="w-5 h-5" />
            标记完成
          </button>
          <div 
            v-else
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-500"
          >
            <Icon name="heroicons:check-circle-20-solid" class="w-5 h-5" />
            已完成
          </div>
        </div>

        <!-- Objectives -->
        <div class="mt-6 pt-6 border-t border-theme">
          <h3 class="text-sm font-medium text-theme-muted mb-3">今日目标</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="obj in day?.objectives"
              :key="obj"
              class="text-sm px-3 py-1 rounded-full"
              :class="isHero 
                ? 'bg-hero-gold/10 text-hero-gold border border-hero-gold/20' 
                : 'bg-accent/10 text-accent'"
            >
              {{ obj }}
            </span>
          </div>
        </div>
      </div>

      <!-- Learning Points Navigation -->
      <div class="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
        <button
          v-for="(point, index) in learningPoints"
          :key="point.id"
          @click="currentPointIndex = index"
          class="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200"
          :class="[
            currentPointIndex === index
              ? isHero 
                ? 'bg-hero-gold text-hero-bg' 
                : 'bg-accent text-white'
              : 'bg-theme-secondary text-theme-secondary hover:text-theme'
          ]"
        >
          {{ index + 1 }}. {{ point.title }}
        </button>
      </div>

      <!-- Current Learning Point -->
      <div 
        v-if="currentPoint"
        class="card p-6 md:p-8"
        :class="isHero ? 'hero-corner' : ''"
      >
        <h2 
          class="text-xl md:text-2xl font-bold mb-4"
          :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
        >
          {{ currentPoint.title }}
        </h2>
        <p class="text-theme-secondary mb-6">
          {{ currentPoint.description }}
        </p>

        <!-- Content (Markdown would be rendered here) -->
        <div class="prose prose-lg max-w-none dark:prose-invert mb-8">
          <div 
            class="text-theme-secondary whitespace-pre-wrap"
            v-html="currentPoint.content.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class=\'bg-theme-tertiary rounded-lg p-4 overflow-x-auto\'><code>$2</code></pre>').replace(/`([^`]+)`/g, '<code class=\'bg-theme-tertiary px-1.5 py-0.5 rounded text-accent\'>$1</code>').replace(/^# (.+)$/gm, '<h1 class=\'text-xl font-bold text-theme mt-6 mb-4\'>$1</h1>').replace(/^## (.+)$/gm, '<h2 class=\'text-lg font-semibold text-theme mt-5 mb-3\'>$1</h2>').replace(/^### (.+)$/gm, '<h3 class=\'text-base font-medium text-theme mt-4 mb-2\'>$1</h3>').replace(/^\d+\. (.+)$/gm, '<li class=\'ml-4 list-decimal text-theme-secondary\'>$1</li>').replace(/^- (.+)$/gm, '<li class=\'ml-4 list-disc text-theme-secondary\'>$1</li>')"
          />
        </div>

        <!-- Code Examples -->
        <div 
          v-if="currentPoint.codeExamples?.length"
          class="space-y-6"
        >
          <h3 class="text-lg font-semibold text-theme flex items-center gap-2">
            <Icon name="heroicons:code-bracket-20-solid" class="w-5 h-5 text-accent" />
            代码示例
          </h3>
          
          <div 
            v-for="example in currentPoint.codeExamples"
            :key="example.id"
            class="rounded-xl overflow-hidden border border-theme"
          >
            <div class="flex items-center justify-between px-4 py-3 bg-theme-tertiary/50 border-b border-theme">
              <span class="text-sm font-medium text-theme">{{ example.title }}</span>
              <button
                @click="copyCode(example.code)"
                class="flex items-center gap-1 text-sm text-theme-muted hover:text-theme transition-colors"
              >
                <Icon name="heroicons:clipboard-document-16-solid" class="w-4 h-4" />
                复制
              </button>
            </div>
            <pre class="p-4 overflow-x-auto bg-theme-secondary"><code class="text-sm text-theme-secondary">{{ example.code }}</code></pre>
          </div>
        </div>

        <!-- Tips -->
        <div 
          v-if="currentPoint.tips?.length"
          class="mt-8 p-4 rounded-xl"
          :class="isHero ? 'bg-hero-gold/10 border border-hero-gold/20' : 'bg-blue-500/10 border border-blue-500/20'"
        >
          <h3 class="flex items-center gap-2 font-semibold mb-3"
            :class="isHero ? 'text-hero-gold' : 'text-blue-500'"
          >
            <Icon name="heroicons:light-bulb-20-solid" class="w-5 h-5" />
            小贴士
          </h3>
          <ul class="space-y-2">
            <li 
              v-for="tip in currentPoint.tips"
              :key="tip"
              class="flex items-start gap-2 text-sm"
              :class="isHero ? 'text-hero-text-secondary' : 'text-blue-700 dark:text-blue-300'"
            >
              <Icon name="heroicons:check-16-solid" class="w-4 h-4 mt-0.5 shrink-0" />
              <span>{{ tip }}</span>
            </li>
          </ul>
        </div>

        <!-- References -->
        <div 
          v-if="currentPoint.references?.length"
          class="mt-8 pt-6 border-t border-theme"
        >
          <h3 class="text-lg font-semibold text-theme mb-4 flex items-center gap-2">
            <Icon name="heroicons:link-20-solid" class="w-5 h-5 text-accent" />
            参考资料
          </h3>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="ref in currentPoint.references"
              :key="ref.url"
              :href="ref.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-tertiary/50 text-theme-secondary hover:text-theme hover:bg-theme-tertiary transition-colors"
            >
              <Icon 
                :name="ref.type === 'docs' ? 'heroicons:document-text-16-solid' : ref.type === 'video' ? 'heroicons:play-16-solid' : ref.type === 'github' ? 'mdi:github' : 'heroicons:globe-alt-16-solid'"
                class="w-4 h-4"
              />
              <span class="text-sm">{{ ref.title }}</span>
              <Icon name="heroicons:arrow-top-right-on-square-16-solid" class="w-3 h-3 opacity-50" />
            </a>
          </div>
        </div>

        <!-- Points Navigation -->
        <div class="flex items-center justify-between mt-8 pt-6 border-t border-theme">
          <button
            v-if="currentPointIndex > 0"
            @click="currentPointIndex--"
            class="btn btn-secondary"
          >
            <Icon name="heroicons:arrow-left-20-solid" class="w-5 h-5" />
            上一知识点
          </button>
          <div v-else />
          
          <button
            v-if="currentPointIndex < learningPoints.length - 1"
            @click="currentPointIndex++"
            class="btn btn-primary"
          >
            下一知识点
            <Icon name="heroicons:arrow-right-20-solid" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Day Navigation -->
      <div class="flex items-center justify-between mt-8 pt-8 border-t border-theme">
        <NuxtLink
          v-if="getPrevDayRoute()"
          :to="getPrevDayRoute()!"
          class="flex items-center gap-3 group"
        >
          <Icon 
            name="heroicons:arrow-left-20-solid" 
            class="w-5 h-5 text-theme-muted group-hover:text-accent transition-colors"
          />
          <div>
            <div class="text-xs text-theme-muted">上一天</div>
            <div class="text-sm font-medium text-theme-secondary group-hover:text-theme transition-colors">
              Day {{ prevDay?.dayNumber }}: {{ prevDay?.title }}
            </div>
          </div>
        </NuxtLink>
        <div v-else />
        
        <NuxtLink
          v-if="getNextDayRoute()"
          :to="getNextDayRoute()!"
          class="flex items-center gap-3 text-right group"
        >
          <div>
            <div class="text-xs text-theme-muted">下一天</div>
            <div class="text-sm font-medium text-theme-secondary group-hover:text-theme transition-colors">
              Day {{ nextDay?.dayNumber }}: {{ nextDay?.title }}
            </div>
          </div>
          <Icon 
            name="heroicons:arrow-right-20-solid" 
            class="w-5 h-5 text-theme-muted group-hover:text-accent transition-colors"
          />
        </NuxtLink>
        <NuxtLink
          v-else
          to="/support"
          class="btn btn-primary"
        >
          <Icon name="heroicons:trophy-20-solid" class="w-5 h-5" />
          完成学习！
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
