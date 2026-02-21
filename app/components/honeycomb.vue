<template>
    <div class="honeycomb-wrapper">
        <div class="honeycomb-container">
            <ul class="honeycomb">
                <li class="honeycomb-cell" v-for="(item, index) in honeycombItems" :key="index">
                    <img class="honeycomb-cell__image" :style="{ backgroundImage: 'url(' + item.imageSrc + ')' }" />
                    <div class="honeycomb-cell__title">
                        {{ item.title }}
                        <small>{{ item.subtitle }}</small>
                    </div>
                </li>
                <li class="honeycomb-cell honeycomb__placeholder"></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            honeycombItems: [
                {
                    imageSrc: "/HVAC.jpg",
                    title: "Save energy",
                    subtitle: 'meet sustainability goals',
                },
                {
                    imageSrc: '/security.jpg',
                    title: "Sense threats and damage",
                    subtitle: 'in real time',
                },
                {
                    imageSrc: '/coldChain.jpg',
                    title: "Reduce outages and errors",
                    subtitle: null,
                },
                {
                    imageSrc: '/manufacturing.jpg',
                    title: "Utilize and track assets",
                    subtitle: 'prevent loss',
                },
                {
                    imageSrc: '/officeClip.jpg',
                    title: "Increase comfort and air quality",
                    subtitle: null,
                },
                {
                    imageSrc: '/sensors.jpg',
                    title: "BYO or mix n' match hardware",
                    subtitle: null,
                },
                {
                    imageSrc: '/nodeRed-1.jpg',
                    title: "An OPEN SOURCE",
                    subtitle: "extendable, low-code platform",
                },
                {
                    imageSrc: '/schoolBus.jpg',
                    title: "Lowest cost",
                    subtitle: "Bespoke solutions",
                },
                {
                    imageSrc: '/hospital.jpg',
                    title: "Secure storage",
                    subtitle: "On prem or in cloud",
                },
                {
                    imageSrc: '/hotel.jpg',
                    title: "Diagnose and Predict",
                    subtitle: "maintenance requirements",
                },
            ],
        };
    },
};
</script>
  
<style scoped>
.honeycomb-wrapper {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.honeycomb-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    min-height: 400px;
}

.honeycomb {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 380px;
    margin: 0 auto;
    padding: 0;
}


.honeycomb-cell {
    width: 125px;
    height: 68.75px;
    margin: 20px 6.25px;
    position: relative;
    padding: 0.25em;
    text-align: center;
    z-index: 1;
}

.honeycomb-cell__title {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    hyphens: auto;
    word-break: break-word;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 0.875em;
    transition: opacity 350ms;
}

.honeycomb-cell__title>small {
    font-weight: 300;
    margin-top: 0.25em;
}

.honeycomb-cell__image {
    object-fit: cover;
    object-position: center;
    background-size: cover;
}

.honeycomb-cell::before,
.honeycomb-cell::after {
    content: "";
}

.honeycomb-cell::before,
.honeycomb-cell::after,
.honeycomb-cell__image {
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
    display: block;
    position: absolute;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
}

.honeycomb-cell::before {
    background: #fff;
    transform: scale(1.055);
}

.honeycomb-cell::after {
    background: #291506;
    opacity: 0.5;
    transition: opacity 350ms;
}

.honeycomb-cell:hover {

    /* Change opacity of child element with class .honeycomb-cell__title */
    .honeycomb-cell__title {
        opacity: 0;
    }



}

.honeycomb-cell:hover::after {
    opacity: 0;
}

/* Style for the ::before pseudo-element when hovered */
.honeycomb-cell:hover::before {
    /* Use a color variable or specify the background color directly */
    background-color: #da6206;
}

.honeycomb__placeholder {
    display: none;
    opacity: 0;
    width: 250px;
    margin: 0 12.5px;
}


/* Media query for screens with a maximum width of 441px */
@media (max-width: 441px) {
    .honeycomb {
        width: 380px;
    }

    .honeycomb-cell:nth-child(1) {
        margin-left: 120px;
        margin-right: 120px;
    }

    .honeycomb-cell:nth-child(4) {
        margin-left: 120px;
        margin-right: 120px;
    }

    .honeycomb-cell:nth-child(7) {
        margin-left: 120px;
        margin-right: 120px;
    }

    .honeycomb-cell:nth-child(8) {
        margin-left: 20px;
    }

    .honeycomb-cell:nth-child(9) {
        margin-right: 20px;
    }
}


/* Media query for screens with a minimum width of 422px and maximum width of 598px */
@media (min-width: 442px) and (max-width: 598px) {

    .honeycomb {
        width: 500px;
    }

    .honeycomb-cell:nth-child(1) {
        margin-left: 120px;
        margin-right: 120px;
    }

    .honeycomb-cell:nth-child(4) {
        margin-left: 120px;
        margin-right: 120px;
    }

    .honeycomb-cell:nth-child(7) {
        margin-left: 120px;
        margin-right: 120px;
    }

    .honeycomb-cell:nth-child(8) {
        margin-left: 90px;
    }

    .honeycomb-cell:nth-child(9) {
        margin-right: 90px;
    }
}


/* Media query for screens with a minimum width of 599px and a maximum width of 734px */
@media (min-width: 599px) and (max-width: 734px) {
    .honeycomb {
        width: 500px;
    }

    .honeycomb-cell:nth-child(4) {
        margin-left: 110px;
    }

    .honeycomb-cell:nth-child(5) {
        margin-right: 110px;
    }
}


/* Media query for screens with a minimum width of 735px and a maximum width of 1024px */
@media (min-width: 735px) and (max-width: 1221px) {

    .honeycomb {
        width: 730px;
    }

    .honeycomb-cell:nth-child(6) {
        margin-left: 93px;
    }

    .honeycomb-cell:nth-child(9) {
        margin-right: 93px;
    }
}



/* Media query for screens with a minimum width of 1222px */
@media (min-width: 1222px) {
    .honeycomb-wrapper {
        padding-top: 4rem;
        padding-bottom: 2rem;
    }

    .honeycomb {
        width: 100%;
    }

    .honeycomb-cell:nth-child(6) {
        margin-left: 215px;
    }

    .honeycomb-cell:nth-child(9) {
        margin-right: 215px;
    }

    .honeycomb-cell {
        flex: 0 1 200px;
        max-width: 150px;
        height: 82.5px;
        margin-bottom: 30px;
        margin-left: 8px;
        margin-right: 8px;
        padding: 0.5em;

    }

    .honeycomb-cell__title {
        font-size: 1.15em;
    }




}
</style>