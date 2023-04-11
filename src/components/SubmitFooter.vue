<template>
    <section class="submit-footer">
        <button type="button" class="go-back-button" @click="handleGoBack">{{currentPage != 1 ? "Go Back" : ""}}</button>
        <button type="button" class="submit-button" @click="handleNextStep">Next Step</button>
    </section>
</template>

<script>
import { useFormDataStore } from '@/pinia/formData'
import { storeToRefs } from "pinia"

export default {
    setup() {
        
        const formData = useFormDataStore()
        const { currentPage } = storeToRefs( formData )

        function handleNextStep() {
            let validPersonalInfo = false

            if ( formData.name && formData.email && formData.phone ) {
                validPersonalInfo = true
            }
            if ( formData.currentPage === 1 && validPersonalInfo) {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage+1
                })
            }
        }

        function handleGoBack() {
            if ( formData.currentPage > 1 ) {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage - 1
                } )
            }
        }

        //Make setup values available to component
        return { handleNextStep, handleGoBack, currentPage }
    }
}
</script>