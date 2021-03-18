import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Cookies from 'js-cookie';
import Element from 'element-ui';
import './icons'; // icon
import 'normalize-css/normalize.css'; // a modern alternative to CSS resets

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
