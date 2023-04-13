<template>
    <form class="personal-info__form">
        <h1 class="title">Personal info</h1>
        <p class="description">Please provide your name, email addres, and phone number.</p>

        <section class="label__container">
            <label :class="validName">Name</label>
            <p class="required" v-if="nameEmpty === 'required'">This field is required</p>
        </section>
        <input type="text" v-model="name" placeholder="e.g. Stephen King" required @blur="validateName" :class="(validName + ' ' + (nameEmpty === 'required' ? 'input--required' : undefined))" >
        <span :class="validName">Invalid Name!</span>

        <section class="label__container">
            <label :class="validEmail">Email Address</label>
            <p class="required" v-if="emailEmpty === 'required'">This field is required</p>
        </section>
        
        <input type="text" v-model="email" placeholder="e.g. stephenking@lorem.com" required @blur="validateEmail" :class="(validEmail  + ' ' +  (nameEmpty === 'required' ? 'input--required' : undefined))" >
        <span :class="validEmail">Invalid Email!</span>

        <section class="label__container"> 
            <label :class="validPhone">Phone Number</label>
            <p class="required" v-if="phoneEmpty === 'required'">This field is required</p>
        </section>
        <input type="number" v-model="phone" placeholder="e.g. +1 234 567 890" required @blur="validatePhone" :class="(validPhone + ' ' + (nameEmpty === 'required' ? 'input--required' : undefined))">
        <span :class="validPhone">Invalid Phone Number!</span>
    </form>
</template>

<script>
import { useFormDataStore } from '@/pinia/formData';
import { storeToRefs } from "pinia"

export default {
    setup() {
        const formData = useFormDataStore()

        //States
        const { name, email, phone, nameEmpty, emailEmpty, phoneEmpty, validName, validEmail, validPhone } = storeToRefs( formData )

        //function to validate Name and update store
        function validateName() {
            let test = ( /^[a-z\A-Z\u00C0-\u02AB'´`]+\.?\s([a-z\A-Z\u00C0-\u02AB'´`]+\.?\s?)+$/.test( name.value ) )

            if ( test ) {
                formData.updateName( {
                    name: name.value,
                } )
                formData.updateValidName( {
                    validName: undefined,
                } )
            }
            else {
                formData.updateValidName( {
                    validName: "--invalid",
                } )
            }
        }

        //function to validate Email and update store
        function validateEmail() {
            let test = ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( email.value ) )

            if ( test ) {
                formData.updateEmail( {
                    email: email.value,
                } )
                formData.updateValidEmail( {
                    validEmail: undefined,
                } )
            }
            else {
                formData.updateValidEmail( {
                    validEmail: "--invalid",
                } )
            }
        }

        //function to validate Phone and update store
        function validatePhone() {
            let test = ( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test( phone.value ) )

            if ( test ) {
                formData.updatePhone( {
                    phone: phone.value,
                } )
                formData.updateValidPhone( {
                    validPhone: undefined,
                } )
            }
            else {
                formData.updateValidPhone( {
                    validPhone: "--invalid",
                } )
            }
        }

        //Make setup values available to component
        return {validateName, validateEmail, validatePhone, name, email, phone, validEmail, validName, validPhone, nameEmpty, emailEmpty, phoneEmpty}
    }
    
}
</script>