<template>
    <div>



        <NuxtLayout name="default">
            <div class="headlineBlock">
                <div class="headline">
                    <div class="title text-4xl">Trials in Sydney</div>
                    <div class="tagline-container md:w-1/2">
                        <div class="tagline text-xl">Are you an SME in the greater Sydney area looking to start your sensing
                            and automation journey?
                        </div>
                    </div>
                </div>
                <a href="mailto:avi.michael@edgewaretech.com.au" class="z-10">
                    <button
                        class="action decoration-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                        JOIN OUR TRIALS
                        <Icon name="material-symbols:arrow-outward-rounded" class="pb-1 text-white font-bold text-2xl" />
                    </button>
                </a>
            </div>

            <div class="flex flex-col items-center justify-center flex-wrap px-2 py-12">
                <div class="flex flex-row flex-wrap items-center">
                    <div class="md:order-last"><img src="/trialDistillery.jpg" class="max-w-[550px] w-full pb-3 md:py-3">
                    </div>
                    <div class="flex flex-col px-2">
                        <div class="text-sm py-2 font-semibold uppercase">Market research underway</div>
                        <div class="text-3xl py-4 font-semibold">Supported, no-obligation trials</div>
                        <div class="w-full max-w-[650px] font-light text-lg py-3 md:pr-3">
                            Ambient environment sensing, automated electrical control and metering is ready to go on
                            Edgeware!
                            <br>
                            <br>
                            The system is also ready for sophisticated automations and niche sensor integration, but that
                            requires in-house IT
                            expertise for configuration to remain low-cost.
                            <br>
                            <br>
                            If you're an SME without software expertise, or would like to help Edgeware create packaged
                            hardware, software
                            and services ready for common problems faced by your industry sector, please get in touch.
                        </div>
                    </div>
                </div>

                <div class="text-xl font-medium pt-16 pb-4 text-center">Help shape the future of sensing and automation for your industry
                </div>
                <div class="industrySegments flex flex-wrap justify-around max-w-[750px] pt-2 pb-4">
                    <IndustrySegmentCard title="Education & Campuses" image="/campus.jpg" />
                    <IndustrySegmentCard title="Airports" image="/airport2.jpg" />
                    <IndustrySegmentCard title="Data Centers" image="/server.jpg" />
                    <IndustrySegmentCard title="Commercial Buildings" image="/buildings.jpg" />
                    <IndustrySegmentCard title="Health and Aged Care" image="/hospitalBed3.jpg" />
                    <IndustrySegmentCard title="Retail and Hospitality" image="/retail2.jpg" />
                    <IndustrySegmentCard title="Industrial Food & Beverage" image="/bakery.jpg" />
                    <IndustrySegmentCard title="Parking & Smart Cities" image="/parking.jpg" />
                </div>

                <a href="mailto:avi.michael@edgewaretech.com.au" class="z-10">
                    <button
                        class="action decoration-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                        JOIN OUR TRIALS
                        <Icon name="material-symbols:arrow-outward-rounded" class="pb-1 text-white font-bold text-2xl" />
                    </button>
                </a>


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
    background-image: url('~/public/trial-banner3.jpg');
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
    background: linear-gradient(to right, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.0));
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