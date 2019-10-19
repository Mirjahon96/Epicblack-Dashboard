<template>
  <div id="reg-navbar" class="hidden-sm-and-down">
    <v-toolbar class="toolbar">
      <v-toolbar-title class="white--text heading font-weight-light">{{
        this.$route.name
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="link in links" :key="link.id">
          <router-link :to="link.route" class="link font-weight-light">
            <v-icon class="mr-1">{{ link.icon }}</v-icon>
            {{ link.text }}
          </router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "RegisterNavbar",
  data() {
    return {
      links: [
        { icon: "arrow_back_ios", text: "Back to Dashboard", route: "/" },
        { icon: "computer", text: "Register", route: "/register" },
        { icon: "person", text: "Login", route: "/login" },
        { icon: "lock", text: "Lock", route: "/logout" }
      ]
    };
  }
};
</script>

<style scoped>
#reg-navbar .toolbar {
  background: #1b1b26;
  color: #fff;
  margin-bottom: 5rem;
}

#reg-navbar .link {
  text-transform: none !important;
  color: #fff;
  display: flex;
  align-items: center;
}

#reg-navbar .router-link-exact-active {
  color: #e14eca;
}

#reg-navbar .heading {
  font-size: 16px;
  text-transform: uppercase;
}
</style>
