<template>
  <div style="background-image: linear-gradient(#27262d, #56555a, #394d53)">
    <div class="bgPage1">
      <NavbarComp></NavbarComp>
      <div>
        <h2>Items to Buy</h2>
        <ul>
          <li v-for="item in items" :key="item.id">
            {{ item.name }}
            <button @click="addItemToCart(item)">Buy</button>
          </li>
        </ul>
        <h2>Shopping Cart</h2>
        <p>Number of items: {{ cart.length }}</p>
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
import NavbarComp from '@/components/NavbarComp.vue';
</script>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
      ],
      cart: [],
    };
  },
  methods: {
    addItemToCart(item) {
      this.cart.push(item);
    },
  },
};
</script>

<style></style>
