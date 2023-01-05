<template>
  <div style="background-image: linear-gradient(#27262d, #56555a, #394d53)">
    <div class="bgPage1 mb-20">
      <nav class="sm:px-4 py-2.5 text-white md:text-xs md:font-regular">
        <div class="container flex flex-wrap justify-between items-center mx-7">
          <div class="md:order-2">SHOP</div>
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
              to="/careers"
              active-class="block text-orange py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              CAREERS
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
      <div class="box2 mt-16">
        <div class="flex justify-center mt-5" style="transform: translate(0.5%, -13%)">
          <div class="flex justify-center">
            <div class=" ">
              <div
                class="block mt-5 cardtrip rounded-tl-[15px] rounded-br-[15px] rounded-lg shadow-lg max-w-sm"
                style="height: 500px; width: 300px"
              >
                <img
                  src="/images/trip1.jpg"
                  class="object-cover object-center rounded-tl-[15px] rounded-br-[15px]"
                  alt=""
                  style="height: 500px; width: 300px"
                />
                <div>
                  <p
                    class="text-white uppercase font-medium mx-3"
                    style="transform: translateY(-460%)"
                  >
                    From
                  </p>
                </div>
                <div
                  class="bg-gradient-to-l bgCh rounded-tl-[15px] rounded-br-[15px]"
                  style="transform: translateY(-128%)"
                >
                  <p class="text-white uppercase text-2xl p-2 mx-1 font-medium">Earth</p>
                  <button class="text-white text-sm pb-3 mt-1 flex mx-auto font-regular">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mx-7">
            <div class=" ">
              <div
                class="block mt-5 cardtrip rounded-tl-[15px] rounded-br-[15px] rounded-lg shadow-lg max-w-sm"
                style="height: 500px; width: 300px"
              >
                <img
                  src="/images/trip2.jpg"
                  class="object-cover object-right rounded-tl-[15px] rounded-br-[15px]"
                  alt=""
                  style="height: 500px; width: 300px"
                />
                <div>
                  <p
                    class="text-white uppercase font-medium mx-3"
                    style="transform: translateY(-460%)"
                  >
                    To
                  </p>
                </div>
                <div
                  class="bg-gradient-to-l bgCh rounded-tl-[15px] rounded-br-[15px]"
                  style="transform: translateY(-128%)"
                >
                  <p class="text-white uppercase text-2xl p-2 mx-1 font-medium">Mars</p>
                  <button class="text-white text-sm pb-3 mt-1 flex mx-auto font-regular">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div class=" ">
              <div
                class="block mt-5 cardtrip rounded-tl-[15px] rounded-br-[15px] rounded-lg shadow-lg max-w-sm"
                style="height: 500px; width: 300px"
              >
                <img
                  src="/images/trip3.jpg"
                  class="object-cover object-right-top rounded-tl-[15px] rounded-br-[15px]"
                  alt=""
                  style="height: 500px; width: 300px"
                />
                <div class="">
                  <p
                    class="text-white font-medium uppercase mx-3"
                    style="transform: translateY(-460%)"
                  >
                    class
                  </p>
                </div>
                <div
                  class="bg-gradient-to-l bgCh rounded-tl-[15px] rounded-br-[15px]"
                  style="transform: translateY(-128%)"
                >
                  <p class="text-white uppercase text-2xl p-2 mx-1 font-medium">business</p>
                  <button class="text-white text-sm pb-3 mt-1 flex mx-auto font-regular">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex mt-3 mx-8" style="transform: translate(3%, -50%)">
            <div class="">
              <div class="flex">
                <p class="text-white uppercase text-md font-regular">Depart</p>
                <button @click="showC = !showC" class="w-4 h-4 mx-1 mt-1">
                  <img src="/images/Down.png" alt="" />
                </button>
              </div>

              <div v-if="showC" class="fixed">
                <vue-tailwind-datepicker
                  no-input
                  :formatter="formatter"
                  as-single
                  v-model="dateValue"
                />
                <!-- <div class="flex justify-end">
                  <button
                    @click="show = !show"
                    class="font-medium text-sm text-white w-20 rounded-[5px]"
                    style="transform: translate(-20%, -120%)"
                  >
                    <p v-if="show">Apply</p>
                  </button>
                </div> -->
              </div>
              <div class="text-orange" v-for="(c, i) in dateValue" :key="i">
                <p class="font-medium">
                  {{ c }}
                </p>
              </div>
            </div>

            <div class="mx-auto">
              <div class="flex">
                <p class="text-white uppercase text-md font-regular mx-auto">Seats</p>
                <button @click="showS = !showS" class="w-4 h-4 mx-1 mt-1">
                  <img src="/images/Down.png" alt="" />
                </button>
              </div>
              <div class="fixed" v-show="showS">
                <select
                  v-model="selected"
                  class="font-medium capitalize text-black bg-oranges h-7 rounded-[5px] bordner-none"
                >
              
                  <option :value="null">number of seats</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div class="text-orange font-medium">
                {{ selected }}
              </div>
            </div>
            <div class="">
              <p class="text-orange line-through uppercase text-md font-regular">49,999.99$ -50%</p>
              <p class="text-white uppercase text-4xl font-regular">24,999.99$</p>
              <button
                class="text-4xl bgCh2 text-white font-regular"
                style="transform: translate(-9%, 40%)"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-96">
      <div class="bgFooter uppercase">
        <div class="flex justify-center mx-64">
          <div class="">
            <img src="/images/logo.png " class="w-36 xl:mt-9 xl:mb-10" alt="" />
          </div>
          <div class="flex mx-auto flex-col xl:mt-12 upeprcase text-white">
            <div><p class="text-orange text-sm font-regular">QUICK LINKS</p></div>
            <div>
              <p class="text-xs">
                LEGAL NOTICE <br />
                TRIPS <br />
                STORE <br />
                CAREERS <br />
                GOALS
              </p>
            </div>
          </div>

          <div class="flex flex-col xl:mt-12 upeprcase text-white">
            <div><p class="text-orange text-sm font-regular">FOLLOW Us</p></div>
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
</template>

<script setup>
import { ref } from 'vue';

const dateValue = ref([]);
const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM',
});

let showC = ref(false);
let showS = ref(false);
let selected = ref(null);
</script>

<style>
.box2 {
  isolation: isolate;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 590px;
  width: 1000px;
}
.box2::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  background: radial-gradient(#27262d, #27262d, #6e6e72);
  opacity: 68%;
  border-bottom-right-radius: 17px;
  border-top-left-radius: 17px;
}

.bgCh {
  isolation: isolate;
  position: relative;
}

.bgCh::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  background: linear-gradient(#fd6323, #e25419);
  border-radius: 15px 0px 15px 0px;
  opacity: 70%;
}

.bgCh2 {
  isolation: isolate;
  position: relative;
  width: 300px;
  height: 60px;
}

.bgCh2::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  background: linear-gradient(#fd6323, #e25419);
  border-radius: 15px 0px 15px 0px;
  opacity: 70%;
}

/* custom styles */
[type='date'] {
  background: url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
    97% 50% no-repeat;
}
[type='date']::-webkit-inner-spin-button {
  display: none;
}
[type='date']::-webkit-calendar-picker-indicator {
  opacity: 0;
}
</style>
