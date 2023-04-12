<template>
    <form class="select-plan__form">
        <h1 class="title">Select your plan</h1>
        <p class="description">You have the option of monthly or yearly biling.</p>

        <section class="select-plan__choice-container">
            <section 
            class="plan__container" 
            :class='"plan__container", (optionsChoice === "Yearly" ? "plan__container--yearly" : undefined), 
            (planChoice === "Arcade" ? "plan__container--active" : undefined)' 
            @click="handlePlanClick('Arcade')"
            >
                <img src="../assets/images/icon-arcade.svg" class="plan__icon" :class='(optionsChoice === "Yearly" ? "plan__icon--yearly" : undefined)'>
                <section class="plan__text">
                    <h2 class="plan__title">Arcade</h2>
                    <p class="plan__price">{{ optionsChoice === "Monthly" ? "$9/mo" : "$90/yr" }}</p>
                    <p class="plan__free-months" v-if="optionsChoice === 'Yearly'">2 months free</p>
                </section>
            </section>
            <section 
            class="plan__container" 
            :class='(optionsChoice === "Yearly" ? "plan__container--yearly" : undefined), 
            (planChoice === "Advanced" ? "plan__container--active" : undefined)'
            @click="handlePlanClick('Advanced')"
            >
                <img src="../assets/images/icon-advanced.svg" class="plan__icon" :class='(optionsChoice === "Yearly" ? "plan__icon--yearly" : undefined)'>
                <section class="plan__text">
                    <h2 class="plan__title">Advanced</h2>
                    <p class="plan__price">{{optionsChoice === "Monthly" ? "$12/mo" : "$120/yr"}}</p>
                    <p class="plan__free-months" v-if="optionsChoice === 'Yearly'">2 months free</p>
                </section>
            </section>
            <section 
            class="plan__container" 
            :class='(optionsChoice === "Yearly" ? "plan__container--yearly" : undefined), 
            (planChoice === "Pro" ? "plan__container--active" : undefined)'
            @click="handlePlanClick('Pro')"
            >
                <img src="../assets/images/icon-pro.svg" class="plan__icon" :class='(optionsChoice === "Yearly" ? "plan__icon--yearly" : undefined)'>
                <section class="plan__text">
                    <h2 class="plan__title">Pro</h2>
                    <p class="plan__price">{{ optionsChoice === "Monthly" ? "$15/mo" : "$150/yr" }}</p>
                    <p class="plan__free-months" v-if="optionsChoice === 'Yearly'">2 months free</p>
                </section>
            </section>
        </section>

        <section class="options__container" @click="handleOptionsClick">
            <p class="options__choice" :class='(optionsChoice === "Monthly" ? "options__choice--active" : undefined)'>Monthly</p>
            <div class="toggle__container" :class='(optionsChoice === "Yearly" ? "toggle__container--yearly" : undefined)'>
                <div class="toggle"></div>
            </div>
            <p class="options__choice" :class='(optionsChoice === "Yearly" ? "options__choice--active" : undefined)'>Yearly</p>
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
        const { planChoice, optionsChoice } = storeToRefs( formData )
        

        function handlePlanClick(choice) {
            formData.updatePlanChoice( {
                planChoice: choice
            })
        }

        function handleOptionsClick() {
            if ( formData.optionsChoice === "Monthly" ) {
                formData.updateOptionsChoice( {
                    optionsChoice: "Yearly"
                } )
            } 
            else {
                formData.updateOptionsChoice( {
                    optionsChoice: "Monthly"
                } )
            }
          
        }

        //Make setup values available to component
        return { handlePlanClick, handleOptionsClick, planChoice, optionsChoice }
    }

}
</script>