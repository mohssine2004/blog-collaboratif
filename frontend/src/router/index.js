import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreatePostView from '../views/CreatePostView.vue'; // Ce fichier est manquant

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePostView, // Ce composant est manquant
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;