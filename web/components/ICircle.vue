<script setup lang="ts">
interface ICircleProps {
  opacity?: number
  color?: string
  blur?: number
  size: number
}

const props = withDefaults(defineProps<ICircleProps>(), {
  opacity: 1,
  color: '#78B6FF',
  blur: 160,
  size: 100,
})
</script>
<template>
  <div class="flex circle-color" />
</template>
<style lang="scss" scoped>
.circle-color {
  --bg-color: v-bind(props.color);
  --bg-blur: v-bind(`${props.blur}px`);
  --bg-opacity: v-bind(props.opacity);
  --size: v-bind(`${props.size}px`);

  background-color: var(--bg-color);
  filter: blur(var(--bg-blur));
  opacity: var(--bg-opacity);
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
}
</style>
