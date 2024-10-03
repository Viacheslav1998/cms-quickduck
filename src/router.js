// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; 
import AddNews from './pages/AddNews.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddNews },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
