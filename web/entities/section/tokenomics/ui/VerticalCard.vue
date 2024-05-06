<script setup lang="ts">
export interface IVerticalCardProps {
  data: {
    name: string
    value: string
  }
}
const props = defineProps<IVerticalCardProps>()
</script>
<template>
  <Card
    class="vertical-card flex flex-col justify-between gap-[26px] pt-[16px] lg:pt-[24px] pb-[24px] px-[24px]"
  >
    <span class="text-fp-16 text-fp-brand-secondary uppercase">
      {{ props.data.name }}
    </span>
    <h4 class="text-fp-brand-white duration-[250ms]">
      {{ props.data.value }}
    </h4>
  </Card>
</template>
<style lang="scss" scoped>
.vertical-card:hover h4 {
  color: var(--fp-brand-primary);
}
</style>
