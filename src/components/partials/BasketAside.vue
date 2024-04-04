<script setup>
const props = defineProps({
  price: Number,
  count: Number,
});
</script>

<template>
  <div
    class="basket-aside border border-gray-300 p-4 flex flex-col rounded-lg gap-3"
  >
    <h3 class="text-[17px] mb-3 text-gray-800 font-semibold">Buyurtmangiz</h3>
    <div
      class="flex items-center justify-between text-sm text-gray-600 font-medium"
    >
      <p>Mahsulotlar({{ props?.count }}):</p>
      <p>{{ props.price + 500 * (props?.count || 0) || 0 }} $</p>
    </div>
    <p
      class="text-xs text-[#7000FF] border border-[#7000FF] font-semibold mb-1 py-1 text-center rounded"
    >
      Yetkazib berish
      {{
        +new Date().getDate() +
        1 +
        "." +
        (+new Date().getMonth() + 1) +
        "." +
        new Date().getFullYear()
      }}
      (ertaga)
    </p>
    <div class="flex items-start justify-between mb-3">
      <p class="text-sm text-gray-500 font-medium">Jami:</p>
      <div class="text-end">
        <p class="text-lg text-gray-800 font-semibold">
          {{ props.price || 0 }} $
        </p>
        <span class="text-green-500 font-medium text-xs">
          Tejovingiz: {{ 500 * (props?.count || 0) || 0 }} $
        </span>
      </div>
    </div>
    <button
      class="w-full bg-[#7000FF] text-white font-semibold text-sm py-3 rounded-lg"
    >
      To'lovga o'ting
    </button>
  </div>
</template>

<style scoped></style>
