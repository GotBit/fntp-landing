<script setup lang="ts">
export interface IHorizontCardProps {
  data: (
    | string
    | {
        text: string
      }
  )[]
}
const props = defineProps<IHorizontCardProps>()
</script>
<template>
  <Card class="pt-[24px] lg:pt-[32px] pb-[32px] px-[16px] lg:px-[24px]">
    <p class="text-fp-14 lg:text-fp-16 leading-[22.4px] text-fp-brand-white">
      <span v-for="item in data">
        <span v-if="typeof item === 'string'">
          {{ item }}
        </span>
        <span v-if="typeof item !== 'string'" class="text-fp-brand-primary font-medium">
          {{ item.text }}
        </span>
      </span>
    </p>
  </Card>
</template>
<style lang="scss" scoped></style>
