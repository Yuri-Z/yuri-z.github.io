import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import globFunc from './assets/js/globalFunctions/index';
import Main from './components/Main.vue';

require('babel-core/register');
require('babel-polyfill');

Vue.use(VueAxios, axios);

Vue.mixin({
  methods: {
    ...globFunc,
  },
});

Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus;
  },
});


new Vue({
  el: '#app',
  data: {
    bus: new Vue([]),
  },
  render: (h) => h(Main),
});
