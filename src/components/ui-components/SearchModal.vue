<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
      class="dialog"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          :class="{
            'white--text': white,
            'grey--text text--darken-1': grey
          }"
          icon
          @click="dialogToggle()"
        >
          <v-icon>search</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <v-text-field
            color="#ff817a"
            prepend-icon="search"
            placeholder="SEARCH"
          ></v-text-field>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "SearchModal",
  props: {
    white: {
      required: false,
      type: Boolean
    },
    grey: {
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      dialog: false
    };
  },

  methods: {
    dialogToggle() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style scoped>
div.v-dialog__content {
  align-items: flex-start !important;
}
</style>
