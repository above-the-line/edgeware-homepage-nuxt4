<template>
    <div class="flex flex-col items-center text-center pt-10">
        <div class="wrapper px-6">
            <h1 class="text-3xl pb-4" v-html="title || 'no title passed yet'"></h1>
            <h1 class="text-lg font-light" v-if="subtitle" v-html="subtitle"></h1>
        </div>
    </div>
</template>
  
<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: "",
    },
},);

</script>


<style scoped>
div.wrapper {
    max-width: 1000px;
}
</style>
  