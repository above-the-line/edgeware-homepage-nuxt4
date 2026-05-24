<template>
    <NuxtLink :href="link">
        <div class="storyBox flex min-w-[300px] w-full p-5 md:py-8 lg:px-24">
            <div class="storyBox-imageContainer w-[120px]">
                <NuxtImg :src="image" class="max-w-[120px]" />
            </div>
            <div class="storyBox-textContent pl-4 min-w-[200px]">
                <div class="storyBox-title pt-1 text-xs" v-html="category"></div>
                <div class="storyBox-subtitle pt-2 text-xl font-light" v-if="title" v-html="title"></div>
            </div>
        </div>
    </NuxtLink>
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
.storyBox-textContent {
    max-width: 200px;
}
</style>