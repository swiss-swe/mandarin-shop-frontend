import { defineStore } from "pinia";

export const useLikeStore = defineStore("myLike", {
  state: () => ({
    likeData: [],
    length: 0,
  }),
  actions: {
    // ALL DATA
    getAll() {
      this.likeData = JSON.parse(globalThis?.localStorage?.getItem("myLike"));
    },

    // ADD TO CART
    addCart(data) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("myLike"));
      if (this.likeData.length === 0 && old != null) {
        this.likeData = [...old];
      }
      this.likeData.push(data);
      this.saveLike();
    },

    // DELETE FROM CART
    deleteCart(id) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("myLike"));
      this.likeData = old?.filter((item) => item.id !== id);
      this.saveLike();
    },

    // EMPTY CART
    empty() {
      this.likeData = [];
      this.saveLike();
    },

    // SAVE TO LOCALSTRORAGE
    saveLike() {
      globalThis?.localStorage?.setItem(
        "myLike",
        JSON.stringify(this.likeData)
      );
    },
  },
  getters: {
    getLike(state) {
      const cardDataToObj = globalThis?.localStorage?.getItem("myLike") || "[]";
      state.likeData = JSON.parse(cardDataToObj);
      return state.likeData;
    },
  },
});
