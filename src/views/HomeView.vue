<template>
  <div class="" style="background-image: linear-gradient(#27262d, #56555a, #394d53)" v-if="!show">
    <!--Section 1-->
    <div class="bgPage1">
      <!-- navbar begin -->
      <nav class="sm:px-4 py-2.5 text-white md:text-xs md:font-regular">
        <div class="container flex flex-wrap justify-between items-center mx-7">
          <RouterLink class="md:order-2" to="/shop">
            <div>SHOP</div>
          </RouterLink>
          <div
            active
            class="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <RouterLink
              to="/"
              active-class="block text-orange underline py-2 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >HOME
            </RouterLink>
            <RouterLink
              to="/goals"
              active-class="block text-orange py-2 pr-4 pl-3 rounded md:hover:bg-transparent underline focus:underline md:hover:text-blue-700 md:p-0"
            >
              GOALS
            </RouterLink>
            <RouterLink
              to="/legalnotice"
              active-class="block text-orange py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              CONTACT
            </RouterLink>
            <RouterLink
              to="/trips"
              active-class="block text-orange underline focus:underline py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              TRIPS
            </RouterLink>
          </div>
        </div>
      </nav>
      <!-- navbar end -->

      <div class="">
        <div class="flex">
          <!-- erde mit animation begin -->
          <div class="xl:mt-24 earth">
            <!-- <img src="/images/earth.png" class="ear" alt="Earth" style="height: 500px; width: 500px" /> -->
            <div class="circle"></div>
          </div>
          <!-- erde mit animation end -->
          <!-- Short Description Milkyway-->
          <div class="mx-auto mt-10">
            <p class="highlight xl:font-regular uppercase xl:text-xs">Welcome To</p>
            <p class="uppercase text-white xl:font-medium mt-2 xl:text-4xl">milkyway</p>
            <p class="text-white">
              As the universe expands in a rapid <br />
              Milkyway works hard on connecting the<br />
              ends of the never-ending space we all call home.
            </p>

            <p class="highlight xl:font-regular uppercase xl:text-xs xl:mt-5 xl:mx-32">Launch in</p>
            <!-- Coundtdown begin -->
            <div class="xl:ml-36">
              <CounterCopm></CounterCopm>
            </div>
            <!-- Coundtdown end -->
          </div>
          <!-- Short Description Milkyway End-->
          <!-- mond mit animation begin -->
          <div class="">
            <div class="moon xl:mt-5">
              <!-- <img src="/images/moon.png" class="mx-auto mo" style="height: 300px" alt="" /> -->
              <div class="circle1"></div>
            </div>
          </div>
          <!-- mond mit animation end -->
        </div>
      </div>
    </div>
    <!--Section 1 End-->
    <!--Section 2-->
    <div
      class="flex box1 h-auto mt-72 rounded-tl-[15px] rounded-br-[15px]"
      style="transform: translateY(-20%)"
    >
      <div class="flex xl:mt-5 justify-center">
        <div class="flex flex-col">
          <div class="uppercase text-white xl:text-2xl font-regular xl:mx-10">
            <p>{{ currPlanet.name }}</p>
          </div>
          <div class="uppercase highlight xl:text-sm font-regular xl:mx-10">
            <p>{{ currPlanet.price_per_day }}$ per day</p>
          </div>
          <div class="">
            <p class="text-white text-justify xl:mx-10 font-medium">
              {{ currPlanet.description }}
            </p>
          </div>

          <!-- carousel punkte begin -->
          <div class="flex xl:mt-3 bg-opacity-75" style="margin-left: 19rem; margin-right: 2rem">
            <div v-for="p in planets" :key="p._id">
              <img
                v-if="p.p_id == currPlanet.p_id"
                src="/images/circle.png"
                @click="changePlanet(p)"
                class="w-5 border-2 rounded-full border-highlight mx-1"
                alt=""
              />

              <img
                v-else
                :key="p.p_id"
                src="/images/circle.png "
                @click="changePlanet(p)"
                class="w-5 hover:bg-orange hover:rounded-full"
                alt=""
              />
            </div>

            <!-- <button @click="show = !show">Click</button> -->
          </div>
          <!-- carousel punkte end -->
          <button
            style="transform: translate(0%, 40%)"
            class="inline-block rounded-tl-lg rounded-br-lg bg-highlight xl:mx-10 xl:mt-1 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase"
          >
            Book now
          </button>
        </div>
        <div class="flex items-center">
          <img
            :src="`/images/${currPlanet.img}`"
            class="xl:mt-8 ani mr-56"
            alt="Earth"
            style="width: 300px; filter: drop-shadow(0rem 2.5rem 0.5rem rgba(0, 0, 0, 0.5))"
          />
        </div>
      </div>
      <!-- Bild von Karte begin -->

      <!-- Bild von Karte end -->
    </div>
    <!-- Karte in der Mitte mit Text und Planet end -->

    <!-- News und Karten begin -->
    <div class="">
      <p class="text-white uppercase xl:mx-80 xl:text-4xl" style="">News</p>
      <div class="flex overflow-x-auto pb-10 no-scrollbar justify-center relative" style="">
        <div class="flex flex-nowrap">
          <div class="flex mt-4 relative mx-2">
            <div
              v-for="(article, index) in articles"
              :key="index"
              class="w-96 relative mr-6 rounded-tl-[15px] rounded-br-[15px]"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 490px"
            >
              <img
                :src="`/${article.img}`"
                class="rounded-tl-[10px] rounded-br-[10px]"
                alt=""
                crossorigin="anonymous"
              />
              <p
                class="mt-2 font-regular xl:mx-2 text-2xl uppercase tracking-tight text-gray-900 dark:text-white"
              >
                {{ article.title }}
              </p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                {{ article.summary }}
              </p>
              <div>
                <button
                  class="flex absolute inset-x-0 bottom-0 justify-center xl:mb-2 xl:mx-auto bg-highlight xl:mt-4 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- News und Karten end -->

    <!-- footer begin -->
    <div class="">
      <div class="bgFooter uppercase">
        <div class="flex justify-center mx-64">
          <div class="">
            <img src="/images/logo.png " class="w-36 xl:mt-9 xl:mb-10" alt="" />
          </div>
          <div class="flex mx-auto flex-col xl:mt-12 upeprcase text-white">
            <div><p class="highlight text-sm font-regular">QUICK LINKS</p></div>
            <div>
              <p class="text-xs">
                <RouterLink to="/legalnotice"> LEGAL NOTICE </RouterLink>
                <br />
                TRIPS <br />
                STORE <br />
                CAREERS <br />
                GOALS
              </p>
            </div>
          </div>

          <div class="flex flex-col xl:mt-12 upeprcase text-white">
            <div><p class="highlight text-sm font-regular">FOLLOW Us</p></div>
            <div>
              <p class="text-xs">
                TWITTER <br />
                INSTAGRAM <br />
                FACEBOOK <br />
                YOUTUBE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="bg-black uppercase">
        <div class="flex justify-center">
          <p class="text-white text-xs xl:mt-4 xl:mb-4">
            Danial H. - Daniel D. - Lukas H. - Raphael L.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- footer end -->

  <div v-if="show">
    <Second></Second>
  </div>
