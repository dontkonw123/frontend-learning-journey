import {defineStore} from 'pinia'
export const useCountStore = defineStore('count', {
  state: () => ({
      count: 0
  }),
  getters: {
    doubleCount:(state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    async asyncIncrement() {
      // 等待 1 秒钟
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.increment();
    },
  }
})