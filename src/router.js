import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; 
import AddNews from './pages/AddNews.vue';
import News from './pages/News.vue';
import Test from './testPages/testAttention.vue';
import TestStaticData from './testPages/testStaticData.vue';
import TestPromise from './testPages/testPromise.vue';
import TestClosure from './testPages/testClosure.vue';
import TestRecursion from './testPages/testRecursion.vue';
import ErrorPage from './pages/404.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddNews },
  { path: '/news', component: News },
  { path: '/test', component: Test },
  { path: '/test-static', component: TestStaticData },
  { path: '/test-async', component: TestPromise },
  { path: '/test-closure', component: TestClosure },
  { path: '/test-recursion', component: TestRecursion },
  { path: '/:pathMatch(.*)*', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
