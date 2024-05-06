<script setup lang="ts">
import { CardSolution, CardSolutionPicture } from '@/entities/section/solution/ui'
import { overview, coreFeatures, performanceBenefits, pictures } from '../model'

const configPage = {
  title: 'FNTP Solution Overview',
}
</script>
<template>
  <section class="fntp-section lg:gap-[80px]">
    <h2 class="w-[80%] lg:w-full text-center">
      {{ configPage.title }}
    </h2>
    <div
      class="grid lg:grid-cols-[repeat(3,minmax(0,427px))] lg:grid-rows-[repeat(3,1fr)] xl:grid-rows-[repeat(3,395px)] items-stretch gap-[16px] lg:gap-[32px]"
    >
      <CardSolution
        class="lg:[grid-row:1/2] hover:[transform:scale(1.03)] duration-[250ms]"
        :data="overview"
      />
      <CardSolutionPicture
        class="h-[120px] lg:h-auto lg:[grid-row:2/3]"
        :data="pictures.miniArt"
      />
      <CardSolution
        class="lg:col-span-2 lg:row-span-2 hover:[transform:scale(1.03)] duration-[250ms]"
        :data="coreFeatures"
      />
      <CardSolutionPicture
        class="h-[343px] lg:h-auto lg:col-span-2"
        :data="pictures.art"
      />
      <CardSolution
        :data="performanceBenefits"
        class="hover:[transform:scale(1.03)] duration-[250ms]"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
