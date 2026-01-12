<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
}
</script>

<template>
  <div 
    class="animate-spin rounded-full border-2 border-current border-t-transparent"
    :class="[
      sizeClasses[size],
      isHero ? 'text-hero-gold' : 'text-accent'
    ]"
  />
</template>
