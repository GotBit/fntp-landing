<script setup lang="ts">
export interface ITokenomicItemProps {
  data: {
    title?: string
    text?: string
    path?: string
  }
  index: number
}
const props = defineProps<ITokenomicItemProps>()
</script>
<template>
  <Card
    class="case-card overflow-hidden py-[24px] lg:py-[32px] px-[16px] lg:px-[32px]"
    :class="{ 'gradien-case min-h-[240px]': props.data.path }"
  >
    <Picture
      v-if="props.data.path"
      class="absolute right-[-35px] lg:right-[-101px] top-[10px] lg:top-0 lg:w-[546.64px] lg:h-[546.64px] z-10 scale-[1.5] lg:scale-[1.1]"
      :path="props.data.path"
      :name="'Art cases'"
    />

    <div v-if="props.data.title" class="flex flex-col gap-[24px] lg:gap-[32px]">
      <h4
        class="text-fp-brand-white duration-[250ms]"
        :class="{ 'lg:w-[50%]': index == 1 || index == 3 }"
      >
        {{ props.data.title }}
      </h4>
      <p class="text-fp-brand-secondary text-fp-16">
        {{ props.data.text }}
      </p>
    </div>
  </Card>
</template>
<style lang="scss" scoped>
.case-card {
  will-change: transform;
  transform-style: preserve-3d;
  transition: all linear 0.25s;

  &:not(.gradien-case):hover {
    transform: scale(1.03);

    h4 {
      color: var(--fp-brand-primary);
    }
  }
}

.gradien-case::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  background: linear-gradient(209.25deg, rgba(0, 0, 0, 0) 24.37%, #000000 88.04%);
}
</style>
