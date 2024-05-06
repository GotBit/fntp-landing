<script setup lang="ts"></script>
<template>
  <footer
    class="w-full py-[14px] lg:py-[16px] px-[16px] lg:px-[80px] bg-fp-brand-surface"
  >
    <div
      class="max-w-[1440px] w-full flex justify-center lg:justify-between items-center mx-auto"
    >
      <SvgoLogotip
        class="hidden lg:block w-[124px] h-[36px] mr-auto cursor-pointer"
        @click="scrollTop"
      />

      <div class="flex items-center gap-[56px]">
        <a
          @click="scrollTop"
          class="flex items-center gap-[8px] hover-active cursor-pointer"
        >
          <SvgoSocnetworksWorld class="w-[24px] h-[24px]" />
          <span class="text-fp-16 text-fp-brand-secondary">Main Page</span>
        </a>
        <a
          href="https://fntp.gitbook.io/fntp-white-paper/"
          target="_blank"
          class="flex items-center gap-[8px] hover-active cursor-pointer"
        >
          <SvgoSocnetworksBook class="w-[24px] h-[24px]" />
          <span class="text-fp-16 text-fp-brand-secondary">Gitbook</span>
        </a>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped></style>
