import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';
import VueTailwindDatepicker from 'vue-tailwind-datepicker';

import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
app.use(VueTailwindDatepicker);
