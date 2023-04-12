<template>
    <form class="finish__form">
        <h1 class="title" v-if="!thankYou">Finishing up</h1>
        <p  v-if="!thankYou" class="description">Double-check everything looks OK before confirming.</p>

        <section class="finish__content" v-if="!thankYou">
            <section class="finish__recap">
                <section>
                    <p class="type">{{ planChoice + " (" + optionsChoice + ")"}}</p>
                    <button class="change__button" @click="handleChangeClick">Change</button>
                </section>
                <p class="price">${{recapPrice}}/{{optionsChoice === "Monthly" ? "mo" : "yr"}}</p>
            </section>

            <hr>

            <section class="finish__add-on" v-if="onlineServices">
                <p class="add-on">Online service</p>
                <p class="price">+${{ optionsChoice === "Monthly" ? 1 : 10 }}/{{ optionsChoice === "Monthly" ? "mo" : "yr" }}</p>
            </section>

            <section class="finish__add-on" v-if="largerStorage">
                <p class="add-on">Larger storage</p>
                <p class="price">+${{ optionsChoice === "Monthly" ? 2 : 20 }}/{{ optionsChoice === "Monthly" ? "mo" : "yr" }}</p>
            </section>

            <section class="finish__add-on" v-if="customizableProfile">
                <p class="add-on">Customizable profile</p>
                <p class="price">+${{ optionsChoice === "Monthly" ? 2 : 20 }}/{{ optionsChoice === "Monthly" ? "mo" : "yr" }}</p>
            </section>
        </section>

        <section class="finish__total" v-if="!thankYou">
            <p class="total">Total (per {{optionsChoice === "Monthly" ? "month" : "year"}})</p>
            <p class="price">+${{totalPrice}}/{{ optionsChoice === "Monthly" ? "mo" : "yr" }}</p>
        </section>

        <section class="thank-you" v-if="thankYou">
            <img src="../assets/images/icon-thank-you.svg">
            <h1 class="thank-you__title">Thank you!</h1>
            <p class="thank-you__description">
                Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support @loremgaming.com.
            </p>
        </section>
    </form>
</template>

<script>
import { useFormDataStore } from '@/pinia/formData';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

export default {
    setup() {
        const formData = useFormDataStore()

        //States
        const { planChoice, optionsChoice, onlineServices, largerStorage, customizableProfile, thankYou } = storeToRefs( formData )
        
        let recapPrice = ref( '' )
        let totalPrice = ref( '' )

        function determineRecapPrice() {
            if ( this.planChoice === "Arcade" && this.optionsChoice === "Monthly" ) {
                this.recapPrice = 9
            }
            else if ( this.planChoice === "Arcade" && this.optionsChoice === "Yearly" ) {
                this.recapPrice = 90
            }
            else if ( this.planChoice === "Advanced" && this.optionsChoice === "Monthly" ) {
                this.recapPrice = 12
            }
            else if ( this.planChoice === "Advanced" && this.optionsChoice === "Yearly" ) {
                this.recapPrice = 120
            }
            else if ( this.planChoice === "Pro" && this.optionsChoice === "Monthly" ) {
                this.recapPrice = 15
            }
            else if ( this.planChoice === "Pro" && this.optionsChoice === "Yearly" ) {
                this.recapPrice = 150
            }
        }

        function determineTotalPrice() {
            this.totalPrice = this.recapPrice

            if ( this.onlineServices && this.optionsChoice === "Monthly" ) {
                this.totalPrice = (this.totalPrice + 1)
            }
            else if ( this.onlineServices && this.optionsChoice === "Yearly" ) {
                this.totalPrice = this.totalPrice + 10
            }

            if ( this.largerStorage && this.optionsChoice === "Monthly" ) {
                this.totalPrice = (this.totalPrice + 2)
            }
            else if ( this.largerStorage && this.optionsChoice === "Yearly" ) {
                this.totalPrice = this.totalPrice + 20
            }

            if ( this.customizableProfile && this.optionsChoice === "Monthly" ) {
                this.totalPrice = this.totalPrice + 2
            }
            else if ( this.customizableProfile && this.optionsChoice === "Yearly" ) {
                this.totalPrice = this.totalPrice + 20
            }
        }

        function handleChangeClick() {
            formData.updateCurrentPage( {
                currentPage: 2
            } )
        }

        return { determineRecapPrice, determineTotalPrice, handleChangeClick, planChoice, optionsChoice, onlineServices, largerStorage, customizableProfile, recapPrice, totalPrice, thankYou }
    },
    mounted() {
        this.determineRecapPrice()
        this.determineTotalPrice()
    }
}
</script>