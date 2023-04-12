<template>
    <form class="add-on__form">
        <h1 class="title">Pick add-ons</h1>
        <p class="description">Add-ons help enhance your gaming experience</p>

        <section 
        class="add-on__container" 
        :class='(onlineServices ? "--active" : undefined)'
        @click="handleOnlineServicesClicked()"
        >
            <input type="checkbox" :checked="onlineServices ? true : false">
            <section class="add-on__text">
                <h2 class="add-on__title">Online Service</h2>
                <p class="add-on__description">Access to multiplayer games</p>
            </section>
            <p class="add-on__price">+${{optionsChoice === "Monthly" ? "1" : "10"}}/mo</p>
        </section>

        <section 
        class="add-on__container" 
        :class='(largerStorage ? "--active" : undefined)'
        @click="handleLargerStorageClicked()"
        >
            <input type="checkbox" :checked="largerStorage ? true : false">
            <section class="add-on__text">
                <h2 class="add-on__title">Larger Storage</h2>
                <p class="add-on__description">Extra 1TB of cloud save</p>
            </section>
            <p class="add-on__price">+${{ optionsChoice === "Monthly" ? "2" : "20" }}/mo</p>
        </section>

        <section 
        class="add-on__container" 
        :class='(customizableProfile ? "--active" : undefined)'
        @click="handleCustomisableProfileClicked()"
        >
            <input type="checkbox" :checked="customizableProfile ? true : false">
            <section class="add-on__text">
                <h2 class="add-on__title">Customisable profile</h2>
                <p class="add-on__description">Custom theme on your profile</p>
            </section>
            <p class="add-on__price">+${{ optionsChoice === "Monthly" ? "2" : "20" }}/mo</p>
        </section>
    </form>
</template>

<script>
import { useFormDataStore } from '@/pinia/formData';
import { storeToRefs } from "pinia"

export default {
    setup() {

        const formData = useFormDataStore()

        //States
        const { onlineServices, largerStorage, customizableProfile, optionsChoice } = storeToRefs( formData )

        function handleOnlineServicesClicked() {
            formData.updateOnlineServices( {
                onlineServices: !formData.onlineServices
            } )
        }

        function handleLargerStorageClicked() {
            formData.updateLargerStorage( {
                largerStorage: !formData.largerStorage
            } )
        }

        function handleCustomisableProfileClicked() {
            formData.updateCustomizableProfile( {
                customizableProfile: !formData.customizableProfile
            } )
        }

        //Make setup values available to component
        return { handleOnlineServicesClicked, handleLargerStorageClicked, handleCustomisableProfileClicked,onlineServices, largerStorage, customizableProfile, optionsChoice }
    }
}
</script>