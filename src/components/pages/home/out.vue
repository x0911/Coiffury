<template>
  <div>
    <s1></s1>
    <div style="position: relative">
      <confetti></confetti>
      <v-container class="pb-16">
        <s2 class="pt-10"></s2>
        <s3 class="pt-16"></s3>
      </v-container>
    </div>
  </div>
</template>

<script>
let getV = v => {
  return () => import(`@/components/pages/home/out/${v}.vue`);
};
export default {
  name: "langing-page",
  components: {
    S1: getV("s1"),
    S2: getV("s2"),
    S3: getV("s3"),
    confetti: () => import("@/components/items/confetti.vue")
  },
  data: () => ({})
};
</script>
