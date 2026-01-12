<script setup lang="ts">
import { topics } from '~/data/topics'
import { tailwindStages, tailwindRoadmap } from '~/data/roadmaps/tailwind'

const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

// 计算进度 (示例数据)
const progress = ref({
  totalDays: 30,
  completedDays: 8,
  currentStage: 2,
  streak: 5
})

const progressPercent = computed(() => 
  Math.round((progress.value.completedDays / progress.value.totalDays) * 100)
)

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
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section 
      class="relative overflow-hidden"
      :class="isHero ? 'py-20 md:py-32' : 'py-16 md:py-24'"
    >
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          v-if="isHero"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-30"
        />
        <div 
          v-else
          class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <div 
          v-if="!isHero"
          class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div class="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <div 
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 stagger-item"
            :class="isHero 
              ? 'bg-hero-gold/10 border border-hero-gold/30' 
              : 'bg-accent/10 border border-accent/20'"
          >
            <Icon 
              name="heroicons:sparkles-20-solid" 
              class="w-5 h-5"
              :class="isHero ? 'text-hero-gold' : 'text-accent'"
            />
            <span 
              class="text-sm font-medium"
              :class="isHero ? 'text-hero-gold' : 'text-accent'"
            >
              系统化的前端学习路径
            </span>
          </div>

          <!-- Title -->
          <h1 
            class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 stagger-item"
            :class="isHero ? 'font-hero' : ''"
          >
            <span class="text-theme">掌握</span>
            <span 
              class="mx-2"
              :class="isHero 
                ? 'text-hero-gold hero-text-glow' 
                : 'text-gradient'"
            >
              Tailwind CSS
            </span>
            <br class="hidden sm:block">
            <span class="text-theme">构建现代 Web 界面</span>
          </h1>

          <!-- Description -->
          <p 
            class="text-lg md:text-xl mb-8 max-w-2xl mx-auto stagger-item"
            :class="isHero ? 'text-hero-text-secondary' : 'text-theme-secondary'"
          >
            30天系统学习路径，从入门到精通。包含理论讲解、代码示例、实战项目，
            助你全面掌握 Tailwind CSS 的核心技能。
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-item">
            <NuxtLink 
              to="/roadmap/tailwind" 
              class="btn btn-primary w-full sm:w-auto group"
              :class="isHero ? 'hero-shine' : ''"
            >
              <Icon name="heroicons:play-20-solid" class="w-5 h-5" />
              <span>开始学习</span>
              <Icon 
                name="heroicons:arrow-right-20-solid" 
                class="w-5 h-5 transition-transform group-hover:translate-x-1"
              />
            </NuxtLink>
            <NuxtLink 
              to="/topics" 
              class="btn btn-secondary w-full sm:w-auto"
            >
              <Icon name="heroicons:book-open-20-solid" class="w-5 h-5" />
              <span>浏览全部课程</span>
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div 
            class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 stagger-item"
          >
            <div 
              v-for="stat in [
                { value: '30', label: '天学习计划', icon: 'heroicons:calendar-days-20-solid' },
                { value: '60+', label: '小时内容', icon: 'heroicons:clock-20-solid' },
                { value: '100+', label: '代码示例', icon: 'heroicons:code-bracket-20-solid' },
                { value: '6', label: '实战项目', icon: 'heroicons:cube-20-solid' }
              ]"
              :key="stat.label"
              class="text-center"
            >
              <div 
                class="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                :class="isHero 
                  ? 'bg-hero-bg-tertiary border border-hero-gold/20' 
                  : 'bg-theme-secondary'"
              >
                <Icon 
                  :name="stat.icon" 
                  class="w-6 h-6"
                  :class="isHero ? 'text-hero-gold' : 'text-accent'"
                />
              </div>
              <div 
                class="text-2xl md:text-3xl font-bold mb-1"
                :class="isHero ? 'text-hero-gold font-hero' : 'text-theme'"
              >
                {{ stat.value }}
              </div>
              <div class="text-sm text-theme-muted">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Progress Section (if learning) -->
    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div 
          class="card p-6 md:p-8"
          :class="isHero ? 'hero-corner' : ''"
        >
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <div 
                  class="w-10 h-10 rounded-lg flex items-center justify-center"
                  :class="isHero ? 'bg-hero-gold/20' : 'bg-accent/20'"
                >
                  <Icon 
                    name="heroicons:fire-20-solid" 
                    class="w-5 h-5"
                    :class="isHero ? 'text-hero-gold' : 'text-accent'"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-theme">继续学习</h3>
                  <p class="text-sm text-theme-muted">
                    连续学习 {{ progress.streak }} 天，继续保持！
                  </p>
                </div>
              </div>
              
              <!-- Progress Bar -->
              <div class="mb-3">
                <div class="flex justify-between text-sm mb-2">
                  <span class="text-theme-secondary">
                    阶段 {{ progress.currentStage }}：{{ tailwindStages[progress.currentStage - 1]?.title }}
                  </span>
                  <span 
                    class="font-medium"
                    :class="isHero ? 'text-hero-gold' : 'text-accent'"
                  >
                    {{ progressPercent }}%
                  </span>
                </div>
                <div class="progress-bar">
                  <div 
                    class="progress-bar-fill"
                    :style="{ width: `${progressPercent}%` }"
                  />
                </div>
              </div>
              
              <p class="text-sm text-theme-muted">
                已完成 {{ progress.completedDays }}/{{ progress.totalDays }} 天
              </p>
            </div>
            
            <NuxtLink 
              to="/roadmap/tailwind/stage-2/day-9"
              class="btn btn-primary shrink-0"
            >
              <Icon name="heroicons:play-20-solid" class="w-5 h-5" />
              继续第9天
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Path Preview -->
    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h2 
            class="text-3xl md:text-4xl font-bold mb-4"
            :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
          >
            学习路径
          </h2>
          <p class="text-theme-secondary max-w-2xl mx-auto">
            6个阶段，30天系统学习，循序渐进掌握 Tailwind CSS
          </p>
        </div>

        <!-- Stages Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="(stage, index) in tailwindStages"
            :key="stage.id"
            :to="`/roadmap/tailwind/stage-${stage.stageNumber}`"
            class="card p-6 group hover:scale-[1.02] transition-all duration-300 stagger-item"
            :class="isHero ? 'hero-border' : ''"
          >
            <div class="flex items-start gap-4">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                :class="[
                  isHero 
                    ? 'bg-hero-gold/20 border border-hero-gold/30' 
                    : `bg-${stageColors[stage.stageNumber]}-500/10`
                ]"
              >
                <Icon 
                  :name="stage.icon" 
                  class="w-6 h-6"
                  :class="isHero ? 'text-hero-gold' : `text-${stageColors[stage.stageNumber]}-500`"
                />
              </div>
              
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span 
                    class="text-xs font-medium px-2 py-0.5 rounded"
                    :class="isHero 
                      ? 'bg-hero-gold/10 text-hero-gold' 
                      : `bg-${stageColors[stage.stageNumber]}-500/10 text-${stageColors[stage.stageNumber]}-500`"
                  >
                    阶段 {{ stage.stageNumber }}
                  </span>
                  <span class="text-xs text-theme-muted">
                    {{ stage.days.length }} 天
                  </span>
                </div>
                <h3 class="font-semibold text-theme mb-2 truncate">
                  {{ stage.title }}
                </h3>
                <p class="text-sm text-theme-muted line-clamp-2">
                  {{ stage.description }}
                </p>
              </div>
            </div>

            <!-- Objectives -->
            <div class="mt-4 pt-4 border-t border-theme">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="obj in stage.objectives.slice(0, 3)"
                  :key="obj"
                  class="text-xs px-2 py-1 rounded-full bg-theme-tertiary/50 text-theme-muted"
                >
                  {{ obj }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-10">
          <NuxtLink 
            to="/roadmap/tailwind"
            class="btn btn-secondary"
          >
            查看完整路径
            <Icon name="heroicons:arrow-right-20-solid" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Other Topics -->
    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h2 
            class="text-3xl md:text-4xl font-bold mb-4"
            :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
          >
            更多学习内容
          </h2>
          <p class="text-theme-secondary max-w-2xl mx-auto">
            除了 Tailwind CSS，还有更多前端技术等你探索
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="topic in topics.filter(t => t.id !== 'tailwind')"
            :key="topic.id"
            :to="`/topics/${topic.id}`"
            class="card p-6 group hover:scale-[1.02] transition-all duration-300 stagger-item"
          >
            <div class="flex items-start gap-4">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                :class="isHero 
                  ? 'bg-hero-bg-tertiary border border-hero-gold/20' 
                  : `bg-${topic.color}-500/10`"
              >
                <Icon 
                  :name="topic.icon" 
                  class="w-6 h-6"
                  :class="isHero ? 'text-hero-magic' : `text-${topic.color}-500`"
                />
              </div>
              
              <div class="flex-1">
                <h3 class="font-semibold text-theme mb-1">
                  {{ topic.title }}
                </h3>
                <p class="text-sm text-theme-muted line-clamp-2 mb-3">
                  {{ topic.description }}
                </p>
                <div class="flex items-center gap-3 text-sm">
                  <span 
                    class="px-2 py-0.5 rounded text-xs"
                    :class="[
                      topic.difficulty === 'beginner' 
                        ? 'bg-green-500/10 text-green-500'
                        : topic.difficulty === 'intermediate'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-red-500/10 text-red-500'
                    ]"
                  >
                    {{ topic.difficulty === 'beginner' ? '入门' : topic.difficulty === 'intermediate' ? '中级' : '高级' }}
                  </span>
                  <span class="text-theme-muted">
                    {{ topic.duration }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div 
          class="card p-8 md:p-12 text-center relative overflow-hidden"
          :class="isHero ? 'hero-decoration' : ''"
        >
          <!-- Background decoration -->
          <div 
            v-if="isHero"
            class="absolute inset-0 bg-hero-glow opacity-20"
          />
          
          <div class="relative">
            <h2 
              class="text-2xl md:text-4xl font-bold mb-4"
              :class="isHero ? 'font-hero text-hero-gold' : 'text-theme'"
            >
              准备好开始你的学习之旅了吗？
            </h2>
            <p class="text-theme-secondary mb-8 max-w-xl mx-auto">
              加入我们，系统学习前端技术，提升你的开发技能
            </p>
            <NuxtLink 
              to="/roadmap/tailwind"
              class="btn btn-primary"
              :class="isHero ? 'hero-shine' : ''"
            >
              <Icon name="heroicons:rocket-launch-20-solid" class="w-5 h-5" />
              立即开始
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-theme">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <div 
              class="w-8 h-8 rounded-lg flex items-center justify-center"
              :class="isHero 
                ? 'bg-gradient-to-br from-hero-gold-dark to-hero-gold' 
                : 'bg-gradient-to-br from-blue-500 to-purple-600'"
            >
              <span class="text-white font-bold text-sm">KT</span>
            </div>
            <span class="text-theme-muted text-sm">
              © 2024 KT-Learn. 用 ❤️ 构建
            </span>
          </div>
          
          <div class="flex items-center gap-6">
            <NuxtLink to="/support" class="text-sm text-theme-muted hover:text-theme transition-colors">
              支持作者
            </NuxtLink>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-theme-muted hover:text-theme transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
