<template>
  <div id="location">
    <v-container fluid grid-list-xl pt-0>
      <v-layout row wrap>
        <!-- ContactUs -->
        <v-flex xs12 md6 class="pt-2">
          <ContactUs />
        </v-flex>
        <!-- LocationMap -->
        <v-flex xs12 md6 class="pt-2">
          <LocationMap />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LocationMap from "@/components/maps/LocationMap.vue";
import ContactUs from "@/components/ContactUs";

export default {
  name: "Location",
  components: {
    LocationMap,
    ContactUs
  }
};
</script>

<style scoped>
</style>
