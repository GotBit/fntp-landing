<script setup lang="ts">
import IGraph from '@/features/section/tokenomics/ui/index.vue'
import {
  HorizontCard,
  VerticalCard,
  PictureCard,
} from '@/entities/section/tokenomics/ui/'
import { tokenomicsHorizont, tokenomicsVertical, tokenomicsPicture } from '../model'

const configPage = {
  title: '$FNTP Tokenomics',
}
</script>
<template>
  <section class="fntp-section lg:gap-[80px]">
    <h2 class="w-full text-center">
      {{ configPage.title }}
    </h2>
    <div class="flex flex-col gap-[24px] lg:gap-[16px]">
      <div
        class="grid md:grid-cols-[minmax(356px,1fr)_auto] gap-[8px] lg:gap-[16px] justify-center"
      >
        <div class="flex flex-col gap-[8px] lg:gap-[16px]">
          <HorizontCard
            class="hover:[transform:scale(1.03)] duration-[250ms]"
            v-for="item in tokenomicsHorizont"
            :data="item"
            :key="tokenomicsHorizont.indexOf(item)"
          />
        </div>
        <div class="grid grid-cols-2 tb:grid-cols-4 gap-[8px] lg:gap-[16px]">
          <VerticalCard
            class="hover:[transform:scale(1.03)] duration-[250ms]"
            v-for="item in tokenomicsVertical"
            :data="item"
            :key="item.name"
          />
        </div>
      </div>

      <div
        class="grid grid-rows-[auto,240px] lg:grid-rows-2 tb:grid-rows-1 tb:grid-cols-[auto_minmax(200px,411px)] gap-[18px] lg:gap-[16px]"
      >
        <IGraph />
        <PictureCard
          class="max-w-[319px] md:max-w-[unset] mx-auto"
          :data="tokenomicsPicture"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
