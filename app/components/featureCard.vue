<template>
    <div class="featureCard flex flex-col justify-center align-center px-2 py-8 ">
        
            <div class="headlineBanner flex flex-row">
                <div class="cardIcon">
                    <Icon :name="icon" class="text-4xl" />
                </div>
                <div class="cardTitle px-4 font-bold pt-1" v-html="title"></div>
            </div>
            <div class="cardBody font-light pt-3 pl-14">
                <ul>
                    <li v-html="feature1"></li>
                    <li v-html="feature2"></li>
                    <li v-html="feature3"></li>
                </ul>
            </div>

    </div>
</template>

<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    feature1: {
        type: String,
        default: ''
    },
    feature2: {
        type: String,
        default: ''
    },
    feature3: {
        type: String,
        default: ''
    },

})
</script>



<style scoped>
@media screen and (min-width: 320px) {
    div.featureCard {
        min-width: 300px;
        max-width: 450px;
        width: 90%;
    }
}

@media screen and (min-width: 720px) {
    div.featureCard {
        width: 450px;
    }
}
</style>