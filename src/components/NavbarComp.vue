<template>
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
          to="/careers"
          active-class="block highlight py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          CAREERS
        </RouterLink>
        <RouterLink
          to="/trips"
          active-class="block highlight py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          TRIPS
        </RouterLink>
      </div>
      <RouterLink to="/shop">
        <div class="">SHOP</div>
      </RouterLink>
    </div>
  </nav>
  <!-- <nav class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto text-white md:text-xs md:font-regular"
      >
        <div class="flex md:order-2">SHOP</div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 rounded md:bg-transparent focus:text-orange  md:text-blue-700  md:p-0"
                aria-current="page"
                >HOME</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded md:hover:bg-transparent  md:hover:text-blue-700 md:p-0"
                >GOALS</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0"
                >CAREERS</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0"
                >TRIPS</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style>
/* .router-link-active {
  color: #fd6323 !important;
  text-decoration: underline;
} */
</style>
