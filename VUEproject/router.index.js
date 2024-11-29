import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import Sucursales from '@/components/Sucursales.vue';

Vue.use(Router);

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/sucursales', component: Sucursales }
];

export default new Router({
  mode: 'history',
  routes
});

