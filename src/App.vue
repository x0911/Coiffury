<template>
  <div>
    <v-app>
      <!-- v-navigation-drawer -->
      <check-connection
        @detected-condition="handleConnectivityChange"
      ></check-connection>
      <div v-if="currentUser()">
        <!-- <ads-drawer></ads-drawer> -->
        <notification-drawer></notification-drawer>
        <navigation-drawer></navigation-drawer>
        <app-bar-in></app-bar-in>
      </div>
      <app-bar-out v-else></app-bar-out>
      <v-main
        :class="
          `${$vuetify.lang.current}-${$vuetify.breakpoint.lgAndUp}-${
            currentUser() ? 'true' : 'false'
          }`
        "
      >
        <v-container v-if="currentUser()">
          <router-view></router-view>
        </v-container>
        <router-view v-else></router-view>
      </v-main>
      <global-error-dialog></global-error-dialog>
    </v-app>
    <!-- <v-app>
      <app-bar></app-bar>
      <v-main>
        <landing-page></landing-page>
      </v-main>
    </v-app> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // LandingPage: () => import("@/views/out/landing-page.vue"),
    CheckConnection: () => import("v-offline"),
    AppBarIn: () => import("@/components/global/v-app-bar-in.vue"),
    AppBarOut: () => import("@/components/global/v-app-bar-out.vue"),
    NotificationDrawer: () =>
      import("@/components/global/v-notification-drawer.vue"),
    NavigationDrawer: () =>
      import("@/components/global/v-navigation-drawer.vue"),
    // AdsDrawer: () => import("@/components/ads/Main.vue"),
    GlobalErrorDialog: () => import("@/components/items/error-dialog.vue")
  },
  mounted() {
    this.$store.state.isOnline = navigator.onLine ? true : false;
  },
  data: () => ({}),
  methods: {
    handleConnectivityChange(status) {
      this.$store.state.isOnline = status;
    }
  }
};
</script>
