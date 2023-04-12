<template>
  <div style="background-image: linear-gradient(#27262d, #56555a, #394d53)">
    <div class="bgPage1 mb-52">
      <nav class="sm:px-4 py-2.5 text-white md:text-xs md:font-regular">
        <div class="flex flex-wrap justify-between items-center mx-7">
          <div
            active
            class="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <RouterLink
              to="/"
              active-class="block highlight underline py-2 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >HOME
            </RouterLink>
            <RouterLink
              to="/goals"
              active-class="block highlight py-2 pr-4 pl-3 rounded md:hover:bg-transparent underline focus:underline md:hover:text-blue-700 md:p-0"
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
              active-class="block highlight py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              TRIPS
            </RouterLink>
          </div>
          <RouterLink to="/shop">
            <div class="">
              <img src="/images/shop.png" class="w-7" alt="" />
            </div>
          </RouterLink>
        </div>
      </nav>
      <div
        v-if="cart.length > 0"
        class="flex justify-end"
        style="transform: translate(-2.5%, -170%)"
      >
        <div class="flex justify-center bg-rred-700 rounded-full w-5 h-5">
          <p class="text-xs text-white text-center font-medium" style="margin-top: 2px">
            {{ cart.length }}
          </p>
        </div>
      </div>
      <div
        class="text-white text-3xl bgChShop font-black mt-5 mb-3 bg-white xl:h-96 h-72 xl:mx-80 rounded-tl-[15px] rounded-br-[15px]"
        style="
          background-image: url('/images/banner2.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      ></div>

      <div class="grid gap-3 grid-cols-3 mx-5 mt-3 xl:mx-80 xl:mt-5">
        <div
          class="w-72 rounded-tl-[15px] rounded-br-[15px]"
          style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 517px"
        >
          <div class="bg-white relative rounded-tl-[10px] rounded-br-[10px]">
            <img src="/images/blue.png " class="h-80 mx-auto" alt="" />
            <div
              class="flex w-16 bottom-0 left-0 cursor-pointer"
              style="transform: translate(10%, -70%)"
            >
              <img src="/images/btnBlue.png" class="w-5 rounded-full border-highlight" alt="" />
              <img
                src="/images/btnGray.png"
                class="w-5 mx-1 rounded-full border-highlight"
                alt=""
              />
              <img src="/images/btnOrange.png" class="w-5 rounded-full border-highlight" alt="" />
            </div>
          </div>
          <div class="flex justify-between xl:mx-2 mt-2">
            <p
              class="font-regular text-2xl p-1 uppercase tracking-tight text-gray-900 dark:text-white"
            >
              Tshirt
            </p>
            <div class="p-1 mt-1">
              <select
                class="font-medium text-black bg-oranges h-7 rounded-[5px] bordner-none text-xs"
              >
                <option :value="null">Size</option>
                <option value="S">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <p class="text-white text-sm xl:mx-3">Milkyway</p>

          <p class="text-orange text-sm xl:mx-3">$ 29.00</p>

          <button
            class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-3 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            Show
          </button>
        </div>

        <div
          class="w-72 rounded-tl-[15px] rounded-br-[15px]"
          style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 517px"
        >
          <div class="bg-white relative rounded-tl-[10px] rounded-br-[10px]">
            <img src="/images/orange.png " class="h-80 mx-auto" alt="" />
            <div
              class="flex w-16 bottom-0 left-0 cursor-pointer"
              style="transform: translate(10%, -70%)"
            >
              <img src="/images/btnBlue.png" class="w-5 rounded-full border-highlight" alt="" />
              <img
                src="/images/btnGray.png"
                class="w-5 mx-1 rounded-full border-highlight"
                alt=""
              />
              <img src="/images/btnOrange.png" class="w-5 rounded-full border-highlight" alt="" />
            </div>
          </div>
          <div class="flex justify-between xl:mx-2 mt-2">
            <p
              class="font-regular text-2xl p-1 uppercase tracking-tight text-gray-900 dark:text-white"
            >
              Tshirt
            </p>
            <div class="p-1 mt-1">
              <select
                class="font-medium text-black bg-oranges h-7 rounded-[5px] bordner-none text-xs"
              >
                <option :value="null">Size</option>
                <option value="S">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <p class="text-white text-sm xl:mx-3">Milkyway</p>

          <p class="text-orange text-sm xl:mx-3">$ 35.00</p>

          <button
            class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-3 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter1"
          >
            Show
          </button>
        </div>

        <div
          class="w-72 rounded-tl-[15px] rounded-br-[15px]"
          style="background-image: radial-gradient(#27262d, #27262d, #6e6e72); height: 517px"
        >
          <div class="bg-white relative rounded-tl-[10px] rounded-br-[10px]">
            <img src="/images/gray-cup.png " class="h-80 mx-auto" alt="" />
            <div
              class="flex w-16 bottom-0 left-0 cursor-pointer"
              style="transform: translate(10%, -70%)"
            >
              <img src="/images/btnBlue.png" class="w-5 rounded-full border-highlight" alt="" />
              <img
                src="/images/btnGray.png"
                class="w-5 mx-1 rounded-full border-highlight"
                alt=""
              />
              <img src="/images/btnOrange.png" class="w-5 rounded-full border-highlight" alt="" />
            </div>
          </div>
          <div class="flex justify-between xl:mx-2 mt-2">
            <p
              class="font-regular text-2xl p-1 uppercase tracking-tight text-gray-900 dark:text-white"
            >
              Cup
            </p>
          </div>
          <p class="text-white text-sm xl:mx-3">Milkyway</p>

          <p class="text-orange text-sm xl:mx-3">$ 15.00</p>

          <button
            class="flex justify-center xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-3 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter2"
          >
            Show
          </button>
        </div>
      </div>
    </div>

    <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenter"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex justify-around w-full pointer-events-auto bg-clip-padding rounded-md outline-none"
        >
          <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                class=""
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                class=""
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                class="flex justify-center absolute right-0 bottom-0 left-0 xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-3 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
                @click="addItemToCart(item)"
                data-bs-dismiss="modal"
              >
                Buy
              </button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img src="/images/blue.png" class="block w-full" alt="..." />
              </div>

              <div class="carousel-item relative float-left w-full">
                <img src="/images/orange-tshirt.png" class="block w-full" alt="..." />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="/images/gray-thirt.png" class="block w-full" alt="..." />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="/images/gray-thirt.png" class="block w-full" alt="..." />
              </div>
            </div>

            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-gray-500 inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <!-- <span class="visually-hidden">Previous</span> -->
            </button>

            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-gray-500 inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenter1"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex justify-around w-full pointer-events-auto bg-clip-padding rounded-md outline-none"
        >
          <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                class=""
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                class=""
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                class="flex justify-center absolute right-0 bottom-0 left-0 xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-3 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
                @click="addItemToCart(item)"
                data-bs-dismiss="modal"
              >
                Buy
              </button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img src="/images/orange.png" class="block w-full" alt="..." />
              </div>

              <div class="carousel-item relative float-left w-full">
                <img src="/images/gray.png" class="block w-full" alt="..." />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="/images/blue-hoodie.png" class="block w-full" alt="..." />
              </div>
            </div>

            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-gray-500 inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <!-- <span class="visually-hidden">Previous</span> -->
            </button>

            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-gray-500 inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenter2"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex justify-around w-full pointer-events-auto bg-clip-padding rounded-md outline-none"
        >
          <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                class=""
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                class=""
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                class="flex justify-center absolute right-0 bottom-0 left-0 xl:mb-2 xl:mx-auto bg-gradient-to-l from-orange to-oranges xl:mt-3 xl:w-36 xl:font-medium px-6 py-2.5 text-white font-medium text-xs uppercase rounded-tl-[10px] rounded-br-[10px]"
                @click="addItemToCart(item)"
                data-bs-dismiss="modal"
              >
                Buy
              </button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img src="/images/gray-cup.png" class="block w-full" alt="..." />
              </div>

              <div class="carousel-item relative float-left w-full">
                <img src="/images/blue-cup.png" class="block w-full" alt="..." />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="/images/orange-cup.png" class="block w-full" alt="..." />
              </div>
            </div>

            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-gray-500 inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <!-- <span class="visually-hidden">Previous</span> -->
            </button>

            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-gray-500 inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="" style="margin-top: 50vh">
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

const cart = ref([]);

function addItemToCart(item) {
  cart.value.push(item);
}
</script>

<style>
.bgChShop {
  isolation: isolate;
  position: relative;
}

.bgChShop::after {
  content: '';
  position: absolute;
  z-index: -1;
  height: 24rem;
  inset: 0;
  background: linear-gradient(to bottom, #ffffff00 70%, #e25419);
  border-radius: 15px 0px 15px 0px;
  opacity: 60%;
}
</style>
