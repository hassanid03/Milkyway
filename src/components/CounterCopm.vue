<template>
  <div class="text-white">
    <div
      class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center text-4xl font-medium"
    >
      <div class="flex flex-col p-2 bg-neutral rounded-box">
        <p v-if="days < 10">0{{ days }}</p>
        <p v-else>{{ days }}</p>
        <p class="font-regular text-base">Days</p>
      </div>
      <div class="flex flex-col p-2 bg-neutral rounded-box">
        <p v-if="hours % 24 < 10">0{{ hours % 24 }}</p>
        <p v-else>{{ hours % 24 }}</p>
        <p class="font-regular text-base">Hours</p>
      </div>
      <div class="flex flex-col p-2 bg-neutral rounded-box">
        <p v-if="minutes % 60 < 10">0{{ minutes % 60 }}</p>
        <p v-else>{{ minutes % 60 }}</p>
        <p class="font-regular text-base">Min</p>
      </div>
      <div class="flex flex-col p-2 bg-neutral rounded-box">
        <p v-if="seconds % 60 < 10">0{{ seconds % 60 }}</p>
        <p v-else>{{ seconds % 60 }}</p>
        <p class="font-regular text-base">Sec</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const launchDare = new Date('30  June 2023');

setInterval(() => {
  const currDate = new Date();
  const launchTime = launchDare - currDate;

  seconds.value = parseInt(launchTime / 1000);
  minutes.value = parseInt(seconds.value / 60);
  hours.value = parseInt(minutes.value / 60);
  days.value = parseInt(hours.value / 24);
});
</script>

<style></style>
