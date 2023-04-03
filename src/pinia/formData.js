import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
        return {
            name: 'Dylan',
            email: 'dylan@dylan.com',
            phone: 92342345
        }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})