import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import Asdf from '../pages/asdf.vue'; // 파일 경로 확인

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/asdf',
    name: 'Asdf',
    component: Asdf
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
