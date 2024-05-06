<script setup lang="ts">
export interface ICardSolutionPictureProps {
  data: {
    title?: string
    subtitle?: string
    path: string
    gradient: string
  }
}
const props = defineProps<ICardSolutionPictureProps>()
</script>
<template>
  <Card class="overflow-hidden gradient" :class="`gradient-${props.data.gradient}`">
    <Picture
      class="absolute left-0 top-0 w-full h-full z-10"
      :path="props.data.path"
      :name="'Art' + props.data?.title ?? ''"
    />
    <div
      class="absolute max-w-[332px] left-[16px] lg:left-[40px] bottom-[32px] lg:bottom-[64px] z-30"
    >
      <h5 class="text-fp-brand-white leading-[43.2px] lg:leading-[52px]">
        {{ props.data.title }}
      </h5>
      <span
        class="text-fp-24 lg:text-fp-32 leading-[31.2px] lg:leading-[41.6px] text-fp-brand-white"
      >
        {{ props.data.subtitle }}
      </span>
    </div>
  </Card>
</template>
<style lang="scss" scoped>
.gradient {
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
  }

  &-bottom::after {
    background: linear-gradient(180.17deg, rgba(0, 0, 0, 0) 54.93%, #000000 99.85%);
  }
  &-left::after {
    background: linear-gradient(76.63deg, #000000 22.79%, rgba(0, 0, 0, 0) 100%);
  }
}
</style>
