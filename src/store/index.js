import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ["user"],
});

export default new Vuex.Store({
  state: {
    user: {},
    userProfile: {},
    loader: false,
    authStatus: false,
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    updateUserProfile(state, user) {
      state.userProfile = user;
    },
    showLoader(state, payload) {
      state.loader = payload;
    },
    updateAuthStatus(state, payload) {
      state.authStatus = payload;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      commit("updateUser", user);
    },
    updateUserProfile({ commit }, user) {
      commit("updateUserProfile", user);
    },
    showLoader({ commit }, payload) {
      commit("showLoader", payload);
    },
    updateAuthStatus({ commit }, payload) {
      commit("updateAuthStatus", payload);
    },
  },
  modules: {},
  plugins: [dataState],
});
