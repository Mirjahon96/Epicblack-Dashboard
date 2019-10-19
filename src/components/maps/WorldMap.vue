<template>
  <div id="map">
    <div class="world-map"></div>
  </div>
</template>

<script>
window.jQuery = require("jquery");
var mapVue = window.jQuery;
require("jvectormap");

require("@/lib/jquery-jvectormap-world-mill.js");

export default {
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      mapVue(".world-map").vectorMap({
        map: "world_mill",
        zoomOnScroll: false,
        backgroundColor: "transparent",
        regionStyle: {
          initial: {
            fill: "rgb(228, 228, 228)",
            "fill-opacity": 1,
            stroke: "rgb(60, 60, 60)",
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "yellow"
          },
          selectedHover: {}
        },
        series: {
          regions: [
            {
              values: {
                RU: "rgb(166, 166, 166)",
                UZ: "rgb(110, 110, 110)",
                AU: "rgb(166, 166, 166)",
                FR: "rgb(166, 166, 166)",
                CA: "rgb(120, 120, 120)",
                US: "rgb(166, 166, 166)",
                BR: "rgb(166, 166, 166)",
                GB: "rgb(110, 110, 110)",
                IN: "rgb(110, 110, 110)"
              }
            }
          ]
        }
      });
    }
  }
};
</script>

<style>
@import "~jvectormap/jquery-jvectormap.css";

.jvectormap-container {
  height: 360px !important;
}

.jvectormap-zoomin,
.jvectormap-zoomout {
  display: none !important;
}
</style>
