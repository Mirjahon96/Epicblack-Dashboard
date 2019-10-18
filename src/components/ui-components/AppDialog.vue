<template>
  <div id="app-dialog" class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn
          rounded
          dark
          v-on="on"
          :class="{'purple-gradient' : purple, 'orange-gradient' : orange, 'blue-gradient' : blue}"
        >
          <slot name="button-text">Send Message</slot>
        </v-btn>
      </template>

      <v-card>
        <img :src="img" />
        <v-card-title class="headline relative font-weight-medium white--text mb-2">
          <slot name="form-text">Send Message</slot>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon @click="dialog = false">close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="margin">
          <v-layout row wrap>
            <v-flex xs12 pt-0>
              <v-form ref="form" v-model="valid">
                <slot name="layout">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <slot name="text-input">
                        <v-text-field
                          label="Name"
                          prepend-inner-icon="person"
                          type="text"
                          solo
                          autocomplete
                          color="#00bf9a"
                          :rules="nameRules"
                        ></v-text-field>
                      </slot>
                    </v-flex>
                    <slot name="email-input"></slot>
                    <v-flex xs12>
                      <slot name="textarea">
                        <v-textarea
                          prepend-inner-icon="edit"
                          solo
                          color="#00bf9a"
                          label="Message"
                          autocomplete
                          :rules="messageRules"
                        ></v-textarea>
                      </slot>
                    </v-flex>
                  </v-layout>
                </slot>
                <!-- Button -->
                <slot name="button">
                  <v-btn
                    :disabled="!valid"
                    dark
                    block
                    large
                    class="button-translate mt-3 mb-3 button-rounded"
                    :class="{'purple-gradient' : purple, 'orange-gradient' : orange}"
                    :loading="loading"
                    @click="loader = 'loading'"
                    v-on:click="submit()"
                  >Send</v-btn>
                </slot>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Snackbar -->
    <v-snackbar v-model="snackbar3" :color="background" :top="y === 'top'">
      <v-icon class="white--text mr-3">notification_important</v-icon>
      <slot name="snackbar-message">Your message is sended!</slot>
      <v-btn icon light @click="snackbar3 = false">
        <v-icon class="white--text">close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "AppDialog",
  props: {
    purple: {
      type: Boolean,
      required: false,
      default: true
    },
    orange: {
      type: Boolean,
      required: false,
      default: false
    },
    blue: {
      type: Boolean,
      required: false,
      default: false
    },
    img: {
      type: String,
      required: false,
      default: require("@/assets/card-primary.png")
    }
  },
  data() {
    return {
      valid: true,
      dialog: false,
      loader: null,
      loading: false,
      snackbar3: false,
      background: "#e66ad2",
      timeout: 3000,
      y: "top",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 6) || "Minimum length is 6 characters"
      ],
      messageRules: [
        v => !!v || "Message is required",
        v => (v && v.length >= 1) || ""
      ]
    };
  },
  watch: {
    loader() {
      const l = this.loader;

      this[l] = !this[l];

      setTimeout(
        () => (
          (this[l] = false), (this.dialog = false), (this.snackbar3 = true)
        ),
        2500
      );

      this.loader = null;
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
      }
    }
  }
};
</script>

<style scoped>
.relative {
  position: relative;
}

img {
  position: absolute;
  left: 0;
  top: -16%;
  width: 85%;
}

.margin {
  margin-top: 5rem;
  position: relative;
  z-index: 12;
}
</style>
