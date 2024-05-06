<script setup lang="ts">
export interface ITokenomicItemProps {
  data: {
    color: string
    title: string
    value: number
  }
  active: boolean
}
const props = defineProps<ITokenomicItemProps>()

const hoverItem = ref(false)
</script>
<template>
  <div
    @mouseover="hoverItem = true"
    @mouseout="hoverItem = false"
    class="flex justify-between items-center w-[295px] lg:w-[220px]"
  >
    <div class="flex items-center gap-[8px]">
      <span class="w-[16px] h-[16px] rounded-[2px] box" />
      <span
        class="text-fp-brand-secondary text-fp-16 duration-[250ms]"
        :class="{ active: props.active || hoverItem }"
      >
        {{ props.data.title }}
      </span>
    </div>
    <div>
      <slot />
    </div>
    <span
      class="text-fp-brand-white text-fp-16 duration-[250ms]"
      :class="{ active: props.active || hoverItem }"
    >
      {{ props.data.value }}%
    </span>
  </div>
</template>
<style lang="scss" scoped>
.box {
  --color-box: v-bind(props.data.color);
  background-color: var(--color-box);
}

.active {
  color: #009cf3;
}
</style>
