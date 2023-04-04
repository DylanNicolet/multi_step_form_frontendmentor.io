import { defineStore } from 'pinia'

export const useFormDataStore = defineStore('formData', {
  state: () => {
    return {
      name: '',
      email: '',
      phone: 0
    }
  },
  actions: {
    updateFormData(e) {
      this.name = e.name
      this.email = e.email
      this.phone = e.phone
    },
  },
})