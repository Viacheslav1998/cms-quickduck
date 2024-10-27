import { createApp } from 'vue';
import App from './App.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@vuepic/vue-datepicker/dist/main.css';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './assets/custom.css';

const app = createApp(App);

app.use(router);
app.use(VueSweetalert2); 
app.component('VueDatePicker', VueDatePicker); 

app.mount('#app');
