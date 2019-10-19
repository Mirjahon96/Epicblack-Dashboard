<template>
  <div>
    <v-flex>
      <v-menu offset-y v-model="dropdown" transition="slide-x-transition">
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            dark
            v-on="on"
            :class="{
              'white--text': white,
              'black--text': black
            }"
          >
            <v-icon>notification_important</v-icon>
          </v-btn>
        </template>
        <v-list class="list">
          <v-list-tile
            class="list-item"
            v-for="item in notificationItems"
            :key="item.id"
          >
            <v-list-tile-title class="font">{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "NotificationDropdown",
  props: {
    white: {
      required: false,
      type: Boolean
    },
    black: {
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      dropdown: false,
      notificationItems: [
        { text: "Chel responded to your email" },
        { text: "You have 7 more tasks" },
        { text: "Your friend M96 is in town" },
        { text: "Tomorrow will important day" },
        { text: "Epicweb: New Customer" }
      ]
    };
  }
};
</script>

<style scoped>
.v-menu__content {
  /* margin-top: 5px; */
  margin-left: -5rem;
}

.v-menu__content::before {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: 7px;
  left: 238px;
  color: #fff;
  border-bottom: 0.4rem solid;
  border-right: 0.4rem solid transparent;
  border-left: 0.4rem solid transparent;
}

.list {
  width: 270px;
}

.font {
  font-size: 14px !important;
  color: #757575;
  padding-left: 1rem;
}

.list-item {
  cursor: pointer;
}

.list-item:hover {
  background: #f0eeee;
}

.click {
  margin: 0 10px;
}
</style>
