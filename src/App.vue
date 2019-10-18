<template>
  <v-app id="app">
    <TopLine />
    <AppNavbar v-if="showMenu" />
    <MobileNavbar />
    <RegisterNavbar v-if="!showMenu" />
    <v-content>
      <AppSidebar v-if="showMenu" />
      <transition name="fade" mode="out-in">
      <router-view />
      </transition>
    </v-content>
    <!-- Footer -->
    <AppFooter />
  </v-app>
</template>

<script>
import AppNavbar from "./components/ui-components/AppNavbar";
import MobileNavbar from "./components/ui-components/MobileNavbar";
import AppSidebar from "./components/ui-components/AppSidebar";
import TopLine from "./components/ui-components/TopLine";
import RegisterNavbar from "./components/RegisterNavbar";
import AppFooter from "./components/AppFooter";
export default {
  name: "App",
  components: {
    AppNavbar,
    MobileNavbar,
    AppSidebar,
    TopLine,
    RegisterNavbar,
    AppFooter
  },
  computed: {
    showMenu() {
      return (
        this.$route.name !== "login" &&
        this.$route.name !== "register" &&
        this.$route.name !== "logout"
      );
    }
  }
};
</script>

<style src="@/global-styles/main.css">
</style>
