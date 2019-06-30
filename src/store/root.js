import Vue from 'vue';
import Vuex from 'vuex';

import { rulebook } from './modules/rulebook/rulebook';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rulebook: rulebook
  }
})
