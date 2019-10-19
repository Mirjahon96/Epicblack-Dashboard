<template>
  <div id="location-map">
    <!-- Map -->
    <v-card class="card-content">
      <v-card-text>
        <div class="g-autocomplete">
          <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
          <v-btn dark class="blue-gradient button-translate" @click="addMarker"
            >Add</v-btn
          >
        </div>
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center = m.position"
          ></gmap-marker>
        </gmap-map>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LocationMap",
  data() {
    return {
      center: { lat: 40.2222286, lng: 69.270886 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style scoped>
.g-autocomplete input {
  width: 50%;
  padding: 7px 12px;
  margin-bottom: 16px;
  color: #bdbdbd;
  border: 1px solid #2b3553;
  border-radius: 4px;
  outline: none;
}

.g-autocomplete input:focus {
  border-color: #e14eca;
  transition: all 0.4s;
}
</style>
