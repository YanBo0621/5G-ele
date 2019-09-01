// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

Vue.use(ElementUI);
Vue.use(Mint)
Vue.config.productionTip = false
axios.defaults.withCredentials = true

import { Header,Navbar,Cell,MessageBox,Button    } from 'mint-ui';

Vue.component("mt-header", Header);
Vue.component("mt-navbar", Navbar);
Vue.component("mt-cell", Cell);
Vue.component("mt-button", Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
