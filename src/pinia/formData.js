import { defineStore } from 'pinia'

export const useFormDataStore = defineStore('formData', {
  state: () => {
    return {
      currentPage: 1,
      name: '',
      email: '',
      phone: '',
    }
  },
  actions: {
    updateCurrentPage( e ) {
      this.currentPage = e.currentPage
    },
    updateName( e ) {
      this.name = e.name
    },
    updateEmail( e ) {
      this.email = e.email
    },
    updatePhone( e ) {
      this.phone = e.phone
    },
  },
})