<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div class="headlineBlock">
        <div class="headline">
          <div class="title text-4xl">Flexible Systems For Buildings</div>
          <div class="tagline-container md:w-1/2">
            <div class="tagline text-xl">Hardware, software and services that free and empower your business.
            </div>
          </div>
        </div>
        <a href="mailto:avi.michael@edgewaretech.com.au" class="z-10">
          <button
            class="action decoration-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
            TALK TO A SPECIALIST
            <Icon name="material-symbols:arrow-outward-rounded" class="pb-1 text-white font-bold text-2xl" />
          </button>
        </a>
      </div>

      <div class="systemFeaturesBlock flex flex-col items-center py-10">

        <div class="text-center text-2xl pb-8 px-2">Integrated building solutions that work for you</div>


        <FeatureCard title="Enhanced Tenant and Occupant Experience" icon="guidance:office"
          feature1="Optimise for sustainability" feature2="Predict maintenance" feature3="Extend security" />

        <FeatureCard title="Real Time Operational Metrics" icon="iconoir:industry" feature1="Manage power demand"
          feature2="Improve resiliance" feature3="Remotely Control" />

        <FeatureCard title="Open source, flexible and modular" icon="uiw:component"
          feature1="Low code config and intuitive dashboards <br>Easily train and onboard staff"
          feature2="Span from one site to the whole portfolio" feature3="Run on-prem, on-cloud or hybrid" />

        <FeatureCard title="Rich horizons, not walled gardens" icon="bi:door-open" feature1="You own the data"
          feature2="Surface insights in-house or welcome 3rd parties"
          feature3="Connect real time notification and diagnostics" />


      </div>


      <div class="screenshots-wrapper flex flex-wrap justify-center space-around w-100 items-center py-10">
        <div class="pb-4 px-2"><img src="/detail-node-red.jpg" class="max-w-5xl w-full rounded-lg drop-shadow-xl"></div>
        <div class="pb-4 px-2"><img src="/detail-influx.jpg" class="max-w-5xl w-full rounded-lg drop-shadow-xl"></div>
      </div>


      <div class="possibleDeploymentsBlock flex flex-col justify-center items-center">
        <div class="text-center text-2xl font-bold py-4 px-2">Powerful, bespoke digital transformation solutions at the
          lowest cost</div>
        <div class="imageFeaturesBlock flex flex-wrap justify-center items-center px-2">
          <div class=""><img src="/automated-building-2.jpg"></div>
          <div class="flex flex-col items-center justify center lg:justify-around text-lg md:py-12 md:px-12">

            <SensorCard title="Asset" icon="carbon:asset" features="motion, speed, direction, location, vibration" />
            <SensorCard title="Soil" icon="game-icons:plant-roots" features="moisture and quality" />
            <SensorCard title="Water" icon="solar:waterdrops-line-duotone" features="oxygenation and detection" />
            <SensorCard title="Ambient" icon="arcticons:sensorreadout" features="light, temp, pressure, humidity" />
            <SensorCard title="Air" icon="material-symbols:air" features="quality, CO₂ PPM, pressure differential" />
            <SensorCard title="Precision" icon="material-symbols:precision-manufacturing-rounded"
              features="measurements of voltage, movement, etc." />

          </div>
        </div>
      </div>
      <div class="specialstTalkBlock flex flex-col items-center py-5">
        <div class="flex flex-row justify-center flex-wrap bg-zinc-800 max-w-[1920px] py-6 px-4">
          <div class="image-wrapper"><img src="/femaleEngineer.jpg" class="max-w-[550px] w-full md:pb-3"></div>
          <div class="flex flex-col py-3 lg:pl-12 lg:items-start">
            <div class="w-full">
              <div class="text-white font-light text-3xl max-w-[450px]">
                Ready for sensing and automation at your building?
              </div>
            </div>
            <div class="max-w-[450px] text-white font-bold text-lg py-8">
              With endless hardware options and powerful open source software solutions, Edgeware seamlessly merges
              operational and IT data into a flexible and extendable platform.
              Start small and scale up at the lowest possible cost.
            </div>
            <div class="flex flex-col items-center px-4">
              <a href="mailto:avi.michael@edgewaretech.com.au" class="z-10">
                <button
                  class="action decoration-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                  TALK TO A SPECIALIST
                  <Icon name="material-symbols:arrow-outward-rounded" class="pb-1 text-white font-bold text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </NuxtLayout>
  </div>
</template>


<style scoped>
div.headlineBlock {
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-top: 5%;
  justify-content: center;
  background-image: url('~/public/services-banner.jpg');
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0));
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