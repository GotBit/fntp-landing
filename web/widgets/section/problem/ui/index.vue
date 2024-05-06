<script setup lang="ts">
const configPage = {
  title: 'The Problem FNTP Solves',
  text: 'While TC/IP provides a foundational service for network time synchronization, its limitations can have a tangible impact on blockchain speed and efficiency, affecting consensus mechanisms, smart contract execution, and overall network performance. By understanding these impacts and implementing FNTP, blockchain networks can enhance their resilience, accuracy, and speed, ensuring more secure and efficient operations.',
}
</script>
<template>
  <section class="fntp-section lg:gap-[56px] max-w-[971px] mx-auto">
    <h2 class="w-[80%] lg:w-full text-center">
      {{ configPage.title }}
    </h2>
    <div
      class="w-full py-[24px] px-[16px] lg:px-[32px] rounded-[24px] bg-fp-brand-surface border-fp-brand-primary border-[2px] animate-box-shadow"
    >
      <p class="text-center text-fp-brand-white">
        {{ configPage.text }}
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@keyframes opacity-box-shadow {
  0% {
    box-shadow: 0 1px 32px rgba(0, 156, 243, 0.3);
  }
  50% {
    box-shadow: 0 1px 42px rgba(0, 156, 243, 0.8);
  }
  0% {
    box-shadow: 0 1px 32px rgba(0, 156, 243, 0.3);
  }
}

.animate-box-shadow {
  box-shadow: 0 1px 32px rgba(0, 156, 243, 0.3);
  animation-delay: -2.5s;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  animation-name: opacity-box-shadow;
}
</style>
