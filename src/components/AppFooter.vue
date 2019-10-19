<template>
  <div id="footer" :class="{ margin: margin }">
    <v-container grid-list-md fluid pt-1>
      <footer class="py-3 px-2 transparent">
        <div class="footer-content">
          <p class="ma-0 white--text text-uppercase font-weight-light body-2">
            Epicblack Dashboard
          </p>
          <div class="white--text caption">
            &copy; 2019, cloned with
            <v-icon small color="red" class="pr-1">favorite</v-icon>by
            <span>M96</span>
          </div>
        </div>
      </footer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      margin: true
    };
  },
  watch: {
    $route() {
      if (
        this.$route.path === "/register" ||
        this.$route.path === "/login" ||
        this.$route.path === "/logout"
      ) {
        this.margin = true;
      } else {
        this.margin = false;
      }
    }
  }
};
</script>

<style>
#footer .footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#footer span {
  color: #ba54f5;
  cursor: pointer;
  transition: 0.2s all;
}

#footer span:hover {
  color: #e14eca;
}

#footer .margin {
  margin-left: 0;
}
</style>