</template>

<script setup>
import CounterCopm from '../components/CounterCopm.vue';
// import NavbarComp from '@/components/NavbarComp.vue';
import Second from '../components/SecondVersionHomeComp.vue';
import { ref, onMounted } from 'vue';
import { usePlanetStore } from '../stores/planets.js';
import { useArticleStore } from '@/stores/articles.js';
const articleStore = useArticleStore();
const articles = ref([]);

let show = ref(false);
const currPlanet = ref([]);
const planetsStore = usePlanetStore();
const planets = ref([]);
const colors = ['orange', 'blue', 'white'];

onMounted(async () => {
  await planetsStore.getMercury();
  await planetsStore.getEarth();
  await planetsStore.getPlanets();
  await articleStore.getArticle();
  planets.value = planetsStore.planets;
  currPlanet.value = planetsStore.planets[0];
  console.log(currPlanet.value);

  articles.value = articleStore.article;
  console.log(articles.value);
});

// onMounted(async () => {
//   await planetsStore.getArticles();
//   articles.value = planetsStore.articles;
//   console.log(articles.value);
// });

function changePlanet(planet) {
  currPlanet.value = planets.value.find((p) => p.p_id == planet.p_id);
  document.querySelector(':root').style.setProperty('--color', planet.color);
}
</script>

