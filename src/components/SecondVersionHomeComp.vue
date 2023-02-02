<template>
  <div class="" style="background-image: linear-gradient(#27262d, #56555a, #394d53)" v-show="!show">
    <div class="bgPage">
      <nav class="sm:px-4 py-2.5 text-white md:text-xs md:font-regular">
        <div class="container flex flex-wrap justify-between items-center mx-7">
          <div class="md:order-2">SHOP</div>
          <div
            active
            class="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <RouterLink
              to="/"
              active-class="block text-skyblue underline py-2 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >HOME
            </RouterLink>
            <RouterLink
              to="/goals"
              active-class="block text-skyblue py-2 pr-4 pl-3 rounded md:hover:bg-transparent underline focus:underline md:hover:text-blue-700 md:p-0"
            >
              GOALS
            </RouterLink>
            <RouterLink
              to="/careers"
              active-class="block py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              CAREERS
            </RouterLink>
            <RouterLink
              to="/trips"
              active-class="block py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              TRIPS
            </RouterLink>
          </div>
        </div>
      </nav>
      <div class="">
        <div class="flex">
          <div class="xl:mt-24 mars">
            <!-- <img src="/images/earth.png" class="ear" alt="Earth" style="height: 500px; width: 500px" /> -->
            <div class="circle"></div>
          </div>
          <div class="mx-auto mt-10">
            <p class="text-skyblue xl:font-regular uppercase xl:text-xs">Welcome To</p>
            <p class="uppercase text-white xl:font-medium mt-2 xl:text-4xl">milkyway</p>
            <p class="text-white">
              As the universe expands in a rapid <br />
              Milkyway works hard on connecting the<br />
              ends of the never-ending space we all call home.
            </p>

            <p class="text-skyblue xl:font-regular uppercase xl:text-xs xl:mt-5 xl:mx-32">
              Launch in
            </p>
            <div class="xl:ml-36">
              <CounterCopm></CounterCopm>
            </div>
          </div>
          <div class="">
            <div class="moon xl:mt-5">
              <!-- <img src="/images/moon.png" class="mx-auto mo" style="height: 300px" alt="" /> -->
              <div class="circle1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex box1 rounded-tl-[15px] rounded-br-[15px]" style="transform: translateY(-20%)">
      <div class="flex xl:mt-5 justify-center">
        <div class="flex flex-col">
          <div class="uppercase text-white xl:text-2xl font-regular xl:mx-10">
            <p>Earth</p>
          </div>
          <div class="uppercase text-skyblue xl:text-sm font-regular xl:mx-10">
            <p>only 3.000.00$</p>
          </div>
          <div>
            <p class="text-justify text-white" style="margin-left: 2.5rem; margin-right: -3rem">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div class="flex xl:mt-3 bg-opacity-75" style="margin-left: 19rem; margin-right: 2rem">
            <img
              src="/images/circle.png"
              @click="show = true"
              class="w-5 hover:bg-skyblue hover:rounded-full mx-1"
              alt=""
            />

            <img
              src="/images/circle.png "
              @click="show = true"
              class="w-5 border-2 rounded-full border-skyblue"
              alt=""
            />
            <img src="/images/circle.png" class="w-5 hover:rounded-full mx-1" alt="" />

            <img src="/images/circle.png " class="w-5 rounded-full" alt="" />
            <img src="/images/circle.png" class="w-5 hover:rounded-full mx-1" alt="" />

            <!-- <button @click="show = !show">Click</button> -->
          </div>
          <button
            class="inline-block rounded-tl-lg rounded-br-lg bg-gradient-to-l from-skyblue to-skyblues xl:mx-10 xl:mt-1 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase"
          >
            Book now
          </button>
        </div>
      </div>
      <div>
        <img
          src="/images/earth.png"
          class="xl:mt-8 ani"
          alt="Earth"
          style=" transform:translate(28%,-40%)
            width: 320px;
            margin-left: 0.1rem;
            margin-right: 20rem;
            filter: drop-shadow(0rem 2.5rem 0.5rem rgba(0, 0, 0, 0.5));
          "
        />
      </div>
    </div>

    <div class="">
      <p class="text-white uppercase xl:mx-80 xl:text-4xl" style="">News</p>
      <div class="flex overflow-y-auto pb-10 no-scrollbar relative">
        <div class="flex flex-nowrap">
          <div class="flex mt-4 relative mx-2">
            <div
              class="w-96 mr-6 rounded-tl-[15px] rounded-br-[15px]"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 490px"
            >
              <img src="/images/2.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
              <p
                class="mt-2 font-regular xl:mx-2 text-2xl uppercase tracking-tight text-gray-900 dark:text-white"
              >
                Title
              </p>
              <p class="text-skyblue text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-skyblue to-skyblues xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
              >
                Show
              </button>
            </div>
            <div
              class="w-96 mr-6 rounded-tl-[15px] rounded-br-[15px]"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 490px"
            >
              <div style="height: 267px">
                <iframe
                  src="/images/Rakete.mp4"
                  controls
                  loop
                  muted
                  class="rounded-tl-[10px] h-full rounded-br-[10px]"
                  width="100%"
                >
                </iframe>
              </div>
              <p
                class="mt-2 font-regular xl:mx-2 text-2xl uppercase tracking-tight text-gray-900 dark:text-white"
              >
                Title
              </p>
              <p class="text-skyblue text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-skyblue to-skyblues xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
              >
                Show
              </button>
            </div>
            <div
              class="w-96 mr-6 rounded-tl-[15px] rounded-br-[15px]"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 490px"
            >
              <img src="/images/3.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
              <p
                class="mt-2 font-regular xl:mx-2 text-2xl uppercase tracking-tight text-gray-900 dark:text-white"
              >
                Title
              </p>
              <p class="text-skyblue text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-skyblue to-skyblues xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
              >
                Show
              </button>
            </div>
            <div
              class="w-96 mr-6 rounded-tl-[15px] rounded-br-[15px]"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 490px"
            >
              <img src="/images/1.png" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
              <p
                class="mt-2 font-regular xl:mx-2 text-2xl uppercase tracking-tight text-gray-900 dark:text-white"
              >
                Title
              </p>
              <p class="text-skyblue text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-skyblue to-skyblues xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
              >
                Show
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="bgFooter uppercase">
        <div class="flex justify-center mx-64">
          <div class="">
            <img src="/images/logo.png " class="w-36 xl:mt-9 xl:mb-10" alt="" />
          </div>
          <div class="flex mx-auto flex-col xl:mt-12 upeprcase text-white">
            <div><p class="text-skyblue text-sm font-regular">QUICK LINKS</p></div>
            <div>
              <p class="text-xs">
                <RouterLink to="/legalnotice"> LEGAL NOTICE </RouterLink> <br />
                TRIPS <br />
                STORE <br />
                CAREERS <br />
                GOALS
              </p>
            </div>
          </div>

          <div class="flex flex-col xl:mt-12 upeprcase text-white">
            <div><p class="text-skyblue text-sm font-regular">FOLLOW Us</p></div>
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

  <div v-show="show">
    <Home></Home>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Home from '../views/HomeView.vue';
let show = ref(false);
</script>

<style></style>
