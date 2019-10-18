<template>
  <div id="snackbar">
    <v-snackbar
      class="snackbar"
      v-model="snackbar"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      <v-icon class="white--text mr-3">notifications_active</v-icon>
      <slot></slot>
      <v-btn icon light>
        <v-icon class="white--text">close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "AppSnackbar",
  data() {
    return {
      color: "#e66ad2",
      mode: "",
      x: "right",
      y: "top"
    };
  },
  computed: {
    snackbar() {
      return this.$store.getters.snackbar;
    }
  }
};
</script>

<style scoped>
.snackbar {
  margin-top: -1rem;
}
</style>
