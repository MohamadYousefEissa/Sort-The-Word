import { createStore } from 'vuex'

import selectLettersModule from './selectLettersModule/index'
import coreAppModule from './coreAppModule/index'
const store = createStore({
  modules: { selectLettersModule, coreAppModule },
  state() {
    return {
      show: null
    }
  },
  getters: {
    show(state) {
      return state.show
    }
  },

  mutations: {
    show(state, val) {
      state.show = val
    }
  }
})
export default store
