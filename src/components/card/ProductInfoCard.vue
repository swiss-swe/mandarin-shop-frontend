<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section class="pl-16">
    <div class="flex items-center justify-between">
      <span class="flex items-center text-gray-400 text-sm">
        <i class="bx bxs-star text-yellow-400 mr-1"></i>
        <span>{{ props.data?.rating }} (o'rtacha baxo)</span>
      </span>
    </div>
    <h2 class="text-gray-700 text-2xl mt-1 mb-4 font-semibold">
      {{ props.data?.title }}
    </h2>
    <p class="text-gray-500 text-sm mb-1 flex">Yetkazib beris: 1 kun</p>
    <p class="text-gray-500 text-sm mb-3 flex">
      <span class="mr-4">Sotuvchi:</span> <span>{{ props.data?.brand }}</span>
    </p>
    <span class="text-gray-800 font-semibold">Narx:</span>
    <p class="flex items-center mb-8">
      <span class="text-xl text-gray-800 mr-16 font-semibold"
        >{{ props.data?.price }}$</span
      >
      <del class="text-gray-400 text-xl">{{ props.data?.price + 500 }}$</del>
      <span
        class="py-1 px-3 ml-5 bg-[#7000FF] text-white text-xs font-semibold rounded-md"
        >Aksiya</span
      >
    </p>
    <div class="flex gap-x-2 mb-4">
      <button
        class="outline-none border border-[#7000ff] bg-[#7000ff] font-semibold text-lg text-white rounded-lg py-4 w-1/2"
      >
        Savatga qo'shish
      </button>
      <button
        class="outline-none border border-[#7000ff] text-[#7000ff] font-semibold text-lg rounded-lg py-4 w-1/2"
      >
        Xarid qilish
      </button>
    </div>
    <div class="bg-red-100 py-2 px-8 rounded-lg flex items-center">
      <i class="bx bx-shopping-bag mr-2 text-2xl"></i>
      <span class="">Bu haftada 423 kishi sotib oldi</span>
    </div>
  </section>
</template>

<style scoped></style>
