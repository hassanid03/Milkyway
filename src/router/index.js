import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Goals from '../views/GoalsView.vue';
import Careers from '../views/CareersView.vue';
import Trips from '../views/TripsView.vue';
import LegalNotice from '../views/LegalNotice.vue';
import shop from '../views/ShopView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/goals',
      name: 'Goals',
      component: Goals,
    },
    {
      path: '/careers',
      name: 'Careers',
      component: Careers,
    },
    {
      path: '/trips',
      name: 'Trips',
      component: Trips,
    },
    {
      path: '/legalnotice',
      name: 'Legal Notice',
      component: LegalNotice,
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
    },
  ],
});

export default router;
