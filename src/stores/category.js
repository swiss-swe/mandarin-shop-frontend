import { defineStore } from "pinia";
import axios from "../api/axios";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: {
      loading: false,
      data: null,
      error: null,
    },
  }),
  actions: {
    async getCategory() {
      this.categories.loading = true;
      try {
        const res = await axios.get("/products/categories");
        this.categories.data = res.data;
      } catch (error) {
        this.categories.error = error;
      } finally {
        this.categories.loading = false;
      }
    },
  },
});
