import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  // darkMode: false,
  navbar: true,
  snackbar: false
};

// Getters
const getters = {
  // darkMode() {
  //   return state.darkMode;
  // },

  navbar() {
    return state.navbar;
  },
  snackbar() {
    return state.snackbar;
  }
};

// Mutations
const mutations = {
  // toggleDarkMode() {
  //   if (state.darkMode === true) {
  //     state.darkMode = false;
  //     document.querySelector('.sidebar').style.background = '#fff';
  //     document.querySelector('.navbar').style.background = '#f3f3f3';
  //   } else {
  //     state.darkMode = true;
  //     document.querySelector('.sidebar').style.background =
  //       'linear-gradient(176deg, rgba(71,31,189,1) 0%, rgba(120,224,229,1) 100%)';
  //     document.querySelector('.navbar').style.background =
  //       'linear-gradient(176deg, rgba(71,31,189,1) 0%, rgba(120,224,229,1) 100%)';
  //   }
  // },
  navbarToggle() {
    const important = '!important'
    if (state.navbar === true) {
      state.navbar = false;
      document.querySelector(".sidebar").style.width = "250px";
      document.querySelector(".nav-text").style.opacity = "1";
      document.querySelector(".nav-text").style.color = "#fff";
      document.querySelector(".nav-text").style.transform =
        "translate(15px) scale(1, 1)";
      document.querySelector(".nav-text").style.transition = "all 0.3s linear";
      document.querySelector(".divider-1").style.width = "90%";

    } else {
      state.navbar = true;
      document.querySelector(".sidebar").style.width = "80px";
      document.querySelector(".nav-text").style.opacity = "0";
      document.querySelector(".nav-text").style.transform =
        "translate(-25px) scale(1, 1)";
      document.querySelector(".nav-text").style.transition = "all 0.3s linear";
      // document.querySelector(".divider-1").style.width = "50px";

    }
  },

  snackbarToggle() {
    if (state.snackbar === false) {
      state.snackbar = true;

    } else {
      state.snackbar = false;
    }
  }
};

// // Actions
const actions = {
  // triggerDarkMode(context) {
  //   context.commit('toggleDarkMode');
  // },

  triggerNavbarToggle(context) {
    context.commit("navbarToggle");
  },
  triggerSnackbarToggle(context) {
    context.commit("snackbarToggle");
  }
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});
