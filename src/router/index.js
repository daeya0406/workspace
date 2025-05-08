import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import ContactView from '../views/ContactView.vue';
import LayoutGuideView from '../views/LayoutGuideView.vue';
import SettingsView from '../views/SettingsView.vue';
import SubLayout from '@/layouts/SubLayout.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { layout: SubLayout }
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
      meta: { layout: SubLayout }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: { layout: SubLayout }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { layout: SubLayout }
    },
    {
      path: '/layout-guide',
      name: 'layout-guide',
      component: LayoutGuideView,
      meta: { layout: SubLayout }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { 
        requiresAuth: true,
        layout: SubLayout
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { layout: SubLayout }
    }
  ]
});

// 네비게이션 가드
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // 실제로는 더 안전한 인증 체크 필요
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
