<template>
    <a :href="link">
        <div class="storyBox flex min-w-[300px] w-full p-5 md:py-8 lg:px-24">
            <div class="storyBox-imageContainer">
                <img :src="image">
                <div class="gradient-overlay"></div>
            </div>
            <div class="storyBox-textContent pl-4 min-w-[200px]">
                <div class="storyBox-title pt-1 text-xs" v-html="category"></div>
                <div class="storyBox-subtitle pt-2 text-xl font-light" v-if="title" v-html="title"></div>
            </div>
        </div>
    </a>
</template>

<script setup>

const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: 'no title passed yet'
    },
    title: {
        type: String,
        required: true,
    }
})


</script>



<style scoped>
.storyBox-imageContainer {
    position: relative;
    max-width: 120px;
}


.storyBox-textContent {
    max-width: 200px;
}


.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
    pointer-events: none;
}
</style>