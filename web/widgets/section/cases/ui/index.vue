<script setup lang="ts">
import CaseCard from '@/entities/section/cases/ui/index.vue'
import { cases } from '../model'

const configPage = {
  title: 'Use Cases',
  text: "FNTP offers a variuos set of features that can significantly enhance blockchain technology's efficiency, scalability, and security. By addressing critical challenges related to data transmission speed and reliability, FNTP can be used different ways",
}
</script>
<template>
  <section class="fntp-section gap-[32px] lg:gap-[64px]">
    <div class="flex flex-col gap-[16px] lg:gap-[32px] max-w-[937px] w-full mx-auto">
      <h2 class="w-[80%] lg:w-full text-center mx-auto">
        {{ configPage.title }}
      </h2>
      <p class="text-fp-brand-secondary text-center text-fp-16 leading-[22.4px]">
        {{ configPage.text }}
      </p>
    </div>
    <div
      class="max-w-[1280px] w-full mx-auto flex justify-center flex-wrap items-stretch gap-[16px] lg:gap-[32px]"
    >
      <CaseCard
        class="w-full lg:w-[296px] lg:h-[460px]"
        v-for="(caseItem, index) in cases"
        :key="cases.indexOf(caseItem)"
        :index="index"
        :data="caseItem"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
