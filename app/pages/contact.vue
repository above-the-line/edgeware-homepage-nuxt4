<template>
    <div>
        <NuxtLayout name="default">
            <div class="headlineBlock">
                <div class="headline">
                    <div class="title text-4xl">Who we are</div>
                    <div class="tagline-container md:w-1/2">
                        <div class="tagline text-xl">A Sydney startup aiming to democratise industrial automation.
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center flex-wrap px-2 py-12">

                <div class="text-2xl pb-8">Who is behind Edgeware?</div>

                <div class="w-full max-w-[650px]">
                    Edgeware is an open source product created by Adam Mlocek and Avi Michael.
                    <br>
                    <br>
                    <p>Check out our <a href="https://edgeware-technologies.gitbook.io/documentation/" target="_blank"
                            class="font-bold underline">project documentation</a> for more technical information, or
                        <a href="mailto:avi.michael@edgewaretech.com.au" class="font-bold underline">drop us a line</a>
                        if you'd like to grab a coffee some time and talk about IoT.
                    </p>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>


<script setup lang="ts">
definePageMeta({
    layout: false
})
</script>


<style scoped>
div.headlineBlock {
    color: white;
    display: flex;
    flex-direction: column;
    padding-left: 15%;
    padding-top: 5%;
    justify-content: center;
    background-image: url('~/public/about-banner.jpg');
    background-position-y: top;
    background-position-x: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
    position: relative;
}


div.title {
    text-transform: uppercase;
    font-weight: bold;
}


div.title::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.0));
    z-index: -1;
}

div.headline {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-bottom: 5%;
    z-index: 2;
}

button.action {
    z-index: 2;
    width: 240px;
}
</style>