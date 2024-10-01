import { createApp } from 'vue'
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './assets/custom.css';

const app = createApp(App);

app.use(router);
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');