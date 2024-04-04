<script setup>
const props = defineProps({
  url: String,
  title: String,
  info: String,
});
</script>

<template>
  <div class="w-full h-[60vh] flex flex-col items-center justify-center">
    <img
      src="../../assets//images/ui/basket.jpg"
      alt="img"
      class="w-[150px] mb-2"
    />
    <h2 class="text-center text-2xl font-semibold text-gray-900">
      {{ props.title }}
    </h2>
    <p class="text-center text-sm my-2">{{ props.info }}</p>
    <router-link to="/" class="text-[#7000FF]"
      >Bosh sahifaga qaytish</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
