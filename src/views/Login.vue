<template>
  <div id="login">
    <v-container pt-0>
      <v-layout row wrap>
        <v-flex xs8 sm5 md4 mx-auto>
          <v-card>
            <slot name="image">
              <div class="overflow-hidden">
                <img src="@/assets/card-primary.png" alt="login-page" />
              </div>
            </slot>
            <slot name="title">
              <v-card-title class="mb-4 pt-0">
                <h2 class="white--text font-weight-bold">log in</h2>
              </v-card-title>
            </slot>
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
                <slot name="button">
                  <v-btn
                    href="/"
                    :disabled="!valid"
                    block
                    dark
                    large
                    class="button-translate button-rounded mt-3 mb-3 purple-gradient"
                    @click="submit()"
                  >
                    <slot name="button-text">Get Started</slot>
                  </v-btn>
                </slot>
              </v-form>
              <slot name="form-footer">
                <div class="form-footer">
                  <span>
                    <router-link to="/register" class="link"
                      >Create account</router-link
                    >
                  </span>
                  <span>
                    <router-link to="/faqs" class="link"
                      >Need Help?</router-link
                    >
                  </span>
                </div>
              </slot>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 6) || "Minimum length is 6 characters"
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.valid;
      }
    }
  }
};
</script>
<style scoped>
.relative {
  position: relative;
}

#login img {
  position: absolute;
  left: 0;
  top: 0;
  width: 88%;
}

#login .form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  margin-bottom: 5px;
}

#login .link {
  text-transform: uppercase;
  font-size: 12px;
}

#login h2 {
  font-size: 70px;
  position: relative;
  margin-bottom: 2rem;
}

#footer {
  margin: 0 !important;
}
</style>
