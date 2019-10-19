<template>
  <div id="task-dialog" class="text-center">
    <v-dialog v-model="dialog" dark persistent width="550">
      <template v-slot:activator="{ on }">
        <v-btn rounded dark v-on="on" class="purple-gradient">
          <v-icon small class="mr-2">add</v-icon>Add New
        </v-btn>
      </template>

      <v-card class="card-content">
        <v-card-title class="title font-weight-medium orange-gradient">
          <slot name="header-text">Add Task</slot>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon @click="dialog = false">close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pb-2">
          <v-layout row wrap>
            <v-flex xs12 pt-0>
              <v-form>
                <slot name="layout">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <div>
                        <label for="name">Add task</label>
                        <input type="text" id="name" />
                      </div>
                    </v-flex>
                  </v-layout>
                  <!-- Inputs -->
                  <v-container px-0 py-2>
                    <v-layout wrap>
                      <v-flex sm6 v-for="field in fields" :key="field.id">
                        <div>
                          <label :for="field.id">{{ field.text }}</label>
                          <input type="text" :id="field.id" />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </slot>
                <!-- Button -->
                <slot name="button">
                  <v-btn
                    dark
                    class="button-translate mt-3 mb-3 purple-gradient"
                    :loading="loading"
                    @click="loader = 'loading'"
                    >Save</v-btn
                  >
                  <v-btn
                    dark
                    @click="dialog = false"
                    class="button-translate mt-3 mb-3 orange-gradient"
                    >Cancel</v-btn
                  >
                </slot>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbar4"
      :color="background"
      :bottom="y === 'bottom'"
    >
      <v-icon class="white--text mr-3">notification_important</v-icon>
      <slot name="snackbar-message">Task will be added soon..)</slot>
      <v-btn icon light @click="snackbar4 = false">
        <v-icon class="white--text">close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "TaskDialog",
  data() {
    return {
      dialog: false,
      loader: null,
      loading: false,
      snackbar4: false,
      background: "#e66ad2",
      timeout: 3000,
      y: "bottom",
      fields: [
        { id: "assign", text: "Assign" },
        { id: "priority", text: "Priority" },
        { id: "start", text: "Start Date" },
        { id: "due", text: "Due Date" }
      ]
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(
        () => (
          (this[l] = false), (this.dialog = false), (this.snackbar4 = true)
        ),
        2500
      );
      this.loader = null;
    }
  }
};
</script>

<style scoped>
label {
  margin-bottom: 5px;
  display: block;
  color: rgba(255, 255, 255, 0.6);
}

input {
  width: 100%;
  padding: 7px 12px;
  border: 1px solid #2b3553;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);
  outline: none;
  font-weight: 400;
  margin-bottom: 5px;
}

input::placeholder {
  font-size: 13px;
}

input:focus,
textarea:focus {
  border-color: #e14eca;
  transition: all 0.4s;
}
</style>
