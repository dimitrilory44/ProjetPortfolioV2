import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Slider from '@jeremyhamm/vue-slider';
import VueCarousel from 'vue-carousel';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Slider)
Vue.use(VueCarousel)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
