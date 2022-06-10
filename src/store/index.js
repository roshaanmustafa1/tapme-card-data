import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    userProfile: {},
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    updateUserProfile(state, user) {
      state.userProfile = user;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      commit("updateUser", user);
    },
    updateUserProfile({ commit }, user) {
      commit("updateUserProfile", user);
    },
  },
  modules: {},
});
