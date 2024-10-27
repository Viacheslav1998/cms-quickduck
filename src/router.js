// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; 
import AddNews from './pages/AddNews.vue';
import News from './pages/News.vue';
import Test from './testPages/testAttention.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddNews },
  { path: '/news', component: News },
  { path: '/test', component: Test },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
