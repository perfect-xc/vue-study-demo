import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';
import app from './App.vue'

const vm = new Vue({
  el:'#app',
  router,
  render:c=>c(app)
});