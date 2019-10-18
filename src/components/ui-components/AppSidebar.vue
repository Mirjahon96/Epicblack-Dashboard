<template>
  <div id="area" class="mb-3">
    <nav class="sidebar hidden-sm-and-down">
      <v-list class="ul">
        <!-- Logo area -->
        <v-list-tile class="li">
          <div class="logo">
            <a class="link">
              <img src="../../assets/Heart-uzb.png" alt="avatar" />
              <span class="nav-text heading">Epicweb</span>
            </a>
          </div>
        </v-list-tile>
        <v-divider class="white divider-1"></v-divider>

        <!-- Links -->
        <v-list-tile class="li" v-for="link in links" :key="link.id">
          <v-list-tile-title>
            <router-link :to="link.route" class="link">
              <v-icon class="white--text">{{ link.icon }}</v-icon>
              <span :class="{ 'nav-text': navbar, 'nav-text2': !navbar }">
                {{
                link.text
                }}
              </span>
            </router-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  data() {
    return {
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
      ]
    };
  },
  computed: {
    navbar() {
      return this.$store.getters.navbar;
    }
  }
};
</script>

<style scoped>
.sidebar {
  background: linear-gradient(0deg, #ff6491, #ff8d72);
  /* position: absolute; */
  position: fixed;
  top: 95px;
  left: 0;
  bottom: 0;
  /* height: 100%; */
  width: 80px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  transform: translateZ(0) scale(1, 1);
  margin-left: 1rem;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.2), 0 2px 30px 0 rgba(0, 0, 0, 0.35);
  border-radius: 4px;
}

.sidebar:hover {
  width: 250px !important;
  overflow: visible;
  transition: all 0.2.5s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
}

.nav-text {
  position: relative;
  transform: translate(-25px);
  transition: all 0.2s linear;
  opacity: 0;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
}

.sidebar:hover .nav-text {
  display: block;
  transform: translate(15px) !important;
  opacity: 1 !important;
  transition: all 0.3s linear !important;
}

.nav-text2 {
  display: block;
  transform: translate(15px) !important;
  opacity: 1 !important;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  transition: all 0.3s linear !important;
}

.divider-1 {
  width: 50px;
  margin: 10px 0 10px 3px;
  position: relative;
}

.sidebar:hover .divider-1 {
  width: 90% !important;
}

.sidebar .ul {
  padding: 10px;
  background: transparent;
}

.sidebar .ul .li {
  position: relative;
  display: block;
  width: 250px;
  padding: 4px 0;
}

.sidebar .ul .li .link {
  position: relative;
  display: flex;
  text-decoration: none;
  transform: translateZ(0) scale(1, 1);
  transition: all 0.3s ease-in-out;
}

.sidebar a.router-link-exact-active::before {
  content: "";
  position: absolute;
  height: 8px;
  width: 8px;
  top: 6px;
  left: 190px;
  background: hsla(0, 0%, 100%, 0.93);
  border-radius: 50%;
}

.sidebar .logo {
  height: 35px;
  width: 35px;
  background: #fff;
  border: 1px solid #f3f3f3;
  margin-left: -4px;
  border-radius: 50%;
  padding-left: 6.5px;
}

.sidebar .logo img {
  width: 20px;
  height: 20px;
  margin-top: 8px;
}

.heading {
  font-size: 1rem;
  color: #fff;
  padding-top: 8px;
  text-transform: uppercase;
  margin-left: 6px;
}
</style>
