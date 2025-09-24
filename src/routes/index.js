import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Home from '../components/Home.vue';
import ArtivitaF06_VSL_v01 from '../pages/artivita/artivita-f06-2025-aqs/vsl-v01.vue';

//Define some routes
const routes = [
    {
        path: '/', 
        component: HelloWorld
    },
    {
        path: '/artivita/artivita-f06-2025-aqs/vsl-v01',
        component: ArtivitaF06_VSL_v01,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


// src/routes.js
/* 

import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
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
*/ 