<template>
    <section class="submit-footer">
        <button type="button" class="submit-button" @click="handleNextStep">Next Step</button>
    </section>
</template>

<script>
import { useFormDataStore } from '@/pinia/formData';

export default {
    setup() {
        
        const formData = useFormDataStore()

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

        //Make setup values available to component
        return { handleNextStep }
    }
}
</script>