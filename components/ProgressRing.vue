<script setup lang="ts">
interface Props {
  progress: number
  size?: number
  strokeWidth?: number
  showLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 48,
  strokeWidth: 4,
  showLabel: true
})

const colorMode = useColorMode()
const isHero = computed(() => colorMode.value === 'hero')

const radius = computed(() => (props.size - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const offset = computed(() => circumference.value - (props.progress / 100) * circumference.value)
</script>

<template>
  <div class="relative inline-flex items-center justify-center">
    <svg 
      :width="size" 
      :height="size" 
      class="transform -rotate-90"
    >
      <!-- Background circle -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
        class="stroke-theme-tertiary"
      />
      <!-- Progress circle -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        stroke-linecap="round"
        class="transition-all duration-500 ease-out"
        :class="isHero ? 'stroke-hero-gold' : 'stroke-accent'"
      />
    </svg>
    <span 
      v-if="showLabel"
      class="absolute text-xs font-bold"
      :class="isHero ? 'text-hero-gold' : 'text-accent'"
    >
      {{ progress }}%
    </span>
  </div>
</template>
