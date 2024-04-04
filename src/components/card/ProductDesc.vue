<script setup>
const props = defineProps({
  text: String,
  img: String,
});
</script>

<template>
  <div
    class="mt-14 px-10 xl:w-[54%] lg:w-[75%] md:w-[100%] md:px-3 sm:w-[100%] sm:px-1 mx-auto"
  >
    <span class="text-xs font-medium mb-3 block">
      {{ props.text }}. Ushbu majmua bolalar slaydlari va osilgan
      belanchaklarning kombinatsiyasi bo'lib, faol o'yinlar va o'yin-kulgilar
      uchun ideal joy yaratadi. Farzandingiz yorqin slayddan dumalab, xavfsiz
      osilgan belanchakda suzish imkoniyatidan xursand bo'ladi.</span
    >
    <img class="mt-1 pb-4 w-full" :src="props.img" alt="" />
  </div>
</template>

<style lang="scss" scoped></style>
