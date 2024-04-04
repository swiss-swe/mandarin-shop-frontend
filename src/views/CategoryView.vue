<script setup>
import ProductSidebar from "../components/partials/product-sidebar.vue";
import ProductCard from "../components/card/ProductCard.vue";
import { useRoute } from "vue-router";
import { ref, onMounted, onUpdated, watch } from "vue";
import { useProductStore } from "@/stores/product";
import Loader from "@/components/ui_element/Loader.vue";
import NotFound from "@/components/ui_element/NotFound.vue";
import { useCategoryStore } from "@/stores/category";
import Paginate from "vuejs-paginate-next";

const categoryStore = useCategoryStore();
const route = useRoute();
const productStore = useProductStore();
const page = ref(0);
const limit = 10;

const getAll = () => {
  if (route.query?.filter) {
    page.value = 0;
    productStore.getByFilter(route.query?.filter, limit, limit * page.value);
  } else if (route.query?.search) {
    page.value = 0;
    productStore.getBySearch(route.query?.search);
  } else {
    page.value = 0;
    productStore.getProducts(limit, limit * page.value);
  }
};

const paginationFunction = () => {
  console.log(page.value);
};

const selectCategory = (e) => {
  page.value = 0;
  productStore.getByFilter(e.target.value, limit, limit * page.value);
};

const query = ref("");
onUpdated(() => {
  query.value = route.query?.filter || route.query?.search;
});
watch(query, getAll);

onMounted(() => {
  query.value = route.query?.filter;
});
</script>
<template>
  <div class="category">
    <div class="container flex pt-4">
      <ProductSidebar class="w-[300px]" />
      <div class="content pb-10">
        <!-- title -->
        <div class="px-1 mb-3">
          <h1 class="text-2xl font-bold capitalize">
            {{ route.query?.filter || "Qidiruv: " + route.query?.search }}
          </h1>
          <p class="text-gray-400">
            {{ productStore.products.data?.length || 0 }}ta tovar
          </p>
        </div>

        <!-- filter -->
        <div class="px-1 flex items-center mb-4">
          <span class="text-sm text-gray-400">Saralash</span>
          <select class="outline-none ml-3" @change="selectCategory">
            <option
              v-for="(item, index) in categoryStore.categories.data"
              :key="index + '-select-item'"
              :value="item"
              class="text-capitalize"
            >
              {{ item }}
            </option>
          </select>
        </div>

        <!-- grid -->
        <Loader v-if="productStore.products.loading" />
        <div class="mb-8" v-else>
          <div
            v-if="productStore.products.data?.length > 0"
            class="flex flex-wrap"
          >
            <div
              class="w-1/4 p-1"
              v-for="(item, index) in productStore.products.data"
              :key="index + 'product-item'"
            >
              <ProductCard :data="item" />
            </div>
          </div>
          <NotFound
            v-else
            url="/"
            title="Bunday maxsulot mavjud emas"
            info="Boshqa turdagi maxsulotlarni harid qilishingiz"
          />
        </div>

        <!-- pagination -->
        <Paginate
          v-if="productStore.products.total / limit > 1"
          v-model="page"
          :page-count="Math.ceil(productStore.products.total / limit)"
          :page-range="3"
          :margin-pages="2"
          :click-handler="paginationFunction"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </Paginate>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: calc(100% - 300px);
}
</style>
