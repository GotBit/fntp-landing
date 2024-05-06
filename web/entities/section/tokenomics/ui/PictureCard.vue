<script setup lang="ts">
export interface IPictureCardProps {
  data: {
    title: string
    path: string
  }
}
const props = defineProps<IPictureCardProps>()
</script>
<template>
  <Card class="overflow-hidden gradient w-full h-full">
    <Picture
      class="absolute left-0 top-0 w-full h-full z-10"
      :path="props.data.path"
      :name="'Art' + props.data?.title ?? ''"
    />
    <div
      class="absolute max-w-[332px] right-[16px] lg:right-[38px] bottom-[32px] lg:bottom-[40px] z-30"
    >
      <h3 class="text-fp-brand-white text-right leading-[43.2px] lg:leading-[44.8px]">
        {{ props.data.title }}
      </h3>
    </div>
  </Card>
</template>
<style lang="scss" scoped>
.gradient::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  background: linear-gradient(
    194.97deg,
    rgba(0, 0, 0, 0.1) 4.92%,
    rgba(0, 0, 0, 1) 89.45%
  );
}
</style>
