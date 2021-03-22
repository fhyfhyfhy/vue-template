import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon'; // svg component

// register globally
Vue.component('svg-icon', SvgIcon);

// 自动从svg文件夹中引入.svg文件
const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
