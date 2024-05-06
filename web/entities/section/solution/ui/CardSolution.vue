<script setup lang="ts">
export interface ICardSolutionProps {
  data: {
    title: string
    subtitle?: string
    text?: string[]
    list?: {
      title: string
      text: string
    }[]
  }
}
const props = defineProps<ICardSolutionProps>()
</script>
<template>
  <Card
    class="grid lg:grid-rows-[minmax(2em,3em)_auto] xl:grid-rows-[2em_auto] gap-[32px] lg:gap-[56px] px-[16px] lg:px-[32px] pt-[24px] lg:pt-[32px] pb-[48px] lg:pb-[40px]"
  >
    <h3 class="text-fp-brand-primary w-full xl:whitespace-nowrap">
      {{ props.data.title }}
    </h3>
    <div
      class="flex flex-col gap-[8px] lg:gap-[24px]"
      v-if="props.data.subtitle || props.data.text"
    >
      <span
        class="text-fp-brand-white text-fp-16 leading-[22.4px]"
        v-if="props.data.subtitle"
      >
        {{ props.data.subtitle }}
      </span>
      <div v-if="props.data.text" class="w-[95%]">
        <p
          class="text-fp-brand-secondary text-fp-16 leading-[22.4px]"
          v-for="itemText in props.data.text"
          :key="itemText"
        >
          {{ itemText }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-[32px]" v-if="props.data.list">
      <div
        class="flex flex-col gap-[8px]"
        v-for="itemList in props.data.list"
        :key="itemList.title"
      >
        <h4 class="text-fp-brand-white">
          {{ itemList.title }}
        </h4>
        <p class="text-fp-brand-secondary text-fp-16">
          {{ itemList.text }}
        </p>
      </div>
    </div>
  </Card>
</template>
<style lang="scss" scoped></style>
