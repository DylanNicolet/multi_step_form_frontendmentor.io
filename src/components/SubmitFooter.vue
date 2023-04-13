<template>
    <section class="submit-footer" v-if="!thankYou">
        <button type="button" class="go-back-button" @click="handleGoBack">{{currentPage != 1 ? "Go Back" : ""}}</button>
        <button type="button" class="next-step" @click="handleNextStep" v-if="currentPage != 4">Next Step</button>
        <button type="submit" class="confirm" @click="handleConfirm" v-if="currentPage === 4">Confirm</button>
    </section>
</template>

<script>
import { useFormDataStore } from '@/pinia/formData'
import { storeToRefs } from "pinia"

export default {
    setup() {
        
        const formData = useFormDataStore()
        
        const { currentPage,
            thankYou,
            name,
            email,
            phone,
            nameEmpty,
            emailEmpty,
            phoneEmpty,
            planChoice,
            optionsChoice,
            onlineServices,
            largerStorage,
            customizableProfile
        } = storeToRefs( formData )

        function handleNextStep() {
            let validPersonalInfo = false

            if (
                formData.validName != "--invalid" &&
                formData.validEmail != "--invalid" &&
                formData.validPhone != "--invalid" &&
                formData.name &&
                formData.email &&
                formData.phone
            ) {
                validPersonalInfo = true
            }

            if ( !formData.name ) {
                formData.updateNameEmpty( {
                    nameEmpty : "required"
                })
            }
            else if ( formData.name ) {
                formData.updateNameEmpty( {
                    nameEmpty: "empty"
                } )
            }

            if ( !formData.email ) {
                formData.updateEmailEmpty( {
                    emailEmpty: "required"
                } )
            }
            else if ( formData.email ) {
                formData.updateEmailEmpty( {
                    emailEmpty: "empty"
                } )
            }

            if ( !formData.phone ) {
                formData.updatePhoneEmpty( {
                    phoneEmpty: "required"
                } )
            }
            else if ( formData.phone ) {
                formData.updatePhoneEmpty( {
                    phoneEmpty: "empty"
                } )
            }

            if ( formData.currentPage === 1 && validPersonalInfo) {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage+1
                } )
                return
            }
            else if ( formData.currentPage === 2 || formData.currentPage === 3 ) {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage + 1
                } )
            }
        }

        function handleGoBack() {
            if ( formData.currentPage > 1 ) {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage - 1
                } )
            }
        }

        function handleConfirm() {
            let allUserData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                planChoice: formData.planChoice,
                optionsChoice: formData.optionsChoice,
                onlineServices: formData.onlineServices,
                largerStorage: formData.largerStorage,
                customizableProfile: formData.customizableProfile
            }

            console.log(allUserData)

            formData.updateThankYou( {
                thankYou: true
            } ) 
        }

        //Make setup values available to component
        return {
            handleNextStep,
            handleGoBack,
            handleConfirm,
            currentPage,
            thankYou,
            name,
            email,
            phone,
            nameEmpty,
            emailEmpty,
            phoneEmpty,
            planChoice,
            optionsChoice,
            onlineServices,
            largerStorage,
            customizableProfile
        }
    }
}
</script>