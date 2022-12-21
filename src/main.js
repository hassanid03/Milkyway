import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';
import 'tw-elements';

import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
