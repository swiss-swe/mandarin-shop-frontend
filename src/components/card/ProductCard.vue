<script setup>
import { ref, onMounted } from "vue";
import { useLikeStore } from "@/stores/like";
import { useCartStore } from "@/stores/cart";
import {
  writeToLocaleStorage,
  checkFromLocaleStorage,
} from "@/hooks/localeStorage";

const likeStore = useLikeStore();
const cartStore = useCartStore();
const props = defineProps({
  data: Object,
});

// added like
const addedLike = ref(false);
function addDataToLike() {
  addedLike.value = writeToLocaleStorage("myLike", likeStore, props.data);
}

// added cart
const addedCart = ref(false);
function addDataToCart() {
  addedCart.value = writeToLocaleStorage("myProduct", cartStore, props.data);
}

onMounted(() => {
  addedLike.value = checkFromLocaleStorage("myLike", props.data);
  addedCart.value = checkFromLocaleStorage("myProduct", props.data);
});
</script>

<template>
  <div
    class="w-full relative justify-around hover:shadow-lg shadow-gray-500 duration-500 ease-in-out cursor-pointer rounded-lg"
  >
    <!-- like -->
    <div class="absolute top-3 right-4" @click="addDataToLike">
      <i v-if="addedLike" class="bx bxs-heart text-2xl text-[#7000FF]"></i>
      <i v-else class="bx bx-heart text-2xl text-gray-500"></i>
    </div>
    <!-- img -->
    <router-link :to="'/products/' + props.data?.id" class="block w-full">
      <img
        class="rounded-lg w-full h-[250px] object-cover border border-gray-300"
        :src="props.data?.thumbnail"
        alt="product-img"
      />
    </router-link>
    <!-- info -->
    <div class="mt-[10px] p-[10px]">
      <router-link :to="'/products/' + props.data?.id">
        <h2>{{ props.data?.title }}</h2>
      </router-link>
      <div class="flex mb-[10px]">
        <i class="bx bxs-star text-sm text-yellow-400"></i>
        <span class="text-[15px] text-gray-500 pl-[5px]"
          >{{ props.data?.rating }} (273 оценки)</span
        >
      </div>
      <span class="bg-yellow-300 rounded-md py-[1px] px-[2px]"
        >9 611 сум/мес</span
      >
      <span class="block text-[12px] text-gray-500 mt-[10px]"
        ><s>{{ +props.data?.price + 1000 }} сум</s></span
      >

      <div class="flex justify-between">
        <div>
          <h4>{{ props.data?.price }} сум</h4>
        </div>

        <div
          @click="addDataToCart"
          class="w-8 h-8 flex items-center justify-center rounded-full border duration-200"
          :class="
            addedCart
              ? 'bg-[#7000FF] text-white'
              : 'border-gray-300 hover:bg-gray-200 bg-white text-gray-800'
          "
        >
          <i class="bx bx-shopping-bag text-lg"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
