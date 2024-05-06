<script setup lang="ts">
export interface IPictureProps {
  path: string
  name?: string
}
const props = defineProps<IPictureProps>()
</script>

<template>
  <div>
    <picture>
      <source :srcset="`${props.path}.webp`" type="image/webp" />
      <img
        class="w-full h-full object-cover"
        :src="`${props.path}.png`"
        :alt="`Media picrute - ${props.name ?? 'FNTP'}`"
      />
    </picture>
  </div>
</template>

<style lang="scss" scoped></style>
