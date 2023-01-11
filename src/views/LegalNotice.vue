<template>
  <div class="bg-transparent" style="background-image: linear-gradient(#27262d, #56555a, #394d53)">
    <!--Header-->
    <div class="bgPageImp">
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
              active-class="block text-orange py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              TRIPS
            </RouterLink>
          </div>
        </div>
      </nav>
      <!--Body-->
      <div class="flex">
        <div class="flex-none w-1/6"></div>
        <div class="flex-none w-4/6">
          <div class="flex">
            <div class="flex-none w-1/2">
              <p class="text-orange text-2xl uppercase font-regular pt-6">About</p>
              <h1 class="text-white text-6xl uppercase font-regular pt-6">Milkyway</h1>
              <p class="text-orange text-xl uppercase font-regular pt-3">Impressum</p>
              <p class="text-white text-lg pt-3">
                Let us discover the future together and join our team on their long journey.
              </p>
              <p class="text-white text-lg pt-16">
                Informationsverwaltendewissensgebendeauskunftspflicht according to
                §567.46-nartDigi6(6)7 Interstellar-Commerce Law, §72-MyWy Unternehmensgesetzbuch, §0
                Gewerbeordnung and Offenlegungspflicht according to §25 Mediengesetz.
              </p>
              <p class="text-white text-lg pt-10">Milkyway AG</p>
              <p class="text-white text-lg">Mμsterstresse 7, Staircase 69, Door 0,</p>
              <p class="text-white text-lg">75008 Mμster-Σst</p>
              <p class="text-white text-lg">Parys</p>
              <p class="text-white text-lg">MyWy-113</p>
            </div>
            <div class="flex-none w-1/2">
              <p class="text-white text-lg pt-60">Object: Space Travel</p>
              <p class="text-white text-lg">UID-Number: PYU124869078</p>
              <p class="text-white text-lg">GLM: 5966946593659</p>
              <p class="text-white text-lg">GYSA: 05670648</p>
              <p class="text-white text-lg">Registration Number: 31102047</p>
              <p class="text-white text-lg">Commercial Registry: Mμster-Σst</p>
              <p class="text-white text-lg">Office: 75008 Mμster-Σst</p>

              <p class="text-white text-lg pt-8">Tel.: +69 666 5571720</p>
              <p class="text-white text-lg">Fax: +69 666 5571720-0</p>
              <p class="text-white text-lg">
                E-Mail: <span class="text-orange">milkyway@spacetravel.com</span>
              </p>

              <p class="text-white text-lg pt-8">
                Member of: Free-Space-Corporation, Anubis, Est-GmbH
              </p>
              <p class="text-white text-lg">
                Professional Law: <span class="text-orange">www.under-construction.at</span>
              </p>

              <p class="text-white text-lg pt-8">
                Supervisory Authority: District Court of Mμster-Σst-North
              </p>
              <p class="text-white text-lg">
                Professional Title: Web-Developer, Dream-Engineer, Notarealjober
              </p>
              <p class="text-white text-lg">Conferring State: Parys</p>
            </div>
          </div>
        </div>

        <div class="flex-none w-1/6"></div>
      </div>
      <!--Body End-->
    </div>
    <!--Header End-->

    <div class="">
      <p class="text-white uppercase xl:mx-60 text-7xl" style="">Supervisory Board</p>
      <div class="flex overflow-y-auto pb-10 no-scrollbar relative" style="">
        <div class="flex flex-nowrap">
          <div class="flex mt-4 relative mx-2">
            <!--Cards-->
            <div
              v-for="(employee, index) in employees"
              :key="index"
              class="w-96 mr-6 rounded-tl-[15px] rounded-br-[15px]"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 590px"
            >
              <img :src="employee.image" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
              <p class="mt-2 font-regular xl:mx-2 text-2xl uppercase tracking-tight text-white">
                {{ employee.name }}
              </p>
              <p class="text-orange text-sm xl:mx-2">{{ employee.role }}</p>
              <div class="h-100"></div>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
              >
                Contact
              </button>
            </div>
            <!--Cards End-->
          </div>
        </div>
      </div>
    </div>
    <!--Footer-->
    <div class="">
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
    <!--Footer End-->
  </div>
</template>

<script setup>
import { ref } from 'vue';

let employees = [
  { name: 'Lukas Hochsteiner', role: 'CHRO', image: '/images/employees/lh.jpg' },
  { name: 'Daniel Diewaldovic', role: 'CEO', image: '/images/employees/dd.jpg' },
  { name: 'Danial Gamzino', role: 'CFO', image: '/images/employees/dg.jpg' },
  { name: 'Raphael Rosko', role: 'CTO', image: '/images/employees/rr.jpg' },
  { name: 'Eve Rosko', role: 'CMO', image: '/images/employees/er.jpg' },
];
</script>

<style>
/* New (by L.H.) */

.bgPageImp {
  height: 950px;
  isolation: isolate;
  position: relative;
}

.bgPageImp::after {
  content: '';
  position: fixed;
  z-index: -1;
  inset: 0;
  background: black;
  background-image: url('/images/earthbg.jpg');
  opacity: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}

/* New (by L.H.) End */

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
  height: 700px;
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
  position: absolute;
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
