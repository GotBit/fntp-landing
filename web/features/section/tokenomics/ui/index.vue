<script setup lang="ts">
import { tokenomics } from '../model'
import { TokenomicItem } from '@/entities/section/tokenomics/ui/'

const graph = ref()
const selected = ref()

const onTouchGraph = (e: { target: HTMLInputElement }) => {
  if (e.target.tagName === 'path')
    if (e.target.dataset.set === 'graph_slice')
      selected.value = Number(e.target.id.replace(/i-\w+#/g, ''))
}
const unTouchGraph = () => {
  selected.value = undefined
}

const onTouchTable = (index: number) => {
  const _graph = unref(graph).$el.querySelectorAll('g path')
  _graph[index].dataset.active = true
}
const unTouchTable = (index: number) => {
  const _graph = unref(graph).$el.querySelectorAll('g path')
  _graph[index].dataset.active = false
}
</script>
<template>
  <Card
    class="flex items-center flex-col md:flex-row md:justify-between gap-[24px] md:gap-[32px] md:py-[32px] md:px-[24px] max-w-[343px] md:max-w-[unset] mx-auto md:mx-[unset]"
  >
    <SvgoGraph
      ref="graph"
      class="w-[319px] lg:w-[506px] h-[286px] lg:h-[453px] mx-[auto] mt-[24px]"
      @mouseover="onTouchGraph"
      @mouseout="unTouchGraph"
    />
    <div class="flex flex-col gap-[8px] p-[24px] rounded-[20px] bg-fp-brand-black">
      <TokenomicItem
        @mouseover="onTouchTable(index)"
        @mouseout="unTouchTable(index)"
        v-for="(item, index) in tokenomics"
        :key="item.title"
        :data="item"
        :active="index == selected"
      />
    </div>
  </Card>
</template>
<style lang="scss" scoped></style>
