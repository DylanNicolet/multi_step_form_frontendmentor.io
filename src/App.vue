<template>
    <NavIndicator />
    <PersonalInfo />
    <SubmitFooter :currentPage="currentPage" />
</template>

<script>
import PersonalInfo from "./components/PersonalInfo.vue"
import NavIndicator from "./components/NavIndicator.vue"
import SubmitFooter from "./components/SubmitFooter.vue"
import './sass/App.css'

export default {
    name: 'App',
    components: { PersonalInfo, NavIndicator, SubmitFooter },
    data() {
        return {
            currentPage: 1
        }
    }
  
}
</script>