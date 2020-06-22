<template>
  <div>
    <v-card class="raised-bottom-radius">
      <v-card-title>
        <ellipse-title
          elevation="4"
          dark
          icon="mdi-eye-settings-outline"
          color="indigo"
        ></ellipse-title>
        <!-- mdi-rhombus-split-outline -->
      </v-card-title>
      <v-card-subtitle class="pb-0 mt-4 ls-1 text-overline font-weight-bold">
        Services
      </v-card-subtitle>
      <v-card-title class="pt-0 text-h4">What will you find?</v-card-title>
      <v-card-text>
        <v-row>
          <template v-for="(s, i) in services">
            <v-col cols="12" sm="6" lg="4" xl="3" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  @click="() => {}"
                  style="transition: .4s linear; height: 100%; padding-bottom: 70px"
                  :class="
                    `raised-bottom-radius overflow-hidden elevation-${
                      hover ? '8' : ''
                    }`
                  "
                >
                  <v-img
                    :class="
                      `align-end service-img ${hover ? 'zoom-on-hover' : ''}`
                    "
                    :src="require(`@/assets/standard/landing/s2-3/${s.img}`)"
                    :lazy-src="require(`@/assets/mini/landing/s2-3/${s.img}`)"
                    height="200"
                    aspect-ratio="1"
                    :gradient="
                      'to top right, rgba(185, 0, 255, 0.6), rgba(13, 0, 255, 0.25)'
                    "
                  >
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        ma-0
                        flex-center
                        align-center
                        align-content-center
                        justify-center
                      >
                        <v-progress-circular
                          indeterminate
                          color="white"
                        ></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                  <v-card-title class="break-word">
                    <div>
                      <div v-text="s.title"></div>
                      <v-divider></v-divider>
                    </div>
                  </v-card-title>
                  <v-card-text v-text="s.desc"></v-card-text>
                  <v-card-actions
                    style="position: absolute; bottom: 15px"
                    class="px-4"
                  >
                    <v-btn text color="primary">
                      Learn More
                      <span
                        :style="
                          `transition: .3s linear; width: ${
                            hover ? '10px' : '5px'
                          }`
                        "
                      ></span>
                      <v-icon
                        small
                        style="transform: rotateY(180deg)"
                        v-text="'mdi-keyboard-backspace'"
                      ></v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.service-img {
  // filter: grayscale(1);
  transition: 0.2s linear;
  &.zoom-on-hover {
    // filter: grayscale(0);
  }
  .v-image__image {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  // Make the img in half card
}
</style>

<script>
export default {
  name: "landing-page-s2",
  mounted() {},
  data: () => ({
    services: [
      {
        title: "Hair Salons",
        desc:
          "Ullamco Lorem exercitation qui sit aute adipisicing minim et fugiat ad dolor. Adipisicing minim excepteur velit qui eu ad eiusmod in consequat. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "2.jpg",
        url: "/hair-salon"
      },
      {
        title: "Beauty Centers",
        desc:
          "Duis occaecat quis fugiat nulla proident excepteur anim non nulla cillum aliquip voluptate. Irure quis ex consequat et esse eu eu eu anim aliquip Lorem incididunt. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "1.jpg",
        url: "/hair-salon"
      },
      {
        title: "Hair Salons [Men]",
        desc:
          "Veniam est magna ut et anim ea voluptate officia nostrud ad deserunt minim commodo. In nostrud Lorem culpa aliquip velit. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "3.jpg",
        url: "/hair-salon"
      },
      {
        title: "Beauty Products",
        desc:
          "Voluptate occaecat nostrud aliqua nulla. Dolor excepteur non eu aliqua deserunt. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "4.jpg",
        url: "/hair-salon"
      },
      {
        title: "Massage",
        desc:
          "Culpa mollit quis magna laborum amet. Id laboris nostrud mollit eu occaecat ea fugiat ea deserunt irure dolor culpa. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "5.jpg",
        url: "/hair-salon"
      },
      {
        title: "SPA",
        desc:
          "Id sunt laboris consequat esse adipisicing cillum exercitation consequat ipsum cupidatat sint laborum aliquip irure. Tempor officia cupidatat anim sint aute quis reprehenderit ea veniam in. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "6.jpg",
        url: "/hair-salon"
      }
    ]
  }),
  methods: {}
};
</script>
