<template>
  <div id="contact-us">
    <v-card>
      <slot name="image">
        <img src="@/assets/card-primary.png" />
      </slot>
      <v-card-title class="mb-4 pt-0">
        <slot name="title">
          <h2 class="white--text font-weight-bold">Contact Us</h2>
        </slot>
      </v-card-title>
      <v-card-text>
        <v-form class="form" ref="form" v-model="valid">
          <slot name="name-input">
            <v-text-field
              label="Name"
              v-model="name"
              prepend-inner-icon="person"
              :rules="nameRules"
              type="text"
              required
              solo
              autocomplete
              color="#00bf9a"
            ></v-text-field>
          </slot>
          <slot name="email-input">
            <v-text-field
              label="Email"
              v-model="email"
              type="email"
              prepend-inner-icon="email"
              :rules="emailRules"
              required
              autocomplete
              solo
              color="#00bf9a"
            ></v-text-field>
          </slot>
          <slot name="textarea">
            <v-textarea
              prepend-inner-icon="edit"
              :rules="textRules"
              required
              solo
              color="#00bf9a"
              autocomplete
            ></v-textarea>
          </slot>
          <!-- Button -->
          <slot name="button">
            <v-btn
              :disabled="!valid"
              block
              dark
              large
              class="button-translate button-rounded mt-3 mb-3 purple-gradient"
              :loading="loading"
              @click="loader = 'loading'"
            >
              <slot name="button-text">Send</slot>
            </v-btn>
          </slot>

          <slot name="form-footer"></slot>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- Snackbar -->
    <slot name="snackbar">
      <v-snackbar v-model="snackbar6" :color="background">
        <v-icon class="white--text mr-3">notification_important</v-icon>Your message is sended!
        <v-btn icon light @click="snackbar6 = false">
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-snackbar>
    </slot>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      password: "",
      checkbox: false,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 6) || "Minimum length is 6 characters"
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      textRules: [
        v => !!v || "Message is required",
        v => (v && v.length >= 8) || "Minimum length is 8 characters"
      ],
      loader: null,
      loading: false,
      background: "#e66ad2",
      snackbar6: false,
      timeout: 3000
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => ((this[l] = false), (this.snackbar6 = true)), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
#contact-us {
  overflow: hidden;
}

#contact-us img {
  position: absolute;
  left: 0;
  top: -120px;
  width: 70%;
}

#contact-us h2 {
  font-size: 50px;
}

#contact-us .v-card__title,
#contact-us .v-card__text {
  position: relative;
}

#contact-us input {
  width: 100%;
  padding: 7px 12px;
  border: 1px solid rgba(29, 36, 58, 0.2);
  border-radius: 4px;
  color: #333;
  outline: none;
  font-weight: 400;
  margin-bottom: 10px;
}

#contact-us .agree {
  display: inline-flex;
  align-items: center;
}

#contact-us .agree .custom-checkbox {
  margin-top: 8px;
}
</style>
