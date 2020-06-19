import Vue from "vue";
import Vuex from "vuex";

let app_title = "Haircode";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      loading: false
    },
    app_title,
    isOnline: false,
    appError: {
      msg: "",
      model: false
    },
    options: {
      drawer: null,
      rtl_sidenav: false,
      fixed_sidenav: true,
      mini_variant: false
    },
    noti_options: {
      counter: 0,
      drawer: null,
      rtl_sidenav: false,
      fixed_sidenav: false,
      mini_variant: false
    },
    ads_options: {
      drawer: null,
      fixed_sidenav: true
    },
    currentUser: null,
    currentUserPublic: null,
    login: {
      step: 0,
      loading: false,
      phone: {
        mask: "+20-###-###-####",
        value: ""
      },
      code: {
        mask: "######",
        value: "",
        resendTime: 60,
        timer: ""
      },
      city: {
        value: ""
      }
    }
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
      // state.app.loading = false;
    }
  },
  actions: {
    clearData({ commit }) {
      commit("setCurrentUser", null);
    }
  },
  modules: {}
});
