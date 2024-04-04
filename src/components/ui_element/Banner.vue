<script setup>
const props = defineProps({
  link: String,
  img: String,
});
</script>

<template>
  <section class="container">
    <router-link
      :to="props.link"
      class="block w-full h-[60vh] rounded-lg overflow-hidden"
    >
      <img
        :src="props.img"
        alt="banner-img"
        class="w-full h-full object-cover duration-200 hover:scale-105"
      />
    </router-link>
  </section>
</template>

<style lang="scss" scoped></style>
