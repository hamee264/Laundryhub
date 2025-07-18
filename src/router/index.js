import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Getintouch from '../views/Getintouch.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Location from '../views/Location.vue';
import Pricing from '../views/Pricing.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Getintouch',
    component: Getintouch,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/Location',
    name: 'Location',
    component: Location,
  },
  {
    path: '/Pricing',
    name: 'Pricing',
    component: Pricing,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // ✅ Use hash mode for GitHub Pages
  routes,
});

export default router;
