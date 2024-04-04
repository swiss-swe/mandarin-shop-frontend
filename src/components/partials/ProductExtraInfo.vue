<script setup>
import { UseProduct } from "../../composables/Product";

import ProductDesc from "../card/ProductDesc.vue";
import ProductCommentCard from "../card/ProductCommentCard.vue";

const { boolean1, boolean2, onComm, onDesc, activeTab } = UseProduct();
const props = defineProps({
  info: Object,
});
</script>

<template>
  <section class="header mb-6">
    <div class="div-card mt-6 xl:pl-80 lg:pl-40 border-y border-gray-400">
      <div class="flex gap-6">
        <h3
          class="font-medium title pb-5 pt-5 cursor-pointer"
          @click="onDesc"
          :class="{ active: activeTab === 'desc' }"
        >
          Mahsulot tavsifi
        </h3>
        <h3
          class="font-medium title pb-5 pt-5 cursor-pointer"
          @click="onComm"
          :class="{ active: activeTab === 'com' }"
        >
          Sharhlar
        </h3>
      </div>
    </div>
    <div class="px-5" v-if="boolean1">
      <ProductDesc
        :text="props.info?.description"
        :img="props.info?.thumbnail"
      />
    </div>
    <div v-if="boolean2" class="p-5 pt-8 xl:pl-80 lg:pl-40 md:pl-">
      <h2 class="text-2xl text-gray-800 title-card pb-5 w-[70%]">
        Hamma sharhlar
      </h2>
      <ProductCommentCard class="w-[70%]" />
    </div>
  </section>
</template>

<style scoped>
.active {
  color: purple;
  border-bottom: 2px solid purple; /* You can adjust the style as needed */
}

.title-card {
  border-bottom: 1px solid gray;
}

.title {
  position: relative;
  display: inline-block;
}

.title {
  position: relative;
  display: inline-block;
}
</style>
