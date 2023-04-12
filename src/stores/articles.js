import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('article', {
  state: () => ({ article: [] }),
  getters: {},
  actions: {
    async getArticle() {
      const { data } = await axios.get('https://milkyway-5x5i.onrender.com/milkyway/articles');
      console.log(data);
      this.article = data;
    },
  },
});
