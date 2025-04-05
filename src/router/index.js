import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue';
// import AboutPage from '../pages/About.vue';
import NotFoundPage from '../pages/NotFound.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  // { path: '/about', name: 'About', component: AboutPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
