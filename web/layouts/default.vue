<script setup lang="ts">
import Header from '@/entities/nav/header/ui/index.vue'
import Footer from '@/entities/nav/footer/ui/index.vue'
</script>

<template>
  <div class="grid swit isolate h-full min-h-[100vh]">
    <Header class="fixed top-0 z-50" />
    <main>
      <slot />
    </main>
    <Footer class="mt-[auto] z-10" />
  </div>
</template>

<style>
html,
body {
  font-family: 'Switzer-Regular', 'Switzer-Medium', 'Switzer-Semibold', sans-serif;
}
</style>
