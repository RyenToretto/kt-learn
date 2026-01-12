<script setup lang="ts">
const colorMode = useColorMode()

// Apply theme class to html element
useHead({
  htmlAttrs: {
    class: computed(() => colorMode.value)
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Ensure smooth theme transitions */
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
