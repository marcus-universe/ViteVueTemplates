import { createStore } from 'vuex'

export default createStore({
  state: {
    headerHeight: 0,
  },
  getters: {},
  mutations: {
    headerHeightSetter(state, height) {
      state.headerHeight = height
    },
  },
  actions: {
    setHeaderHeight({ commit }, height) {
      commit('headerHeightSetter', height)
    },
  },
  modules: {},
})
