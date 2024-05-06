<script setup lang="ts">
export interface IVerticalCardProps {
  transparent?: boolean
}
const props = defineProps<IVerticalCardProps>()
</script>

<template>
  <div
    class="relative rounded-[24px]"
    :class="[
      { '[background:var(--fp-brand-gradient)]': !transparent },
      { 'lg:[background:var(--fp-brand-gradient)]': transparent },
    ]"
  >
    <slot />
  </div>
</template>
