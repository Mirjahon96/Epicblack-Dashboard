<template>
  <nav id="mobile-nav" class="hidden-md-and-up">
    <v-toolbar flat class="toolbar" height="64px" v-if="showRegisterNavbar">
      <!-- Sidebar Toggler -->
      <v-btn icon @click="drawer = !drawer" class="z-index ml-0">
        <v-icon :class="{'grey--text text--darken-1' : toolbar, 'white--text' : !toolbar}">menu</v-icon>
      </v-btn>

      <v-toolbar-title
        class="heading font-weight-light z-index ml-0"
        :class="{'grey--text text--darken-3' : toolbar, 'white--text' : !toolbar}"
      >{{ this.$route.name }}</v-toolbar-title>

      <v-slide-y-transition>
        <div class="list" v-if="toolbar">
          <v-list>
            <!-- Search Modal -->
            <div class="mt-5 ml-2">
              <SearchModal grey />
            </div>
            <!-- Expansion panel for notification-->
            <v-expansion-panel class="elevation-0">
              <v-expansion-panel-content lazy hide-actions>
                <template v-slot:header>
                  <div class="panel-content">
                    <v-icon light class="mr-2">notification_important</v-icon>
                    <span class="text-uppercase font-weight-light">New notifications</span>
                  </div>
                </template>
                <v-list>
                  <v-list-tile
                    class="list-item"
                    v-for="(notification, index) in notificationItems"
                    :key="index"
                  >
                    <v-list-tile-title class="font pl-4">{{notification.text }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Expansion panel for avatarDropdown -->
            <v-expansion-panel class="elevation-0">
              <v-expansion-panel-content lazy hide-actions>
                <template v-slot:header>
                  <div class="panel-content">
                    <v-icon light class="mr-2">exit_to_app</v-icon>
                    <span class="text-uppercase font-weight-light">Log Out</span>
                  </div>
                </template>
                <v-list>
                  <v-list-tile
                    class="list-item"
                    v-for="(avatar, index) in avatarItems"
                    :key="index"
                  >
                    <v-list-tile-title class="font pl-4">
                      <router-link :to="avatar.route">{{ avatar.text }}</router-link>
                    </v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-list>
        </div>
      </v-slide-y-transition>

      <v-spacer></v-spacer>

      <v-btn icon @click="openToolbar()" class="z-index">
        <v-icon :class="{'grey--text text--darken-2' : toolbar, 'white--text' : !toolbar}">more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer" class="orange-gradient">
      <v-list class="ul">
        <!-- Logo area -->
        <v-list-tile class="mb-3">
          <div class="mr-2 logo">
            <img src="@/assets/Heart-uzb.png" alt="logo" />
          </div>
          <span class="white--text heading">Epicweb</span>
        </v-list-tile>

        <v-divider class="mb-2 mx-auto white"></v-divider>

        <!-- Links -->
        <v-list-tile v-for="link in links" :key="link.id" class="py-1">
          <v-list-tile-title>
            <router-link :to="link.route" class="grey--text link">
              <v-icon class="white--text pr-2 pb-1">{{ link.icon }}</v-icon>
              <span class="white--text text-uppercase caption">
                {{
                link.text
                }}
              </span>
            </router-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Mobile Menu for Register, Login, Logout -->
    <div v-if="!showRegisterNavbar">
      <v-toolbar flat class="toolbar" height="64px">
        <v-toolbar-title
          class="heading font-weight-light z-index ml-0"
          :class="{'grey--text text--darken-3' : toolbar, 'white--text' : !toolbar}"
        >{{ this.$route.name }}</v-toolbar-title>

        <v-slide-y-transition>
          <div class="list" v-if="toolbar">
            <v-list class="pt-5">
              <v-list-tile-title class="px-3 mb-3 mt-1" v-for="link in links2" :key="link.id">
                <router-link :to="link.route" class="link font-weight-light">
                  <v-icon class="mr-1">{{ link.icon }}</v-icon>
                  {{ link.text }}
                </router-link>
              </v-list-tile-title>
            </v-list>
          </div>
        </v-slide-y-transition>

        <v-spacer></v-spacer>

        <v-btn icon @click="openToolbar()" class="z-index">
          <v-icon
            :class="{'grey--text text--darken-2' : toolbar, 'white--text' : !toolbar}"
          >more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <!-- end -->
  </nav>
</template>

<script>
import SearchModal from "@/components/ui-components/SearchModal";

export default {
  components: {
    SearchModal
  },
  data() {
    return {
      toolbar: false,
      drawer: false,
      links: [
        { icon: "pie_chart", text: "Dashboard", route: "/" },
        { icon: "account_circle", text: "User Profile", route: "/userprofile" },
        { icon: "folder_special", text: "Projects", route: "/projects" },
        { icon: "code", text: "Taskboard", route: "/taskboard" },
        { icon: "settings", text: "Task Detail", route: "/taskdetail" },
        { icon: "person", text: "Team", route: "/team" },
        { icon: "supervisor_account", text: "Customers", route: "/customers" },
        { icon: "home", text: "Location", route: "/location" },
        { icon: "timelapse", text: "Timeline", route: "/timeline" },
        { icon: "contact_support", text: "FAQs", route: "/faqs" }
      ],
      notificationItems: [
        { text: "Chel responded to your email" },
        { text: "You have 7 more tasks" },
        { text: "Your friend M96 is in town" },
        { text: "Tomorrow will important day" },
        { text: "Epicweb: New Customer" }
      ],
      avatarItems: [
        { text: "Profile", route: "/userprofile" },
        { text: "Settings", route: "/userprofile" },
        { text: "Logout", route: "/register" }
      ],
      links2: [
        { icon: "arrow_back_ios", text: "Back to Dashboard", route: "/" },
        { icon: "computer", text: "Register", route: "/register" },
        { icon: "person", text: "Login", route: "/login" },
        { icon: "lock", text: "Lock", route: "/logout" }
      ]
    };
  },
  methods: {
    openToolbar() {
      this.toolbar = !this.toolbar;
    }
  },
  computed: {
    showRegisterNavbar() {
      return (
        this.$route.name !== "login" &&
        this.$route.name !== "register" &&
        this.$route.name !== "logout"
      );
    }
  }
};
</script>

<style scoped>
#mobile-nav {
  margin-bottom: 10px;
  position: relative;
  z-index: 10;
}

