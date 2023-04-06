<template>
    <section class="nav-indicator">
        <section class="nav-item__container">
            <div class="nav-item" :class="{ nav_active: currentPage === 1 }" >1</div>
            <div>
                <p class="step">STEP 1</p>
                <p class="title">YOUR INFO</p>
            </div>
            
        </section>
        <section class="nav-item__container">
            <div class="nav-item" :class="{ nav_active: currentPage === 2 }" >2</div>
            <div>
                <p class="step">STEP 2</p>
                <p class="title">SELECT PLAN</p>
            </div>
        </section>
        <section class="nav-item__container">
            <div class="nav-item" :class="{ nav_active: currentPage === 3 }" >3</div>
            <div>
                <p class="step">STEP 3</p>
                <p class="title">ADD-ONS</p>
            </div>
        </section>
        <section class="nav-item__container">
           <div class="nav-item" :class="{ nav_active: currentPage === 4 }" >4</div>
           <div>
                <p class="step">STEP 4</p>
                <p class="title">SUMMARY</p>
           </div>
        </section>
    </section>
</template>

<script>
import { placeholder } from '@babel/types';

export default {
    props: ["currentPage"],
    components: { placeholder }
}
</script>