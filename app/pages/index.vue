<script setup lang="ts">

definePageMeta({
  layout: false,
});

const senseTitle = 'Sensing and automation as <em>you</em> want it: no lock-ins or limits, at the lowest possible cost';
const senseSubTitle = 'Edgeware Connect lets you choose the best hardware and software tooling for <em>your</em> business and create appropriate, unified solutions. Start small, scale up and never miss a beat.';

</script>


<template>
  <NuxtLayout name="default">
    <div class="headlineBlock">
      <div class="headline">
        <div class="title text-4xl">Edgeware Connect <br> for Buildings</div>
        <div class="tagline-container md:w-1/2">
          <div class="tagline text-xl">Bespoke, low cost, wireless, sensing and automation. <br> Every floor, every day.
          </div>
        </div>
      </div>
      <button
        class="action decoration-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
        <NuxtLink to="/solutions">LEARN MORE</NuxtLink>
        <Icon name="material-symbols:arrow-outward-rounded" class="pb-1 text-white font-bold text-2xl" />
      </button>
    </div>
    <div class="moreInfoStrap flex flex-row flex-wrap bg-black text-white justify-center">
      <Storybox category="Sydney Trials" title="Want to try it out?" image="/trials.jpg" link="/trials" />
      <Storybox category="Company History" title="The Edgeware startup" image="/startup.jpg" link="/contact" />
    </div>
    <div class="thePromise">
      <Jumbotron :title="senseTitle" :subtitle="senseSubTitle" />
      <Honeycomb />
      <div class="flex flex-row justify-center text-2xl py-10  lg:pt-8 lg:pb-8">
        <div class="text-center max-w-[720px]">Bring your favorite sensors, route traffic to any endpoint and link any
          automations
          and software</div>
      </div>
    </div>

    <div class="flex flex-col items-center w-full px-2 pb-8">

      <div class="flex flex-col items-center max-w-[650px] justify-around ">
        <div class="projectExample">
          <div class="projectFeature">Get warnings when</div>
          <div class="projectIndustry">manufactured products approach temperature degradation</div>
          <div class="projectIndustry">water is detected near critical assets</div>
          <div class="projectIndustry">vibration or movement exceeds a threshold</div>
          <div class="projectIndustry"></div>
        </div>
        <div class="projectExample">
          <div class="projectFeature">Remotely monitor and automate</div>
          <div class="projectIndustry">HVAC, lighting, blinds and door locks</div>
          <div class="projectIndustry">and your custom defined processes on the one dashboard</div>
        </div>
        <div class="projectExample">
          <div class="projectFeature">Create 'interactive architecture' experiences</div>
          <div class="projectIndustry">direct occupants to under utilised spaces in real time</div>
          <div class="projectIndustry">vary ambient lighting in response to CO₂ or other changes</div>
        </div>
        <div class="projectExample">
          <div class="projectFeature">Digitally enhance care facilities</div>
          <div class="projectIndustry">wireless patient vitals and 360º fall monitoring</div>
          <div class="projectIndustry">send alerts to other staff during high risk procedures</div>
        </div>
        <div class="projectExample">
          <div class="projectFeature">Collect and analyse data</div>
          <div class="projectIndustry">store telemetry locally, in cloud or both</div>
          <div class="projectIndustry">query and visualise to surface insights</div>
          <div class="projectIndustry">predict maintenance and other requirements</div>
        </div>
      </div>

    </div>

    <div class="flex flex-col items-center pb-12">
      <button
        class="decoration-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-8 rounded-md shadow-md">
        <NuxtLink to="/solutions">JOIN OUR TRIALS</NuxtLink>
        <Icon name="material-symbols:arrow-outward-rounded" class="pb-1 text-white font-bold text-2xl" />
      </button>
    </div>

  </NuxtLayout>
</template>


<style scoped>
div.projectExample {
  padding-top: 8px;
  padding-bottom: 8px;
  max-width: 650px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 12px;

}

div.projectFeature {
  font-weight: 600;
  max-width: 350px;
}

div.headline {
  z-index: 2;
}

div.headlineBlock {
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-top: 5%;
  justify-content: center;
  background-image: url('~/public/city.jpg');
  background-position-y: top;
  background-position-x: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 50vh;
  position: relative;
}

div.thePromise {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0));
  z-index: -1;

}

div.headline {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-bottom: 5%;
}

button.action {
  z-index: 2;
  width: 165px;
}
</style>