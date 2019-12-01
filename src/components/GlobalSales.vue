<template>
  <div id="global-sales">
    <v-container fluid grid-list-xl pt-2>
      <v-card class="card-content">
        <v-layout row wrap>
          <v-flex xs12 sm12 lg6>
            <v-card-text class="pb-0">
              <p class="white-color font-weight-light mb-1">Global Sales by Top Locations</p>
              <p class="grey--text caption">All Products That Were Shipped</p>
            </v-card-text>
            <!-- Table -->
            <v-card-text>
              <div class="table-manage">
                <table>
                  <tbody>
                    <tr v-for="country in countries" :key="country.id">
                      <td>
                        <v-img width="23px" height="17px">
                          <img style="width: 100%" v-lazy="country.img" alt="countries" />
                        </v-img>
                      </td>
                      <td>
                        <p class="ma-0 font-weight-light">{{ country.name }}</p>
                      </td>
                      <td class="text-right">
                        <p>{{ country.sales }}</p>
                      </td>
                      <td class="text-right">
                        <p>{{ country.percent }}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </v-card-text>
          </v-flex>
          <!-- World Map -->
          <v-flex xs12 sm12 lg6>
            <v-card-text class="pb-0">
              <WorldMap />
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import WorldMap from "@/components/maps/WorldMap";

export default {
  name: "GlobalSales",
  components: {
    WorldMap
  },
  data() {
    return {
      countries: [
        {
          img: require("../assets/flags/UZB.jpg"),
          name: "Uzbekistan",
          sales: "2.920",
          percent: "51.14%"
        },
        {
          img: require("../assets/flags/US.png"),
          name: "USA",
          sales: "1.700",
          percent: "30.28%"
        },
        {
          img: require("../assets/flags/AU.png"),
          name: "Australia",
          sales: "780",
          percent: "10.25%"
        },
        {
          img: require("../assets/flags/FR.jpg"),
          name: "France",
          sales: "676",
          percent: "7.44%"
        },
        {
          img: require("../assets/flags/GB.png"),
          name: "United Kingdom",
          sales: "571",
          percent: "2,28%"
        },
        {
          img: require("../assets/flags/BR.png"),
          name: "Brazil",
          sales: "312",
          percent: "1.36%"
        }
      ]
    };
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

span,
p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

td {
  border-top: 1px solid #2b3553;
  padding: 12px 7px;
}
</style>
