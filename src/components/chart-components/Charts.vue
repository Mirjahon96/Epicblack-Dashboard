<template>
  <div id="charts">
    <v-container fluid grid-list-xl pt-2>
      <v-layout row wrap>
        <v-flex sm12 md4 v-for="allChart in charts" :key="allChart.id">
          <v-card class="card-content">
            <v-card-text>
              <p class="grey--text mb-1">{{ allChart.text }}</p>
              <v-icon
                class="mr-2 medium"
                :style="{ color: allChart.iconColor }"
                >{{ allChart.icon }}</v-icon
              >
              <h2 class="white--text d-inline font-weight-light">
                {{ allChart.number }}
              </h2>
            </v-card-text>
            <apexchart
              width="100%"
              height="250px"
              :type="allChart.type"
              :options="allChart.chartOptions"
              :series="allChart.series"
            ></apexchart>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Charts",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      charts: [
        // 1 - Chart
        {
          type: "line",
          text: "Total Shipments",
          number: "763,215",
          icon: "notifications",
          iconColor: "#e14eca",

          chartOptions: {
            colors: ["#389466"],

            grid: {
              xaxis: {
                lines: {
                  show: true
                }
              },
              yaxis: {
                lines: {
                  show: false
                }
              }
            },

            stroke: {
              width: "2",
              curve: "smooth"
            },

            markers: {
              size: "3",
              shape: "circle",
              radius: 2,
              strokeWidth: 1,
              strokeOpacity: 0.9,
              fillOpacity: 1,
              hover: {
                size: 5
              }
            },

            chart: {
              toolbar: {
                show: false
              },
              id: "chart-line",
              foreColor: "#b4b4b4",
              dropShadow: {
                enabled: true,
                top: 1,
                left: 0,
                blur: 3,
                color: "#389466",
                opacity: 0.5
              }
            },

            xaxis: {
              categories: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
            }
          },
          series: [
            {
              name: "Data",
              data: [100, 70, 120, 70, 95, 60]
            }
          ]
        },
        // 2 - Chart
        {
          type: "bar",
          text: "Daily Sales",
          number: " 2,500€",
          icon: "local_shipping",
          iconColor: "#1d8cf8",

          chartOptions: {
            fill: {
              colors: ["#1d8cf8"]
            },

            grid: {
              xaxis: {
                lines: {
                  show: true
                }
              },
              yaxis: {
                lines: {
                  show: true
                }
              }
            },

            chart: {
              toolbar: {
                show: false
              },
              id: "chart-line",
              foreColor: "#b4b4b4",
              dropShadow: {
                enabled: true,
                top: 1,
                left: 0,
                blur: 3,
                color: "#389466",
                opacity: 0.5
              }
            },

            xaxis: {
              categories: ["UZB", "USA", "FR", "UK", "AUST", "BR"]
            }
          },
          series: [
            {
              name: "Countries",
              data: [95, 70, 12, 25, 52, 60]
            }
          ]
        },
        // 3 - Chart
        {
          type: "line",
          text: "Completed Tasks",
          number: "12,100K",
          icon: "near_me",
          iconColor: "#00f2c3",

          chartOptions: {
            colors: ["#fd5d93"],

            grid: {
              xaxis: {
                lines: {
                  show: true
                }
              },
              yaxis: {
                lines: {
                  show: false
                }
              }
            },

            stroke: {
              width: "2",
              curve: "smooth"
            },

            markers: {
              size: "3",
              shape: "circle",
              radius: 2,
              strokeWidth: 1,
              strokeOpacity: 0.9,
              fillOpacity: 1,
              hover: {
                size: 5
              }
            },

            chart: {
              toolbar: {
                show: false
              },
              id: "chart-line",
              foreColor: "#b4b4b4",
              dropShadow: {
                enabled: true,
                top: 1,
                left: 0,
                blur: 3,
                color: "#fd5d93",
                opacity: 0.5
              }
            },

            xaxis: {
              categories: ["JUL", "AUG", "SEP", "OCT", "NOV"]
            }
          },
          series: [
            {
              name: "Completed Tasks",
              data: [20, 70, 40, 120, 90]
            }
          ]
        }
        // end
      ]
    };
  }
};
</script>

<style scoped></style>
