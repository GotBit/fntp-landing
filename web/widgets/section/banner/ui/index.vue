<script setup lang="ts">
const configPage = {
  title: 'FNTP',
  subtitle: '(Fast Net Transport Protocol)',
  text: "revolutionizes blockchain connectivity with speeds up to 50 times faster than current standards. Addressing scalability, efficiency, and security, it powers rapid transaction processing, ensures top-notch security, and supports blockchain's growth. FNTP's advanced technology, including Packet 2.0, enhances data transmission, paving the way for innovative decentralized applications. Join us in driving the next evolution of digital infrastructure with FNTP.",
  button: {
    visibility: true,
    text: 'White paper',
    onRedirect: () => {
      window.open('https://fntp.gitbook.io/fntp-white-paper/', '_blank')
    },
  },
}
</script>
<template>
  <article
    class="relative flex justify-center w-full h-full max-h-[812px] lg:h-[800px] overflow-y-hidden overflow-x-clip liner-gradient fix-browser"
  >
    <ICircle
      :size="544"
      :opacity="0.5"
      color="#057BB1"
      class="absolute z-[1] right-[-170px] top-[-71px] hidden lg:block"
    />
    <ICircle
      :size="470"
      :opacity="0.6"
      class="absolute z-[2] left-[50%] top-[45%] translate-x-[-50%] translate-y-[-50%] hidden lg:block"
    />
    <ICircle
      :size="509"
      :opacity="0.3"
      class="absolute z-[1] left-[50%] bottom-[-30px] translate-x-[-50%] lg:hidden"
    />

    <Picture
      path="/images/bg"
      :name="configPage.title"
      class="w-full h-full absolute z-[1] left-0 top-0 hidden sm:block"
    />
    <Picture
      path="/images/bg-mob"
      :name="configPage.title"
      class="w-full h-[509px] absolute z-[1] left-0 bottom-[-53px] block sm:hidden"
    />

    <div
      class="relative z-20 pt-[96px] lg:pt-[368px] pb-[32px] lg:pb-[40px] px-[16px] mt-auto"
    >
      <h1 class="w-full text-center leading-[96px] lg:leading-[100px]">
        {{ configPage.title }}
      </h1>
      <h2
        class="w-full text-center leading-[43.2px] lg:leading-[64px] mb-[26px] lg:mb-[32px]"
      >
        {{ configPage.subtitle }}
      </h2>
      <div class="flex flex-col gap-[228px] lg:gap-[64px]">
        <p
          class="max-w-[907px] text-center text-fp-brand-secondary leading-[19.6px] lg:leading-[22.4px] tracking-[0.2px]"
        >
          {{ configPage.text }}
        </p>
        <Button
          class="mx-auto w-full lg:w-auto"
          primary
          v-if="configPage.button.visibility"
          @click="configPage.button.onRedirect"
        >
          {{ configPage.button.text }}
        </Button>
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
.liner-gradient {
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 375px) {
    &::after {
      background: linear-gradient(180deg, rgba(21, 24, 27, 0) 46.84%, #131314 87.66%);
    }
  }

  @media screen and (min-width: 431px) {
    &::after {
      background: linear-gradient(180deg, rgba(21, 24, 27, 0) 10.84%, #131314 87.66%);
    }
  }

  @media screen and (min-width: 800px) {
    &::after {
      background: linear-gradient(180deg, rgba(21, 24, 27, 0) 0%, #131314 82.84%);
    }
  }
}
</style>
