<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

const tabs = [
  { path: '/', label: '首页', icon: 'heroicons:home-20-solid', iconOutline: 'heroicons:home' },
  { path: '/roadmap', label: '路径', icon: 'heroicons:map-20-solid', iconOutline: 'heroicons:map' },
  { path: '/topics', label: '专题', icon: 'heroicons:book-open-20-solid', iconOutline: 'heroicons:book-open' },
  { path: '/support', label: '支持', icon: 'heroicons:heart-20-solid', iconOutline: 'heroicons:heart' }
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav 
    class="fixed bottom-0 left-0 right-0 z-50 glass border-t border-theme safe-bottom"
    :class="colorMode.value === 'hero' ? 'hero-decoration' : ''"
  >
    <div class="flex items-center justify-around h-16 px-2">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-200"
        :class="[
          isActive(tab.path)
            ? colorMode.value === 'hero'
              ? 'text-hero-gold'
              : 'text-accent'
            : 'text-theme-muted hover:text-theme-secondary'
        ]"
      >
        <div 
          class="relative"
          :class="isActive(tab.path) ? 'tab-active-bounce' : ''"
        >
          <Icon 
            :name="isActive(tab.path) ? tab.icon : tab.iconOutline" 
            class="w-6 h-6 transition-transform duration-200"
            :class="isActive(tab.path) ? 'scale-110' : ''"
          />
          <!-- Active indicator -->
          <div 
            v-if="isActive(tab.path)"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
            :class="colorMode.value === 'hero' ? 'bg-hero-gold shadow-hero-gold' : 'bg-accent'"
          />
        </div>
        <span 
          class="text-xs mt-1 font-medium"
          :class="isActive(tab.path) ? 'opacity-100' : 'opacity-70'"
        >
          {{ tab.label }}
        </span>
      </NuxtLink>
    </div>
  </nav>
</template>
