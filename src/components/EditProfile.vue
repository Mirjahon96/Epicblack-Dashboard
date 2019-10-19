<template>
  <div id="edit-profile">
    <v-container fluid grid-list-xl pt-2>
      <v-layout row wrap>
        <v-flex xs12 sm8 pt-0>
          <v-form>
            <v-card class="card-content">
              <v-card-text>
                <h5
                  class="title font-weight-light grey--text text--lighten-2 mb-2"
                >
                  Edit Profile
                </h5>
              </v-card-text>
              <div class="px-3">
                <!-- 1 -->
                <v-layout row wrap>
                  <v-flex xs12 md5>
                    <div>
                      <label for="company" class="d-block">Company</label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Epicweb .Inc"
                        class="disabled"
                        disabled
                        :class="[
                          text.length > 6 ? 'green-border' : 'purple-border'
                        ]"
                        v-model="text"
                      />
                    </div>
                  </v-flex>
                  <v-flex xs12 md3>
                    <div>
                      <label for="username" class="d-block">User Name</label>
                      <input
                        type="text"
                        id="username"
                        placeholder="M96"
                        required
                      />
                    </div>
                  </v-flex>
                  <v-flex xs12 md4>
                    <div>
                      <label for="email" class="d-block">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="M96@gmail.com"
                        required
                      />
                    </div>
                  </v-flex>
                </v-layout>
                <!-- 2 -->
                <v-layout row wrap>
                  <v-flex xs12 md6 v-for="field in fields2" :key="field.id">
                    <div>
                      <label :for="field.id" class="d-block">{{
                        field.text
                      }}</label>
                      <input
                        type="text"
                        :id="field.id"
                        :placeholder="field.placeholder"
                        required
                      />
                    </div>
                  </v-flex>
                </v-layout>
                <!-- 3 -->
                <v-layout row wrap>
                  <v-flex xs12 md12>
                    <div>
                      <label for="address" class="d-block">Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Uzbekistan, Bekabad. Muqumiy st. 13."
                      />
                    </div>
                  </v-flex>
                </v-layout>
                <!-- 4 -->
                <v-layout row wrap>
                  <v-flex xs12 md4 v-for="field in fields4" :key="field.id">
                    <div>
                      <label :for="field.id" class="d-block">{{
                        field.text
                      }}</label>
                      <input
                        type="text"
                        :id="field.id"
                        :placeholder="field.placeholder"
                      />
                    </div>
                  </v-flex>
                </v-layout>
                <!-- 5 -->
                <v-layout row wrap>
                  <v-flex xs12 md12 pb-0>
                    <div>
                      <label for="message" class="d-block">About</label>
                      <textarea
                        rows="2"
                        id="message"
                        placeholder="Message"
                        value="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      ></textarea>
                    </div>
                  </v-flex>
                </v-layout>
                <!-- Button -->
                <div class="pb-2">
                  <v-btn
                    class="ma-2 text-capitalize button-translate"
                    :style="{ background: this.color }"
                    rounded
                    dark
                    large
                    :loading="loading"
                    :disabled="loading"
                    @click="loader = 'loading'"
                    >Submit</v-btn
                  >
                </div>
                <!-- Snackbar -->
                <v-snackbar v-model="snackbar2" :color="background">
                  <v-icon class="white--text mr-3"
                    >notification_important</v-icon
                  >Your profile is updated!
                  <v-btn icon @click="snackbar2 = false">
                    <v-icon class="white--text">close</v-icon>
                  </v-btn>
                </v-snackbar>
              </div>
            </v-card>
          </v-form>
        </v-flex>
        <!-- Profile -->
        <v-flex xs12 sm4 pt-0>
          <Profile />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Profile from "@/components/Profile";

import { setTimeout } from "timers";

export default {
  name: "EditProfile",
  components: {
    Profile
  },
  data() {
    return {
      loader: null,
      loading: false,
      color: "linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)",
      snackbar2: false,
      background: "#e66ad2",
      timeout: 3000,
      text: "",
      fields2: [
        { id: "firstname", text: "First Name", placeholder: "Mirjahon" },
        { id: "lastname", text: "Last Name", placeholder: "Jamoldinov" }
      ],
      fields4: [
        { id: "city", text: "City", placeholder: "Bekabad" },
        { id: "country", text: "Country", placeholder: "Uzbekistan" },
        { id: "postal", text: "Postal Code", placeholder: "Zip Code" }
      ]
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => ((this[l] = false), (this.snackbar2 = true)), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
#edit-profile label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
}

#edit-profile input {
  width: 100%;
  padding: 7px 12px;
  border: 1px solid #2b3553;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);
  outline: none;
  font-weight: 400;
  margin-bottom: 0;
}

#edit-profile input::placeholder,
#edit-profile textarea::placeholder {
  font-size: 13px;
}

/* #e14eca */
#edit-profile input:focus,
#edit-profile textarea:focus {
  border-color: #00bf9a;
  transition: all 0.4s;
}

.disabled {
  background: #1d253b;
}
.disabled::placeholder {
  color: #344675;
}

#edit-profile textarea {
  width: 100%;
  border-bottom: 1px solid #2b3553;
  outline: none;
  padding: 7px 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.v-btn__content {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
