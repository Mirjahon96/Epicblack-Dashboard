<template>
  <div class="wrapper">
    <v-menu offset-y v-model="dropdown" transition="slide-x-transition">
      <template v-slot:activator="{ on }">
        <v-avatar class="click" :size="avatarSize" v-on="on">
          <img src="../../assets/me.jpg" alt="avatar" />
        </v-avatar>
      </template>
      <v-list class="list">
        <v-list-tile
          class="list-item"
          v-for="link in avatarItems"
          :key="link.id"
        >
          <v-list-tile-title class="font">
            <router-link :to="link.route">{{ link.text }}</router-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "AvatarDropdown",
  data() {
    return {
      avatarSize: "40px",
      dropdown: false,
      avatarItems: [
        { text: "Profile", route: "/userprofile" },
        { text: "Settings", route: "/userprofile" },
        { text: "Logout", route: "/register" }
      ]
    };
  }
};
</script>

<style scoped>
.list {
  width: 170px;
}

.v-menu__content {
  /* margin-top: 5px; */
  margin-left: -2rem;
  z-index: 12 !important;
}

.v-menu__content::before {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: 7px;
  left: 148px;
  color: #fff;
  border-bottom: 0.4rem solid;
  border-right: 0.4rem solid transparent;
  border-left: 0.4rem solid transparent;
}

.list-item {
  cursor: pointer;
}

.list-item:hover {
  background: #f0eeee;
}

.font {
  font-size: 14px !important;
  color: #757575;
  padding-left: 1rem;
}

.click {
  margin: 0 10px;
  cursor: pointer;
}

a {
  color: #757575;
}
</style>
