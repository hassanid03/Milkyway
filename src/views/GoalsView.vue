<template>
  <div class="" style="background-image: linear-gradient(#27262d, #56555a, #394d53)">
    <div class="bgPage1">
      <nav class="sm:px-4 py-2.5 text-white xl:text-md text-xs md:font-regular">
        <div class="flex justify-between items-center mx-7">
          <RouterLink class="md:order-2 mt-4" to="/shop">
            <div class="">SHOP</div>
          </RouterLink>
          <div active class="flex p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
            <RouterLink
              to="/"
              active-class="block text-orange underline py-2 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >HOME
            </RouterLink>
            <RouterLink
              to="/goals"
              active-class="block text-orange pr-4 pl-3 rounded md:hover:bg-transparent underline focus:underline md:hover:text-blue-700 md:p-0"
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
              <div class="mx-4 xl:mx-0">TRIPS</div>
            </RouterLink>
          </div>
        </div>
      </nav>
      <div class="xl:mx-11 p-4">
        <div>
          <div>
            <p class="font-black text-3xl text-white text-center">OUR GOALS</p>
          </div>

          <!-- <p class="text-white text-4xl uppercase">Goals</p> -->
          <div class="mt-7 xl:px-6 xl:mx-auto">
            <!-- Section: Design Block -->
            <section class="mb-32 text-white text-center">
              <div class="grid mt-16 md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
                <div class="mb-6 md:mb-0">
                  <div class="relative">
                    <img
                      src="/images/mars.png"
                      class="rounded-[15px] flex justify-center mx-auto p-1 xl:w-96 w-64"
                      alt="Louvre"
                      style="filter: drop-shadow(0rem 2.5rem 0.5rem rgba(0, 0, 0, 0.5))"
                    />
                  </div>
                </div>

                <div class="mb-6">
                  <p class="xl:text-2xl font-bold mb-3">
                    Establishing a Permanent Human <br />
                    Presence on Mars
                  </p>
                  <div class="mb-3 text-red-600 font-medium text-sm flex justify-center">
                    <img src="/images/goal1.png" style="width: 38px; height: 38px" alt="" />
                  </div>
                  <p class="text-white mb-2">
                    <small>First Goal: </small>
                  </p>
                  <p class="text-white font-medium capitalize text-justify">
                    One of the primary goals of our company is to send humans to Mars and establish
                    a permanent colony. We aim to develop the necessary technologies,
                    infrastructure, and resources to sustain human life on the Red Planet. This goal
                    will require long-term planning, extensive research, and collaboration with
                    various stakeholders.
                  </p>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
                <div class="mb-6 md:mb-0 md:order-2">
                  <div class="relative">
                    <img
                      src="/images/earth.png"
                      class="rounded-[15px] flex justify-center mx-auto p-1 xl:w-96 w-64"
                      alt="Louvre"
                      style="filter: drop-shadow(0rem 2.5rem 0.5rem rgba(0, 0, 0, 0.5))"
                    />
                  </div>
                </div>

                <div class="mb-6 md:mb-0 md:order-1 capitalize">
                  <h3 class="text-2xl font-bold mb-3">
                    Developing Reusable <br />
                    Spacecraft
                  </h3>
                  <div
                    class="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center"
                  >
                    <img src="/images/goal2.png" style="width: 38px; height: 38px" alt="" />
                  </div>
                  <p class="text-white mb-2">
                    <small>Second Goal: </small>
                  </p>
                  <p class="text-white capitalize font-medium text-justify">
                    In order to make spaceflight more affordable and accessible, our company plans
                    to develop reusable spacecraft. We aim to create vehicles that can travel to
                    space and back multiple times without significant maintenance or repairs. This
                    will not only reduce the cost of spaceflight but also increase its frequency,
                    allowing more people to experience the thrill of space travel.
                  </p>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
                <div class="mb-6 md:mb-0">
                  <div class="relative">
                    <img
                      src="/images/mercury.png"
                      class="rounded-[15px] flex justify-center mx-auto p-1 xl:w-2/3 w-72"
                      alt="Louvre"
                      style="
                        filter: drop-shadow(0rem 2.5rem 0.5rem rgba(0, 0, 0, 0.5));
                      "
                    />
                  </div>
                </div>

                <div class="mb-6 md:mb-0 capitalize">
                  <h3 class="text-2xl font-bold mb-3">
                    Revolutionizing Intercontinental <br />
                    Travel
                  </h3>
                  <div
                    class="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center"
                  >
                    <img src="/images/goal3.png" style="width: 38px; height: 38px" alt="" />
                  </div>
                  <p class="text-white mb-2">
                    <small>Third Goal: </small>
                  </p>
                  <p class="text-white capitalize font-medium text-justify">
                    Our company aims to develop high-speed transportation systems that can take
                    people from one continent to another in a matter of hours. We plan to use
                    advanced aerospace technologies to create hypersonic passenger aircraft that can
                    fly at speeds of up to Mach 5 or higher. This will make intercontinental travel
                    faster, more efficient, and more comfortable than ever before.
                  </p>
                </div>
              </div>
            </section>
            <!-- Section: Design Block -->
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="bgFooter uppercase">
        <div class="flex justify-center xl:mx-64 items-center">
          <div class="">
            <img src="/images/logo.png " class="xl:w-36 w-24 p-2 mx-2 xl:mt-9 xl:mb-10" alt="" />
          </div>
          <div class="flex mx-auto p-2 flex-col xl:mt-12 upeprcase text-white">
            <div><p class="text-orange text-sm font-regular">QUICK LINKS</p></div>
            <div>
              <p class="text-xs font-medium">
                LEGAL NOTICE <br />
                TRIPS <br />
                STORE <br />
                CAREERS <br />
                GOALS
              </p>
            </div>
          </div>

          <div class="flex mx-2 p-2 flex-col xl:mt-12 upeprcase text-white">
            <div><p class="text-orange text-sm font-regular">FOLLOW Us</p></div>
            <div>
              <p class="text-xs font-medium">
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
      <div class="bg-black uppercase font-medium ">
        <div class="flex justify-center">
          <p class="text-white text-xs xl:mt-4 xl:mb-4">
            Danial H. - Daniel D. - Lukas H. - Raphael L.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  opacity: 30%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
