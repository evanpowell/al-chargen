import Vue from 'vue';
import Vuex from 'vuex';

import { character } from './modules/character/character';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    character: character
  }
})
