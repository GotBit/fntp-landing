<script setup lang="ts">
import Banner from '@/widgets/section/banner/ui/index.vue'
import Problem from '@/widgets/section/problem/ui/index.vue'
import Solution from '@/widgets/section/solution/ui/index.vue'
import Cases from '@/widgets/section/cases/ui/index.vue'
import Tokenomics from '@/widgets/section/tokenomics/ui/index.vue'
</script>

<template>
  <div class="grid gap-[100px] lg:gap-[116px] h-full w-full pb-[100px] lg:pb-[160px]">
    <Banner />
    <div class="grid gap-[100px] lg:gap-[160px] px-[16px] lg:px-[80px]">
      <Problem />
      <Solution />
      <Cases />
      <Tokenomics />
    </div>
  </div>
</template>
