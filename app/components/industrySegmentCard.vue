<template>
    <div class="industrySegments">
        <div class="industry flex flex-col items-center p-4">
            <div class="image">
                <img :src="image" class="max-w-[125px] shadow-xl rounded-xl">
            </div>
            <div class="text-sm pt-3" v-html="title"></div>
        </div>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
})
</script>


<style scoped></style>