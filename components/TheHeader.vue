<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

const themes = [
  { value: 'light', label: '亮色', icon: 'heroicons:sun-20-solid' },
  { value: 'dark', label: '暗色', icon: 'heroicons:moon-20-solid' },
  { value: 'hero', label: '英雄', icon: 'heroicons:sparkles-20-solid' }
]

const currentTheme = computed(() => 
  themes.find(t => t.value === colorMode.value) || themes[0]
)

const isThemeMenuOpen = ref(false)

const setTheme = (theme: string) => {
  colorMode.preference = theme
  isThemeMenuOpen.value = false
}

const navItems = [
  { path: '/', label: '首页', icon: 'heroicons:home-20-solid' },
  { path: '/roadmap', label: '学习路径', icon: 'heroicons:map-20-solid' },
  { path: '/topics', label: '知识专题', icon: 'heroicons:book-open-20-solid' },
  { path: '/support', label: '支持作者', icon: 'heroicons:heart-20-solid' }
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 h-16 glass border-b border-theme"
  >
    <div class="max-w-7xl mx-auto h-full px-4 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div 
          class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          :class="[
            colorMode.value === 'hero' 
              ? 'bg-gradient-to-br from-hero-gold-dark to-hero-gold shadow-hero-gold/30' 
              : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-glow/30'
          ]"
        >
          <span class="text-white font-bold text-lg">KT</span>
        </div>
        <div class="hidden sm:block">
          <h1 
            class="font-bold text-lg"
            :class="colorMode.value === 'hero' ? 'font-hero text-hero-gold' : 'text-theme'"
          >
            KT-Learn
          </h1>
          <p class="text-xs text-theme-muted -mt-0.5">前端学习路径</p>
        </div>
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
          :class="[
            isActive(item.path)
              ? colorMode.value === 'hero'
                ? 'bg-hero-gold/10 text-hero-gold'
                : 'bg-accent/10 text-accent'
              : 'text-theme-secondary hover:text-theme hover:bg-theme-tertiary/50'
          ]"
        >
          <Icon :name="item.icon" class="w-5 h-5" />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-2">
        <!-- Theme Switcher -->
        <div class="relative">
          <button
            @click="isThemeMenuOpen = !isThemeMenuOpen"
            class="p-2.5 rounded-xl transition-all duration-200 hover:bg-theme-tertiary/50"
            :class="colorMode.value === 'hero' ? 'text-hero-gold' : 'text-theme-secondary'"
            :title="`当前主题: ${currentTheme.label}`"
          >
            <Icon :name="currentTheme.icon" class="w-5 h-5" />
          </button>
          
          <!-- Theme Dropdown -->
          <Transition name="scale">
            <div 
              v-if="isThemeMenuOpen"
              class="absolute right-0 top-full mt-2 w-40 py-2 rounded-xl shadow-xl border"
              :class="[
                colorMode.value === 'hero'
                  ? 'bg-hero-bg-secondary border-hero-gold/20'
                  : 'bg-theme-secondary border-theme'
              ]"
            >
              <button
                v-for="theme in themes"
                :key="theme.value"
                @click="setTheme(theme.value)"
                class="w-full px-4 py-2.5 flex items-center gap-3 transition-colors"
                :class="[
                  colorMode.value === theme.value
                    ? colorMode.value === 'hero'
                      ? 'bg-hero-gold/10 text-hero-gold'
                      : 'bg-accent/10 text-accent'
                    : 'text-theme-secondary hover:text-theme hover:bg-theme-tertiary/30'
                ]"
              >
                <Icon :name="theme.icon" class="w-5 h-5" />
                <span class="font-medium">{{ theme.label }}</span>
                <Icon 
                  v-if="colorMode.value === theme.value"
                  name="heroicons:check-20-solid" 
                  class="w-4 h-4 ml-auto" 
                />
              </button>
            </div>
          </Transition>
        </div>

        <!-- GitHub Link -->
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 rounded-xl transition-all duration-200 hover:bg-theme-tertiary/50 text-theme-secondary hover:text-theme"
          title="GitHub"
        >
          <Icon name="mdi:github" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </header>

  <!-- Backdrop for theme menu -->
  <Transition name="fade">
    <div 
      v-if="isThemeMenuOpen"
      class="fixed inset-0 z-40"
      @click="isThemeMenuOpen = false"
    />
  </Transition>
</template>
