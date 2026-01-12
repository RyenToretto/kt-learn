<script setup lang="ts">
const colorMode = useColorMode()

const themes = [
  { value: 'light', label: '亮色', icon: 'heroicons:sun-20-solid' },
  { value: 'dark', label: '暗色', icon: 'heroicons:moon-20-solid' },
  { value: 'hero', label: '英雄', icon: 'heroicons:sparkles-20-solid' }
]

const currentIndex = computed(() => 
  themes.findIndex(t => t.value === colorMode.value)
)

const cycleTheme = () => {
  const nextIndex = (currentIndex.value + 1) % themes.length
  colorMode.preference = themes[nextIndex].value
}
</script>

<template>
  <button
    @click="cycleTheme"
    class="p-2 rounded-lg transition-all duration-200 hover:bg-theme-tertiary/50"
    :class="colorMode.value === 'hero' ? 'text-hero-gold' : 'text-theme-secondary'"
    :title="`切换主题 (当前: ${themes[currentIndex]?.label})`"
  >
    <Icon :name="themes[currentIndex]?.icon || themes[0].icon" class="w-5 h-5" />
  </button>
</template>
