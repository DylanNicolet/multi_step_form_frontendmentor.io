<template>
    <section class="app-content">
        <NavIndicator :currentPage="currentPage" />
        <section class="desktop-style__modifier">
            <PersonalInfo v-if="currentPage === 1"/>
            <SelectPlan v-if="currentPage === 2"/>
            <SubmitFooter />
        </section>
    </section>
</template>

<script>
import PersonalInfo from "./components/PersonalInfo.vue"
import SelectPlan from "./components/SelectPlan.vue"
import NavIndicator from "./components/NavIndicator.vue"
import SubmitFooter from "./components/SubmitFooter.vue"
import { useFormDataStore } from '@/pinia/formData'
import './sass/App.css'
import { storeToRefs } from "pinia"

export default {
    
    name: 'App',
    components: { PersonalInfo, SelectPlan, NavIndicator, SubmitFooter },

    setup() {
        const formData = useFormDataStore()

        const { currentPage } = storeToRefs(formData)

        return {currentPage}
    }
  
}
</script>