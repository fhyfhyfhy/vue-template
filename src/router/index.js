import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    // redirect: '/dashboard',
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: () => import('@/views/dashboard/index'),
    //     name: 'Dashboard',
    //     meta: {title: 'Dashboard', icon: 'dashboard', affix: true},
    //   },
    // ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
