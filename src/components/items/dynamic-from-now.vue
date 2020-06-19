<template>
  <span>
    {{ currentFrom }}
  </span>
</template>

<script>
export default {
  name: "dynamic-from-now",
  props: ["time"],
  mounted() {
    this.updateFromNow();
    this.interval = setInterval(this.updateFromNow, 50000); // Update every 5 minutes
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  data: () => ({
    currentFrom: "",
    interval: ""
  }),
  methods: {
    updateFromNow() {
      return (this.currentFrom = this.$moment(this.time).fromNow());
    }
  }
};
</script>
