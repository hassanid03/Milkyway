import { defineStore } from 'pinia';
import axios from 'axios';

export const usePlanetStore = defineStore('planets', {
  state: () => ({
    mercury: [],
    earth: [],
    planets: [],
  }),
  actions: {
    async getMercury() {
      const { data } = await axios.get('/milkyway/planets/1');
      this.mercury = data;
    },
    async getEarth() {
      const { data } = await axios.get('/milkyway/planets/2');
      this.earth = data;
    },
    async getPlanets() {
      const { data } = await axios.get('/milkyway/planets');
      this.planets = data;
    },
  },
  getters: {},
});
