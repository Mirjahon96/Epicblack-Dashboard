<template>
  <div id="register">
    <v-container grid-list-xl pt-0 pb-5>
      <v-layout row wrap>
        <!-- Features -->
        <v-flex xs12 sm6 md5 class="mx-auto">
          <div class="mt-5">
            <div class="features pb-4" v-for="feature in features" :key="feature.id">
              <div class="left icon">
                <v-icon large :style="{color: feature.color}">{{ feature.icon }}</v-icon>
              </div>
              <div class="pr-4 description">
                <h3 class="title white-color">{{ feature.heading }}</h3>
                <p class="subtitle-1 grey--text">{{ feature.text }}</p>
              </div>
            </div>
          </div>
        </v-flex>
        <!-- Register form -->
        <v-flex xs12 sm6 md7 class="mx-auto">
          <v-card class="overflow-hidden">
            <img src="@/assets/card-primary.png" />
            <v-card-title class="mb-5 pt-0">
              <h2 class="white--text font-weight-bold">register</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="form" ref="form" v-model="valid">
                <v-text-field
                  v-for="field in fields"
                  :key="field.id"
                  class="i"
                  :label="field.label"
                  v-model="field.name"
                  :prepend-inner-icon="field.icon"
                  :rules="field.rules"
                  :type="field.type"
                  required
                  solo
                  autocomplete
                  color="#00bf9a"
                ></v-text-field>

                <div class="agree">
                  <v-checkbox
                    v-model="checkbox"
                    color="#e14eca"
                    class="custom-checkbox"
                    :rules="[v => !!v || '']"
                    required
                  ></v-checkbox>
                  <span>
                    I agree to the
                    <a class="link">terms & conditions</a>
                  </span>
                </div>
                <!-- Button -->
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
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      valid: true,
      name: "",
      email: "",
      password: "",
      checkbox: false,
      fields: [
        {
          label: "Name",
          name: this.name,
          icon: "person",
          type: "text",
          rules: [
            v => !!v || "Name is required",
            v => (v && v.length >= 6) || "Minimum length is 6 characters"
          ]
        },
        {
          label: "Email",
          name: this.email,
          icon: "email",
          type: "email",
          rules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
          ]
        },
        {
          label: "Password",
          name: this.password,
          icon: "vpn_key",
          type: "password",
          rules: [
            v => !!v || "Password is required",
            v => (v && v.length >= 6) || "Minimum length is 8 characters"
          ]
        }
      ],
      features: [
        {
          icon: "wifi",
          color: "#ff8d72",
          heading: "Marketing",
          text:
            "We've created the marketing campaign of the website. It was a very interesting collaboration."
        },
        {
          icon: "wifi_tethering",
          color: "#e14eca",
          heading: "Fully Coded in HTML5",
          text:
            "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
        },
        {
          icon: "emoji_events",
          color: "#1d8cf8",
          heading: "Built Audience",
          text:
            "There is also a Fully Customizable CMS Admin Dashboard for this product."
        }
      ]
    };
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
#register .icon {
  margin: -6px 1rem 3rem 0;
}

#register .description .title {
  margin-bottom: 20px;
}

#register img {
  position: absolute;
  left: 0;
  top: -85px;
  width: 70%;
}

#register h2 {
  font-size: 70px;
  position: relative;
}

#register .v-card__title,
#register .v-card__text {
  position: relative;
}

#register input {
  width: 100%;
  padding: 7px 12px;
  border: 1px solid rgba(29, 36, 58, 0.2);
  border-radius: 4px;
  color: #333;
  outline: none;
  font-weight: 400;
  margin-bottom: 10px;
}

.router-link-active {
  color: inherit;
}

#register .agree {
  display: inline-flex;
  align-items: center;
}

#register .agree .custom-checkbox {
  margin-top: 8px;
}
</style>
 