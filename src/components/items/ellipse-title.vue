<template>
  <div>
    <div
      :style="`height: ${size ? size : '50'}px; width: ${size ? size : '50'}px`"
      class="ellipse-animation"
    >
      <div
        :class="
          `background elevation-${elevation ? elevation : '0'} ${
            color ? color : 'primary'
          }`
        "
        style="background: linear-gradient(30deg, rgba(185, 0, 255, 0.8), rgba(13, 0, 255, 0.5)) center center no-repeat;"
      ></div>
      <v-icon :dark="dark" class="icon" v-text="icon"></v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "ellipse-title",
  props: ["icon", "color", "size", "dark", "elevation"],
  data: () => ({})
};
</script>
