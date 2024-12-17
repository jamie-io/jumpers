import { createApp } from 'vue';
import App from './App.vue';  // Corrected relative path
import router from './router/index.js';

const app = createApp(App);
app.use(router);  // Register the router
app.mount('#app');