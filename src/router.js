// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; 
import Add from './pages/Add.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: Add },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