#mobile-nav .list {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.z-index {
  position: relative;
  z-index: 100;
}

#mobile-nav .toolbar {
  background: #1b1b26;
  color: #fff;
}

#mobile-nav .heading {
  font-size: 16px;
  text-transform: uppercase;
}

#mobile-nav .logo {
  height: 35px;
  width: 35px;
  background: #fff;
  border: 1px solid #f3f3f3;
  margin-left: -4px;
  border-radius: 50%;
  text-align: center;
}

#mobile-nav .logo img {
  width: 20px;
  height: 20px;
  margin-top: 8px;
}

.v-divider {
  width: 90%;
}

#mobile-nav .link {
  display: flex;
  align-items: center;
}

#mobile-nav a.router-link-exact-active::before {
  content: "";
  position: absolute;
  height: 8px;
  width: 8px;
  top: 8px;
  left: 235px;
  background: hsla(0, 0%, 100%, 0.93);
  border-radius: 50%;
}

.ml-2 {
  margin-left: 12px !important;
}

#mobile-nav .font,
#mobile-nav a {
  font-size: 13px !important;
  color: #757575;
}

#mobile-nav .list-item {
  cursor: pointer;
}

#mobile-nav .list-item:hover {
  background: #f0eeee;
}

#mobile-nav .panel-content {
  display: flex !important;
  align-items: center !important;
}
</style>

