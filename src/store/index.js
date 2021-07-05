import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    currentPackage: null
  },
  getters: {
    packages: state => state.packages,
    currentPackage: state => state.currentPackage
  },
  mutations: {
    SET_PACKAGES (state, packages) {
      state.packages = packages
    },
    SET_CURRENT_PACKAGE (state, data) {
      state.currentPackage = data
    },
  },
  actions: {
    async GET_PACKAGES ({ commit }) {
      const response = await axios.get(`${process.env.VUE_APP_ROOT_PACKAGES}/stats/packages`)
      commit('SET_PACKAGES', response.data)
    },
    async SEARCH_PACKAGES ({ commit }, payload) {
      const response = await axios.post(`${process.env.VUE_APP_ROOT_SEARCH}/query?`, payload)
      commit('SET_PACKAGES', response.data)
    },
    async GET_CURRENT_PACKAGE ({ commit }, payload) {
      console.log(payload)
      const response = await axios.get(`${process.env.VUE_APP_ROOT_PACKAGES}/package/npm/${payload}`)
      commit('SET_CURRENT_PACKAGE', response.data)
    }
  },
  modules: {
  }
})
