<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/cart";

const productCart = useCartStore();
const props = defineProps({
  data: Object,
});

const count = ref(0);
function increment() {
  count.value += 1;
  productCart.counterPlus(props.data?.id, "plus");
}
function decrement() {
  if (count.value <= 1) {
    return;
  }
  count.value -= 1;
  productCart.counterPlus(props.data?.id, "minus");
}

function deleteThis() {
  productCart.deleteCart(props.data?.id);
}

onMounted(() => {
  count.value = props.data?.count || 1;
});
</script>
<template>
  <div class="py-4 border-t border-gray-300 flex items-center">
    <input type="checkbox" class="w-5 h-5 mr-10" />
    <div class="content flex items-start">
      <router-link :to="'/products/' + props.data?.id">
        <img :src="props.data?.thumbnail" alt="cart-img" class="w-[100px]" />
      </router-link>
      <div class="info pl-10">
        <p class="w-full flex items-center justify-between mb-4">
          <router-link
            :to="'/product/' + props.data?.id"
            class="mr-2 text-gray-800"
            >{{ props.data?.title }}</router-link
          >
          <span
            class="flex items-center cursor-pointer text-gray-400 hover:text-gray-700 duration-200"
            @click="deleteThis"
          >
            <i class="bx bxs-trash text-xl mr-1"></i>
            <span class="text-sm">Yo'q qilish</span>
          </span>
        </p>
        <div class="flex justify-between items-start">
          <p class="text-sm">
            <span class="text-gray-400 mr-2">Sotuvchi:</span>
            <router-link to="#" class="text-gray-800">{{
              props.data?.brand
            }}</router-link>
          </p>
          <div class="flex items-start">
            <!-- counter -->
            <div
              class="flex mr-10 border border-gray-300 rounded-md overflow-hidden"
            >
              <button @click="increment" class="w-11 h-10 text-2xl text-black">
                +
              </button>
              <div
                class="w-11 h-10 text-xl text-black flex items-center justify-center"
              >
                {{ count }}
              </div>
              <button @click="decrement" class="w-11 h-10 text-2xl text-black">
                -
              </button>
            </div>

            <!-- sum -->
            <div class="text-end">
              <p class="text-lg text-gray-900 font-semibold">
                {{ props.data?.price }} $
              </p>
              <del class="text-gray-400 text-sm"
                >{{ +props.data?.price + 500 }} $</del
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: calc(100% - 20px - 40px);
}
.info {
  width: calc(100% - 100px);
}
</style>
