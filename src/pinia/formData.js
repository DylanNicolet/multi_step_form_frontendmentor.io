import { defineStore } from 'pinia'

export const useFormDataStore = defineStore('formData', {
  state: () => {
    return {
      currentPage: 2,
      name: '',
      email: '',
      phone: '',
      planChoice: 'Arcade',
      optionsChoice: 'Monthly'
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
    updatePlanChoice( e ) {
      this.planChoice = e.planChoice
    },
    updateOptionsChoice( e ) {
      this.optionsChoice = e.optionsChoice
    }
  },
})