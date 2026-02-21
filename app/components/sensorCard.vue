<template>
    <div class="detectionType flex min-w-[300px] max-w-[400px] w-full items-center px-2 py-4 min-[1432px]:py-3">
        <div class="flex flex-col items-center min-w-[85px]">
            <Icon :name="icon" class="text-6xl" />
            <div class="text-xl font-bold pt-2" v-html="title"></div>
        </div>
        <div class="min-w-[150px] px-4" v-html="features"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ""
    },
    features: {
        type: String,
        default: ""
    }
})
</script>