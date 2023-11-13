import { createStore } from "vuex";

const store = createStore({
  modules: {},
  state() {
    return {
      isMobile: null,
    };
  },
  mutations: {
    setMobile(state, payload) {
      state.isMobile = payload.isMobile;
    },
  },
  actions: {
    checkIsMobile(context) {
      context.commit({
        type: "setMobile",
        isMobile: window.innerWidth <= 768,
      });
    },
  },
  getters: {
    isMobile(state) {
      return state.isMobile;
    }
  }
});

export default store;
