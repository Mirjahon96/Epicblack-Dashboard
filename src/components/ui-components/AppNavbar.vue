<template>
  <div id="navbar" class="hidden-sm-and-down">
    <v-toolbar class="toolbar" height="64px">
      <!-- Sidebar Toggler -->
      <v-tooltip right z-index="5" min-width="110px" content-class="tooltip-content">
        <template v-slot:activator="{ on }">
          <v-toolbar-side-icon
            v-on="on"
            class="white--text ml-2"
            v-on:click="navbarToggle()"
            @click="snackbarToggle()"
          ></v-toolbar-side-icon>
        </template>
        <span>Sidebar</span>
      </v-tooltip>
      <v-toolbar-title class="white--text heading font-weight-light">{{ this.$route.name }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Snackbar -->
      <AppSnackbar v-model="snackbar">Sidebar mini activated..</AppSnackbar>
      <!-- Search Dropdown -->
      <SearchModal />
      <!-- Notification Dropdown -->
      <NotificationDropdown />
      <!-- Avatar Dropdown -->
      <AvatarDropdown />
    </v-toolbar>
  </div>
</template>

<script>
import SearchModal from "@/components/ui-components/SearchModal";
import NotificationDropdown from "@/components/ui-components/NotificationDropdown";
import AvatarDropdown from "@/components/ui-components/AvatarDropdown";
import AppSnackbar from "@/components/ui-components/AppSnackbar";
export default {
  components: {
    SearchModal,
    NotificationDropdown,
    AvatarDropdown,
    AppSnackbar
  },
  computed: {
    navbar() {
      return this.$store.getters.navbar;
    },
    snackbar() {
      return this.$store.getters.snackbar;
    }
  },
  methods: {
    navbarToggle() {
      this.$store.commit("navbarToggle");
    },
    snackbarToggle() {
      this.$store.commit("snackbarToggle");
    }
  }
};
</script>

<style scoped>
#navbar {
  padding-top: 5px;
  margin-bottom: 10px;
}

.toolbar {
  background: #1b1b26;
  color: #fff;
}

.heading {
  font-size: 16px;
  text-transform: uppercase;
}

.tooltip-content {
  color: #333;
  background: #fff;
  text-align: center;
  opacity: 1 !important;
  font-size: 1rem;
}

.tooltip-content::before {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: 0px;
  left: -34px;
  color: #fff;
  border-top: 5px solid transparent;
  border-right: 5px solid;
  border-bottom: 5px solid transparent;
}
</style>