<style lang="scss">
:root {
  --color: #ea580c;
}

.highlight {
  color: var(--color);
}

.bg-highlight {
  background-color: var(--color);
}

.border-highlight {
  border-color: var(--color);
}

.card {
  transform: translate(-25%);
}

.ear {
  overflow: hidden;
}

.mo {
  transform: translate(20%);
}

.bgPage {
  height: 700px;
  isolation: isolate;
  position: relative;
}

.bgPage::after {
  content: '';
  position: fixed;
  z-index: -1;
  inset: 0;
  background: black;
  background-image: url('/images/bgEarth.jpg');
  opacity: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgPage1 {
  isolation: isolate;
  position: relative;
}

.bgPage1::after {
  content: '';
  position: fixed;
  z-index: -1;
  inset: 0;
  background: black;
  background-image: url('/images/bgMars.jpg');
  opacity: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}

.bgFooter {
  isolation: isolate;
  position: relative;
}

.bgFooter::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  background: black;
  opacity: 70%;
}

.earth {
  width: 510px;
  height: 510px;
  background-image: url('/images/earth.png');
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  transform: translate(-32%);
}

.mars {
  width: 510px;
  height: 510px;
  background-image: url('/images/mars.png');
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  transform: translate(-32%);
}

.circle {
  width: 100%;
  height: 100%;
  /* background-color: black; */
  position: absolute;
  animation: rotation 7s infinite linear;
  border-radius: 50%;
  padding: 300px;
  border: 4px solid rgba(255, 255, 255, 10%);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-right: 3px;
}

.circle::before {
  content: '';
  width: 25px;
  height: 25px;
  background-color: white;
  position: absolute;
  left: -20px;
  top: -20px;
  border-radius: 50%;
  margin: 94px;
  opacity: 80%;
}

@keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

.moon {
  width: 320px;
  height: 320px;
  background-image: url('/images/moon.png');
  background-size: cover;
  position: absolute;
  transform: translate(-73%);
}

.circle1 {
  width: 100%;
  height: 100%;
  /* background-color: black; */
  position: absolute;
  animation: rotation 7s infinite linear;
  border-radius: 50%;
  padding: 275px;
  border: 4px solid rgba(255, 255, 255, 10%);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-right: 3px;
}

.circle1::before {
  content: '';
  width: 25px;
  height: 25px;
  background-color: white;
  position: absolute;
  left: -20px;
  top: -20px;
  border-radius: 50%;
  margin: 87px;
  opacity: 80%;
}

@keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

.box1 {
  isolation: isolate;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 390px;
  width: 920px;
}
.box1::after {
  content: '';
  position: fixed;
  z-index: -1;
  inset: 0;
  background: radial-gradient(#27262d, #27262d, #6e6e72);
  opacity: 68%;
  border-bottom-right-radius: 17px;
  border-top-left-radius: 17px;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.ani {
  position: relative;
  animation: mymove 0.5s;
  animation-iteration-count: 1;
}

@keyframes mymove {
  from {
    top: 90px;
  }
  to {
    top: 0px;
  }
}

.ani1 {
  animation: aa 0.5s;
  animation-iteration-count: 1;
}

@keyframes aa {
  from {
    left: -90px;
  }
  to {
    top: 0px;
  }
}
</style>
