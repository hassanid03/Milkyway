import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';
import VueTailwindDatepicker from 'vue-tailwind-datepicker';
import VueTinder from 'vue-tinder';

import { createPinia } from 'pinia';
import 'tw-elements';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
app.use(VueTailwindDatepicker);
app.use(VueTinder);

