<template>
    <section class="app-content">
        <NavIndicator :currentPage="currentPage" />
        <PersonalInfo v-if="currentPage === 1"/>
        <SubmitFooter />
    </section>
</template>

<script>
import PersonalInfo from "./components/PersonalInfo.vue"
import NavIndicator from "./components/NavIndicator.vue"
import SubmitFooter from "./components/SubmitFooter.vue"
import { useFormDataStore } from '@/pinia/formData'
import './sass/App.css'

export default {
    
    name: 'App',
    components: { PersonalInfo, NavIndicator, SubmitFooter },

    setup() {
        const formData = useFormDataStore()

        const currentPage = formData.currentPage

        return {currentPage}
    }
  
}
</script>