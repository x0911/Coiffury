<template>
  <div>
    <v-dialog max-width="500" scrollable v-model="$store.state.appError.model">
      <v-card :disabled="loading" :loading="loading">
        <v-card-title class="error--text">
          <v-row>
            <v-col class="py-0">
              <span>Error Occured</span>
            </v-col>
            <v-col cols="auto" class="py-0">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    @click="$store.state.appError.model = false"
                    icon
                    v-on="on"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </template>
                <span>Close</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="subtitle-2 pt-4">
          <span v-html="$store.state.appError.msg"></span>
        </v-card-text>
        <v-divider class="mb-1"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="error"
            outlined
            class="text-capitalize px-6"
            @click="sendError"
          >
            Report a bug
          </v-btn>
          <v-btn
            color="error"
            class="text-capitalize px-6"
            @click="$store.state.appError.model = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "global-error-dialog",
  data: () => ({
    loading: false
  }),
  methods: {
    sendError() {
      this.loading = true;
      let $this = this,
        msg = this.$store.state.appError.msg,
        route = this.$route,
        appConnection = this.appConnection();
      this.fb.errors
        .add({
          msg,
          route,
          appConnection
        })
        .then(id => {
          $this.errorSent();
        })
        .catch(error => {
          $this.errorNotSent(error.msg);
        });
      if (!appConnection) {
        this.errorSent();
      }
    },
    errorSent() {
      //
    },
    errorNotSent() {
      //
    }
  }
};
</script>
