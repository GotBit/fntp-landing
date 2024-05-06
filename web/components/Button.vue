<script setup lang="ts">
export interface IButtonProps {
  primary?: boolean
}
const props = defineProps<IButtonProps>()
const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="px-[40px] py-[13px] flex justify-center items-center transition-all rounded-[8px]"
    :class="{
      'text-fp-brand-white bg-fp-brand-primary hover:bg-fp-brand-primary-hover active:bg-fp-brand-primary-active duration-[250ms]':
        props.primary,
    }"
    @click="emit('click')"
  >
    <div
      class="grow shrink basis-0 text-center text-fp-16 swit leading-[22.4px] tracking-[0.2px]"
    >
      <slot />
    </div>
  </button>
</template>

<style lang="scss" scoped></style>
