import { defineStore } from "pinia";

export const useCartStore = defineStore("productCart", {
  state: () => ({
    cartData: [],
    length: 0,
  }),
  actions: {
    // ALL DATA
    getAll() {
      this.cartData = JSON.parse(
        globalThis?.localStorage?.getItem("myProduct")
      );
    },

    // ADD TO CART
    addCart(data) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("myProduct"));
      if (this.cartData.length === 0 && old != null) {
        this.cartData = [...old];
      }
      this.cartData.push(data);
      this.saveProduct();
    },

    // DELETE FROM CART
    deleteCart(id) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("myProduct"));
      this.cartData = old?.filter((item) => item.id !== id);
      this.saveProduct();
    },

    // EMPTY CART
    empty() {
      this.cartData = [];
      this.saveProduct();
    },

    // INCREMENT
    counterPlus(id, type) {
      let index = null;
      let selectArr = null;

      let old = JSON.parse(globalThis?.localStorage?.getItem("myProduct"));
      if (this.cartData.length === 0 && old != null) {
        this.cartData = [...old];
      }
      this.cartData.forEach((item, i) => {
        if (item.id === id) {
          selectArr = item;
          index = i;
        }
      });

      if (type === "plus") {
        selectArr.count += 1;
      } else {
        selectArr.count -= 1;
      }

      this.cartData.splice(index, 1, selectArr);
      this.saveProduct();
    },

    // SAVE TO LOCALSTRORAGE
    saveProduct() {
      globalThis?.localStorage?.setItem(
        "myProduct",
        JSON.stringify(this.cartData)
      );
    },
  },
  getters: {
    getProduct(state) {
      const cardDataToObj =
        globalThis?.localStorage?.getItem("myProduct") || "[]";
      state.cartData = JSON.parse(cardDataToObj);
      return state.cartData;
    },
    getTotalPrice(state) {
      const totalPrice = state.cartData?.reduce((acc, item) => {
        return (acc += item?.price * item?.count);
      }, 0);
      return totalPrice;
    },
    getTotalCount(state) {
      const totalCount = state.cartData?.reduce((acc, item) => {
        return (acc += item?.count);
      }, 0);
      return totalCount;
    },
  },
});
