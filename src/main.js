import "whatwg-fetch";
import "proxy-polyfill";
import Vue from "vue";
import App from "./App.vue";
// import { Plugins } from "@capacitor/core";
// const { SplashScreen } = Plugins;
import "./registerServiceWorker";
import WebRTC from "vue-webrtc"; // To enable audio, video and screen-shared chat
Vue.use(WebRTC);
import router from "./router";
import store from "./store";
const fb = require("./firebase.config");
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

// Vue Components and Directives
import VueLocalStorage from "vue-localstorage";
Vue.use(VueLocalStorage, {
  name: "ls",
  bind: true
});
import LotAnim from "vue-lottie-web";
Vue.component("LotAnim", LotAnim);
Vue.component("ellipse-title", () =>
  import("@/components/items/ellipse-title.vue")
);
import { mask } from "vue-the-mask";
Vue.directive("mask", mask);

// Import Custom CSS and JS
import "@/scss/main.scss";

// Mixins
import "@/mixin/index.js";

// Directives
import "@/directives/index.js";

Vue.config.productionTip = false;

let app;
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      created() {
        // SplashScreen.hide();
        this.fetchUserPublicInfo();
        let preloader = document.querySelector(".app-preloader");
        if (preloader) {
          preloader.parentNode.removeChild(preloader);
        }
      },
      methods: {
        fetchUserPublicInfo() {
          if (user) {
            // this.$store.state.currentUserId = user.uid;
            fb.users.doc(user.uid).onSnapshot(
              record => {
                if (record.exists) {
                  let data = record.data();
                  this.$store.state.currentUserPublic = data;
                } else {
                  this.$store.state.currentUserPublic = null;
                }
              },
              error => {
                // console.log(error);
              }
            );
          } else {
            this.$store.state.currentUserPublic = null;
          }
        }
      },
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
