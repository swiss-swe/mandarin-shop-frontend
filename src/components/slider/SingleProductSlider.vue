<script setup>
import { ref } from "vue";

const props = defineProps({
  images: Array,
});

const currentIndex = ref(0);
const img = ref(null);

function selectImg(i) {
  currentIndex.value = i;
  img.value = props?.images[i];
}
function changedByArrow(str) {
  if (str == "next") {
    if (currentIndex.value !== props.images?.length - 1) {
      currentIndex.value += 1;
    } else {
      currentIndex.value = 0;
    }
  } else {
    if (currentIndex.value === 0) {
      currentIndex.value = props.images?.length - 1;
    } else {
      currentIndex.value -= 1;
    }
  }
  img.value =
    props?.images[Math.abs(currentIndex.value) % props?.images.length];
}
</script>

<template>
  <section class="flex">
    <div
      class="w-1/4 sidebar flex flex-col gap-2 max-h-[430px] overflow-y-scroll sticky"
    >
      <img
        v-for="(image, index) in props?.images"
        :key="index"
        @click="selectImg(index)"
        class="w-full h-[100px] object-cover bg-gray-100"
        :src="image"
        :class="index == currentIndex ? 'border-2 border-[#7000FF]' : ''"
      />
    </div>
    <div class="w-3/4">
      <div class="h-[430px] relative px-4" v-for="i in [currentIndex]" :key="i">
        <span
          class="text-lg cursor-pointer text-gray-100 font-bold absolute top-1/2 left-2 -translate-y-1/2 bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center"
          @click="changedByArrow('prev')"
          >&#10094;
        </span>
        <img
          class="w-full h-full object-cover bg-gray-100"
          :src="img || (props.images?.length && props.images[0])"
        />
        <span
          class="text-lg cursor-pointer text-gray-100 font-bold absolute top-1/2 right-2 -translate-y-1/2 bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center"
          @click="changedByArrow('next')"
          >&#10095;
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sidebar::-webkit-scrollbar {
  display: none;
}
</style>
