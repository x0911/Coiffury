<template>
  <div>
    <v-card class="raised-bottom-radius">
      <v-card-title>
        <ellipse-title
          elevation="4"
          dark
          icon="mdi-post-outline"
          color="indigo"
        ></ellipse-title>
      </v-card-title>
      <v-card-subtitle class="pb-0 mt-4 ls-1 text-overline font-weight-bold">
        Blog
      </v-card-subtitle>
      <v-card-title class="pt-0 text-h4">Our latest posts</v-card-title>
      <v-card-text>
        <v-row>
          <template v-for="(s, i) in services">
            <v-col cols="12" sm="6" lg="4" xl="3" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :dark="hover"
                  @click="() => {}"
                  style="transition: .4s linear; height: 100%; padding-bottom: 70px"
                  :class="
                    `raised-bottom-radius overflow-hidden ${
                      hover ? 'background-linear elevation-8' : ''
                    }`
                  "
                >
                  <v-img
                    :class="
                      `align-end service-img ${hover ? 'zoom-on-hover' : ''}`
                    "
                    :src="require(`@/assets/landing/s1/${s.img}`)"
                    height="200"
                    aspect-ratio="1"
                  >
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        ma-0
                        flex-center
                        align-center
                        align-content-center
                      >
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                  <v-card-subtitle
                    class="pb-0"
                    v-text="s.time"
                  ></v-card-subtitle>
                  <v-card-title class="pt-1 break-word" v-text="s.title">
                  </v-card-title>
                  <v-card-text v-text="s.desc"></v-card-text>
                  <div class="px-4">
                    <v-divider></v-divider>
                  </div>
                  <v-card-title class="text-overline">
                    <div>
                      Categories
                      <v-divider></v-divider>
                    </div>
                  </v-card-title>
                  <v-card-text class="pt-0">
                    <v-chip-group>
                      <template v-for="(cat, i) in s.cats">
                        <v-chip
                          :key="i"
                          :color="hover ? 'white' : 'primary'"
                          outlined
                          small
                          style="border-radius: 4px"
                          v-text="cat"
                        ></v-chip>
                      </template>
                    </v-chip-group>
                  </v-card-text>
                  <v-card-actions
                    style="position: absolute; bottom: 15px"
                    class="px-4"
                  >
                    <v-btn text :color="hover ? 'white' : 'primary'">
                      Read Post
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
  name: "landing-page-s3",
  mounted() {},
  data: () => ({
    services: [
      {
        time: "Mar 12, 2020",
        title: "How to find the best hair salons for females in Egypt?",
        desc:
          "Ullamco Lorem exercitation qui sit aute adipisicing minim et fugiat ad dolor. Adipisicing minim excepteur velit qui eu ad eiusmod in consequat. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "2.jpg",
        cats: ["Hair", "Salons", "Female"],
        url: "/hair-salon"
      },
      {
        time: "Apr 20, 2020",
        title: "Your skin, your personality. Know more about yourself",
        desc:
          "Duis occaecat quis fugiat nulla proident excepteur anim non nulla cillum aliquip voluptate. Irure quis ex consequat et esse eu eu eu anim aliquip Lorem incididunt. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "1.jpg",
        cats: ["Skin", "Female"],
        url: "/hair-salon"
      },
      {
        time: "May 01, 2020",
        title: "15 Modern hair machines realesed in Sohag and Assuit",
        desc:
          "Veniam est magna ut et anim ea voluptate officia nostrud ad deserunt minim commodo. In nostrud Lorem culpa aliquip velit. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "3.jpg",
        cats: ["Hair", "Male"],
        url: "/hair-salon"
      },
      {
        time: "Jun 14, 2020",
        title: "Buy the best beauty products with the lowest price.",
        desc:
          "Voluptate occaecat nostrud aliqua nulla. Dolor excepteur non eu aliqua deserunt. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "4.jpg",
        cats: ["Beauty", "Skin", "Hair", "Creams"],
        url: "/hair-salon"
      },
      {
        time: "Jul 19, 2020",
        title: "12 benifits you can get from Massage",
        desc:
          "Culpa mollit quis magna laborum amet. Id laboris nostrud mollit eu occaecat ea fugiat ea deserunt irure dolor culpa. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "5.jpg",
        cats: ["Massage", "Relaxation"],
        url: "/hair-salon"
      },
      {
        time: "Aug 07, 2020",
        title: "How SPA can affect your physical and mental health?",
        desc:
          "Id sunt laboris consequat esse adipisicing cillum exercitation consequat ipsum cupidatat sint laborum aliquip irure. Tempor officia cupidatat anim sint aute quis reprehenderit ea veniam in. Sit esse consectetur in id est ad ut adipisicing sit duis labore est quis. Est laboris occaecat minim voluptate.",
        img: "6.jpg",
        cats: ["SPA", "Bodycare"],
        url: "/hair-salon"
      }
    ]
  }),
  methods: {}
};
</script>
