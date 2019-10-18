<template>
  <div id="main-chart">
    <v-container fluid grid-list-md pt-0>
      <v-layout row>
        <!-- main block -->
        <v-flex xs12 md12 class="pt-0">
          <v-card class="px-2 chart-card pt-3">
            <v-layout row wrap>
              <!-- 1 -->
              <v-flex xs12 md9>
                <p class="grey--text mb-1">Total Shipments</p>
                <h2 class="white--text headline font-weight-light mb-1">Performance</h2>
              </v-flex>
              <!-- 2 -->
              <v-flex xs5 sm5 md3>
                <div class="toggle d-flex">
                  <button ref="accounts" class="accounts active" @click.prevent="toggleAccount">
                    <v-icon size="18px" color="#e14eca" class="hidden-md-and-up icon">perm_identity</v-icon>
                    <span class="hidden-sm-and-down">Accounts</span>
                  </button>
                  <button ref="purchases" class="purchases" @click="togglePurchase">
                    <v-icon size="18px" color="#e14eca" class="hidden-md-and-up icon">card_giftcard</v-icon>
                    <span class="hidden-sm-and-down">Purchases</span>
                  </button>
                  <button ref="sessions" class="sessions" @click="toggleSession">
                    <v-icon size="18px" color="#e14eca" class="hidden-md-and-up icon">touch_app</v-icon>
                    <span class="hidden-sm-and-down">Sessions</span>
                  </button>
                </div>
              </v-flex>
            </v-layout>
            <!-- chart -->
            <apexchart
              transition="fade-transition"
              class="white--text"
              width="100%"
              height="250px"
              type="line"
              :options="chartOptions"
              :series="series"
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
  name: "MainChart",
  components: {
    apexchart: VueApexCharts
  },

  data() {
    return {
      color: "#389466",

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
          width: "3",
          curve: "smooth"
        },

        markers: {
          size: "4",
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
          id: "chart-line",
          foreColor: "#b4b4b4",
          dropShadow: {
            enabled: true,
            top: 1,
            left: 0,
            blur: 3,
            color: "#389466",
            opacity: 0.5
          },

          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          }
        },

        xaxis: {
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
          ]
        }
      },

      series: [
        {
          name: "Users",
          data: [100, 70, 120, 70, 95, 60, 90, 80, 110, 100, 120, 90]
        }
      ]
    };
  },
  methods: {
    toggleAccount() {
      this.$refs.accounts.style.color = "#fff";
      this.$refs.accounts.style.background =
        "linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca)";
      this.$refs.accounts.style.transition = "all .3s";

      this.$refs.purchases.style.color = "#e14eca";
      this.$refs.purchases.style.background = "none";

      this.$refs.sessions.style.color = "#e14eca";
      this.$refs.sessions.style.background = "none";

      this.series = [
        {
          name: "Users",
          data: [100, 70, 120, 70, 95, 60, 90, 80, 110, 100, 120, 90]
        }
      ];
    },
    togglePurchase() {
      this.$refs.purchases.style.color = "#fff";
      this.$refs.purchases.style.background =
        "linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca)";
      this.$refs.purchases.style.transition = "all .3s";

      this.$refs.accounts.style.color = "#e14eca";
      this.$refs.accounts.style.background = "none";

      this.$refs.sessions.style.color = "#e14eca";
      this.$refs.sessions.style.background = "none";

      this.series = [
        {
          name: "Purchases",
          data: [85, 130, 90, 110, 85, 95, 70, 99, 65, 110, 100, 135]
        }
      ];
    },
    toggleSession() {
      this.$refs.sessions.style.color = "#fff";
      this.$refs.sessions.style.background =
        "linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca)";
      this.$refs.sessions.style.transition = "all .3s";

      this.$refs.accounts.style.color = "#e14eca";
      this.$refs.accounts.style.background = "none";

      this.$refs.purchases.style.color = "#e14eca";
      this.$refs.purchases.style.background = "none";

      this.series = [
        {
          name: "Sessions",
          data: [105, 80, 130, 65, 110, 80, 130, 70, 115, 60, 140, 125]
        }
      ];
    }
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 7px !important;
  /* margin-top: -10px; */
}

.chart-card {
  background: #27293d;
  color: #9a9a9a;
}

.toggle {
  color: #e14eca;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #e14eca;
}

button {
  outline: none;
}
.accounts,
.purchases,
.sessions {
  padding: 2px 0;
  border-right: 1px solid #e14eca;
  font-weight: 600;
}

/* Main chart icons */
#main-chart .toggle button:hover .icon {
  color: #fff !important;
}
</style>
