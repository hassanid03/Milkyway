<template>
  <div class="" style="background-image: linear-gradient(#27262d, #56555a, #394d53)" v-if="!show">
    <div class="bgPage1">
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
      <div class="">
        <div class="flex">
          <div class="xl:mt-24 earth">
            <!-- <img src="/images/earth.png" class="ear" alt="Earth" style="height: 500px; width: 500px" /> -->
            <div class="circle"></div>
          </div>
          <div class="mx-auto mt-10">
            <p class="text-orange xl:font-regular uppercase xl:text-xs">Welcome To</p>
            <p class="uppercase text-white xl:font-medium mt-2 xl:text-4xl">milkyway</p>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consetetur sadipscing <br />
              elitr, sed diam nonumy eirmod tempor invidunt ut labore <br />
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>

            <p class="text-orange xl:font-regular uppercase xl:text-xs xl:mt-5 xl:mx-32">
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
          <div class="uppercase text-orange xl:text-sm font-regular xl:mx-10">
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
              @click="show = false"
              class="w-5 border-2 rounded-full border-orange mx-1"
              alt=""
            />

            <img
              src="/images/circle.png "
              @click="show = true"
              class="w-5 hover:bg-orange hover:rounded-full"
              alt=""
            />

            <!-- <button @click="show = !show">Click</button> -->
          </div>
          <button
            class="inline-block rounded-tl-lg rounded-br-lg bg-gradient-to-l from-orange to-oranges xl:mx-10 xl:mt-1 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase"
          >
            Book now
          </button>
        </div>
      </div>
      <div>
        <img
          src="/images/mars.png"
          class="xl:mt-8 ani"
          alt="Earth"
          style="
            transform:translate(28%,-40%)
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
      <div class="flex overflow-y-auto pb-10 no-scrollbar relative" style="">
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
              <p class="text-orange text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
              >
                Show
              </button>
            </div>
            <div
              class="w-96 mr-6 rounded-tl-[15px] rounded-br-[15px] overflow-hidden"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 490px"
            >
              <!-- <iframe
                controls
                src="/images/Rakete.mp4"
                class="rounded-tl-[10px] autoPlay rounded-br-[10px] position"
                style="height: 270px; width: 100%"
              /> -->
              <video
                controls
                autoplay
                loop
                muted
                class="rounded-tl-[10px] rounded-br-[10px]"
                width="100%"
              >
                <source src="/images/Rakete.mp4" />
              </video>
              <p
                class="mt-2 font-regular xl:mx-2 text-2xl uppercase tracking-tight text-gray-900 dark:text-white"
              >
                Title
              </p>
              <p class="text-orange text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
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
              <p class="text-orange text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
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
              <p class="text-orange text-sm xl:mx-2">Lorem ipsum dolor sit amet</p>
              <p class="text-xs mx-1 text-white xl:mx-2 text-justify xl:mt-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no
              </p>
              <button
                class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-2 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
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

  <div class="" style="background-image: linear-gradient(#27262d, #56555a, #394d53)" v-if="show">
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
              Lorem ipsum dolor sit amet, consetetur sadipscing <br />
              elitr, sed diam nonumy eirmod tempor invidunt ut labore <br />
              et dolore magna aliquyam erat, sed diam voluptua.
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
              @click="show = false"
              class="w-5 hover:bg-skyblue hover:rounded-full mx-1"
              alt=""
            />

            <img
              src="/images/circle.png "
              @click="show = true"
              class="w-5 border-2 rounded-full border-skyblue"
              alt=""
            />

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
          style="
            transform:translate(28%,-40%)
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
        <div class="flex flex-nowrap" style="transform: translate(-25%)">
          <div class="flex mt-4 relative mx-2">
            <div
              class="w-96 mr-6 rounded-tl-[15px] rounded-br-[15px]"
              style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 490px"
            >
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
              <img src="/images/rocket.jpg" class="rounded-tl-[10px] rounded-br-[10px]" alt="" />
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
                LEGAL NOTICE <br />
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
</template>

<script setup>
import CounterCopm from '../components/CounterCopm.vue';
// import NavbarComp from '@/components/NavbarComp.vue';
import { ref } from 'vue';
let show = ref(false);
</script>

<style>
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
