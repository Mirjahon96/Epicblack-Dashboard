<template>
  <div id="lock">
    <Login>
      <div slot="image" class="text-center">
        <img src="@/assets/sarah.jpg" />
      </div>
      <h2 slot="title" class="text-center font-weight-light heading-4 mt-1">
        Sarah Anderson
      </h2>
      <div slot="name-input">
        <v-text-field
          class="i"
          label="Password"
          v-model="password"
          prepend-inner-icon="vpn_key"
          :rules="passwordRules"
          type="password"
          required
          solo
          autocomplete
          color="#00bf9a"
        ></v-text-field>
      </div>

      <span slot="email-input"></span>
      <span slot="textarea"></span>

      <span slot="button-text">Unlock</span>
      <span slot="form-footer"></span>
    </Login>
  </div>
</template>

<script>
import Login from "@/views/Login";
export default {
  name: "Lock",
  components: {
    Login
  },
  data() {
    return {
      valid: true,
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Minimum length is 8 characters"
      ]
    };
  }
};
</script>

<style scoped>
#lock img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  margin-top: -60px;
  vertical-align: middle;
  border: none;
  margin-bottom: 4px;
}
</style>
