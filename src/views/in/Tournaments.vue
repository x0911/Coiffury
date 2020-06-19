<template>
  <div>
    <v-card>
      <v-card-title>Create Chat</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field
          label="Chat ID"
          hint="Please provide a chat ID"
          persistent-hint
          filled
          outlined
          aria-autocomplete="off"
          autocomplete="off"
          v-model="chat_id"
          @keypress.enter="runChat"
          :disabled="disable_id"
        ></v-text-field>
      </v-card-text>
      <v-card-text v-show="enable_chat">
        <vue-webrtc ref="chat_room" width="100%" :roomId="chat_id"></vue-webrtc>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import * as io from "socket.io-client";
window.io = io;
export default {
  name: "tournaments",
  data: () => ({
    chat_id: "",
    disable_id: false,
    enable_chat: false
  }),
  methods: {
    runChat() {
      this.$set(this, "disable_id", true);
      this.$set(this, "enable_chat", true);
      this.$refs.chat_room.join();
    }
  }
};
</script>
