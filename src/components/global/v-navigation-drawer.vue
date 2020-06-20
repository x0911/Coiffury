<template>
  <div>
    <v-navigation-drawer
      :right="$vuetify.lang.current == 'ar'"
      v-model="$store.state.options['drawer']"
      :temporary="!$store.state.options['fixed_sidenav']"
      app
      :mini-variant="$store.state.options['mini_variant']"
      mini-variant-width="80"
    >
      <v-list rounded dense class="pt-0">
        <template v-for="(item, i) in single_items">
          <v-list-item
            @click="item.method ? runFun(item.method) : () => {}"
            :class="item.background"
            v-if="!item.divider"
            color="primary"
            :to="item.url"
            :key="i"
          >
            <v-list-item-avatar v-if="item.avatar.icon">
              <lot-anim
                renderer="svg"
                className="svg-grey darken-1"
                v-if="item.avatar.svg"
                style="height: 25px"
                :autoplay="item.avatar.autoplay"
                :animationData="getAnim(item.avatar.icon)"
              ></lot-anim>
              <v-icon v-text="item.avatar.icon" v-else></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navigation-drawer",
  data: () => ({
    single_items: [
      // {
      //   avatar: {
      //     svg: true,
      //     icon: "globe",
      //     autoplay: false
      //   },
      //   title: "Home",
      //   subtitle: "",
      //   url: "/"
      // },
      // {
      //   avatar: {
      //     svg: false,
      //     icon: "mdi-account-circle"
      //   },
      //   title: "Profile",
      //   subtitle: "",
      //   url: "/profile"
      // },
      // {
      //   divider: true
      // },
      // {
      //   avatar: {
      //     svg: false,
      //     icon: "mdi-view-dashboard"
      //   },
      //   title: "Dashboard",
      //   subtitle: "",
      //   url: "/dashboard"
      // },
      // {
      //   divider: true
      // },
      // {
      //   avatar: {
      //     svg: false,
      //     icon: "mdi-cog"
      //   },
      //   title: "Settings",
      //   subtitle: "",
      //   url: "/settings"
      // },
      // {
      //   divider: true
      // },
      // {
      //   avatar: {
      //     svg: false,
      //     icon: "mdi-information"
      //   },
      //   title: "About",
      //   subtitle: "",
      //   url: "/about"
      // },
      // {
      //   avatar: {
      //     svg: false,
      //     icon: "mdi-message"
      //   },
      //   title: "Contact",
      //   subtitle: "",
      //   url: "/contact"
      // },
      // {
      //   avatar: {
      //     svg: false,
      //     icon: "mdi-help-circle"
      //   },
      //   title: "Help Center",
      //   subtitle: "",
      //   url: "/help"
      // },
      // {
      //   avatar: {
      //     svg: false,
      //     icon: "mdi-logout"
      //   },
      //   title: "Logout",
      //   subtitle: ""
      //   // method: "logout"
      // }
    ]
  }),
  methods: {
    runFun(fun) {
      return this[fun]();
    }
  }
};
</script>
