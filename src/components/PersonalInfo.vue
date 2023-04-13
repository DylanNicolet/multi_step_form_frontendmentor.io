<template>
    <form class="personal-info__form">
        <h1 class="title">Personal info</h1>
        <p class="description">Please provide your name, email addres, and phone number.</p>

        <label :class="validName">Name</label>
        <input type="text" v-model="name" placeholder="e.g. Stephen King" required @blur="validateName" :class="validName" >
        <span :class="validName">Invalid Name!</span>

        <label :class="validEmail">Email Address</label>
        <input type="text" v-model="email" placeholder="e.g. stephenking@lorem.com" required @blur="validateEmail" :class="validEmail" >
        <span :class="validEmail">Invalid Email!</span>

        <label :class="validPhone">Phone Number</label>
        <input type="number" v-model="phone" placeholder="e.g. +1 234 567 890" required @blur="validatePhone" :class="validPhone" >
        <span :class="validPhone">Invalid Phone Number!</span>

        <h1 v-if="(emailEmpty === 'required')">{{ emailEmpty }}</h1>
    </form>
</template>

<script>
import { useFormDataStore } from '@/pinia/formData';
import { ref } from 'vue';

export default {
    setup() {
        const formData = useFormDataStore()



        //States
        const name = ref( '' )
        const email = ref( '' )
        const phone = ref( '' )
        const validEmail = ref( '' )
        const validName = ref( '' )
        const validPhone = ref( '' )
        const nameEmpty = formData.nameEmpty
        const emailEmpty = formData.emailEmpty
        const phoneEmpty = formData.emailEmpty

        //function to validate Name and update store
        function validateName() {
            let test = ( /^[a-z\A-Z\u00C0-\u02AB'´`]+\.?\s([a-z\A-Z\u00C0-\u02AB'´`]+\.?\s?)+$/.test( name.value ) )

            if ( test ) {
                validName.value = undefined
                formData.updateName( {
                    name: name.value,
                } )
                formData.updateNameEmpty( {
                    nameEmpty: "not empty",
                } )
            }
            else {
                validName.value = "--invalid"
            }
        }

        //function to validate Email and update store
        function validateEmail() {
            let test = ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( email.value ) )

            if ( test ) {
                validEmail.value = undefined
                formData.updateEmail( {
                    email: email.value,
                } )
                formData.updateEmailEmpty( {
                    emailEmpty: "not empty",
                } )
            }
            else {
                validEmail.value = "--invalid"
            }
        }

        //function to validate Phone and update store
        function validatePhone() {
            let test = ( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test( phone.value ) )

            if ( test ) {
                validPhone.value = undefined
                formData.updatePhone( {
                    phone: phone.value,
                } )
                formData.updatePhoneEmpty( {
                    phoneEmpty: "not empty",
                } )
            }
            else {
                validPhone.value = "--invalid"
            }
        }

        //Make setup values available to component
        return {validateName, validateEmail, validatePhone, name, email, phone, validEmail, validName, validPhone, nameEmpty, emailEmpty, phoneEmpty}
    }
    
}
</script>