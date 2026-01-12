<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)
</script>

<template>
  <div class="min-h-screen bg-theme flex flex-col">
    <!-- PC Header -->
    <TheHeader v-if="!isMobile" />
    
    <!-- Main Content -->
    <main 
      class="flex-1 w-full"
      :class="[
        isMobile ? 'pb-20' : 'pt-16'
      ]"
    >
      <slot />
    </main>
    
    <!-- Mobile Tab Bar -->
    <MobileTabBar v-if="isMobile" />
  </div>
</template>
