import { createApp } from 'vue';
import { createPinia } from 'pinia';
import GKForms from '@/framework';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(GKForms);
app.use(createPinia());
app.use(router);

app.mount('#app');
