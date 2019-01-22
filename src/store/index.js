import Vue from 'vue';
import Vuex from 'vuex';
// Import Modules
import SchoolData from './modules/school-data';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    SchoolData,
  },
});

export default store;
