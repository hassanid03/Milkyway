import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('article', {
  state: () => ({ article: [] }),
  getters: {},
  actions: {
    async getArticle() {
      const { data } = await axios.get('/milkyway/articles');
      console.log(data);
      this.article = data;
    },
  },
});
