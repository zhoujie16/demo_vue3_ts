import { defineStore } from "pinia";

export const useDemo2Store = defineStore("demo2", {
  state: () => {
    return { test_txt: "hello" };
  },
  actions: {
    // 同步更新
    updateTestTxt(st: any) {
      this.test_txt = st;
    },
    // 异步更新
    async updateTestTxtAsync(st: any) {
      await new Promise((r) => setTimeout(r, 500));
      this.test_txt = st;
    },
  },
});
