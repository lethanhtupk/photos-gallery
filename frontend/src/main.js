import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App),
})
