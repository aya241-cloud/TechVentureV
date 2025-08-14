import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './assets/css/main.css'; // Import Tailwind CSS
const app = createApp(App);
app.use(router); // Use Vue Router
app.mount('#app');