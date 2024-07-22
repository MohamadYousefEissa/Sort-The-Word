import { createStore } from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
const store = createStore({
  state() {
    return state
  },
  actions,
  getters,
  mutations: {
    show(state, val) {
      state.show = val
    }
  }
})
export default store
