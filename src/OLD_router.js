// src/routes.js
import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './pages/HelloWorld.vue';
import ArtivitaF06_VSL_v01 from './pages/artivita/artivita-f06-2025-aqs/vsl-v01.vue';

const routes = [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '/artivita/artivita-f06-2025-aqs/vsl-v01',
    component: ArtivitaF06_VSL_v01,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;