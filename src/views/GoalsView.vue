<template>
  <div class="relative" style="background-image: linear-gradient(#27262d, #56555a, #394d53)">
    <div class="bgPage1">
      <nav class="sm:px-4 py-2.5 text-white md:text-xs md:font-regular container">
        <div class="flex flex-wrap justify-between items-center mx-7">
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
      <div class="mx-11 p-4">
        <div>
          <p class="text-white text-4xl uppercase">Goals</p>
        </div>
        <div class="text-sm" style="transform: translate(14%, 105%)">
          <p class="text-orange text-lg">11.9.2023</p>
          <p class="text-white">TITLE OF THE GOAL</p>
          <p class="text-white">
            Lorem ipsum dolor sit amet,<br />
            consetetur sadipscing elitr, <br />sed diam nonumy eirmod tempor <br />
            labore et dolore.
          </p>
        </div>
        <div class="text-sm" style="transform: translate(31%, -55%)">
          <p class="text-orange text-lg">11.9.2023</p>
          <p class="text-white">TITLE OF THE GOAL</p>
          <p class="text-white">
            Lorem ipsum dolor sit amet,<br />
            consetetur sadipscing elitr, <br />sed diam nonumy eirmod tempor <br />
            labore et dolore.
          </p>
        </div>
        <div class="text-sm" style="transform: translate(43%, -250%)">
          <p class="text-orange text-lg">11.9.2023</p>
          <p class="text-white">TITLE OF THE GOAL</p>
          <p class="text-white">
            Lorem ipsum dolor sit amet,<br />
            consetetur sadipscing elitr, <br />sed diam nonumy eirmod tempor <br />
            labore et dolore.
          </p>
        </div>
        <div class="text-sm" style="transform: translate(65%, -217%)">
          <p class="text-orange text-lg">11.9.2023</p>
          <p class="text-white">TITLE OF THE GOAL</p>
          <p class="text-white">
            Lorem ipsum dolor sit amet,<br />
            consetetur sadipscing elitr, <br />sed diam nonumy eirmod tempor <br />
            labore et dolore.
          </p>
        </div>
        <div class="text-sm" style="transform: translate(54%, -215%)">
          <p class="text-orange text-lg">11.9.2023</p>
          <p class="text-white">TITLE OF THE GOAL</p>
          <p class="text-white">
            Lorem ipsum dolor sit amet,<br />
            consetetur sadipscing elitr, <br />sed diam nonumy eirmod tempor <br />
            labore et dolore.
          </p>
        </div>
        <div class="text-sm" style="transform: translate(37%, -215%)">
          <p class="text-orange text-lg">11.9.2023</p>
          <p class="text-white">TITLE OF THE GOAL</p>
          <p class="text-white">
            Lorem ipsum dolor sit amet,<br />
            consetetur sadipscing elitr, <br />sed diam nonumy eirmod tempor <br />
            labore et dolore.
          </p>
        </div>
        <div class="absolute inset-x-0 bottom-0 flex">
          <div class="">
            <img src="/images/mars.png" style="transform: translateY(95%); width: 420px" alt="" />
          </div>
          <div class="">
            <img
              src="/images/goals.png"
              class=""
              style="transform: translateX(-20%); width: 920px"
              alt=""
            />
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

<script>
export default {};
</script>

<style>
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
