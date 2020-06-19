<template>
  <v-tooltip bottom v-if="pending">
    <template v-slot:activator="{ on }">
      <sup v-on="on">
        <v-icon small color="warning">mdi-information</v-icon>
      </sup>
    </template>
    <span v-text="msg"></span>
  </v-tooltip>
</template>

<script>
export default {
  name: "pending-tooltip",
  props: ["pending", "text"],
  data: () => ({}),
  computed: {
    msg() {
      return this.text && this.text.length > 0
        ? this.text
        : "Has pending updates.";
    }
  }
};
</script>
