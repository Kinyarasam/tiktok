import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/auth/login.vue';
import NotFound from '../views/NotFound.vue';
import PhoneOrEmail from '../views/auth/PhoneOrEmail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/login/phone-or-email',
    name: 'PhoneOrEmail',
    component: PhoneOrEmail
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
