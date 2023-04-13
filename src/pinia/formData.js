import { defineStore } from 'pinia'

export const useFormDataStore = defineStore('formData', {
  state: () => {
    return {
      currentPage: 1,
      name: '',
      email: '',
      phone: '',
      nameEmpty: "empty",
      emailEmpty: "empty",
      phoneEmpty: "empty",
      planChoice: 'Arcade',
      optionsChoice: 'Monthly',
      onlineServices: true,
      largerStorage: true,
      customizableProfile: false,
      thankYou: false,
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
    updateNameEmpty( e ) {
      this.nameEmpty = e.nameEmpty
    },
    updateEmailEmpty( e ) {
      this.emailEmpty = e.emailEmpty
    },
    updatePhoneEmpty( e ) {
      this.phoneEmpty = e.phoneEmpty
    },
    updatePlanChoice( e ) {
      this.planChoice = e.planChoice
    },
    updateOptionsChoice( e ) {
      this.optionsChoice = e.optionsChoice
    },
    updateOnlineServices( e ) {
      this.onlineServices = e.onlineServices
    },
    updateLargerStorage( e ) {
      this.largerStorage = e.largerStorage
    },
    updateCustomizableProfile( e ) {
      this.customizableProfile = e.customizableProfile
    },
    updateThankYou( e ) {
      this.thankYou = e.thankYou
    },
  },
})