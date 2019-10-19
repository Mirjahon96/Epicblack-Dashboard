<template>
  <v-card class="card-content">
    <v-card-text class="pb-0">
      <p class="white-color font-weight-light mb-1">
        <slot name="title">Management Table</slot>
      </p>
    </v-card-text>
    <!-- Table -->
    <v-card-text>
      <div class="table-manage">
        <table>
          <thead>
            <tr>
              <th>
                <slot name="th1">#</slot>
              </th>
              <th>
                <slot name="th2">Name</slot>
              </th>
              <th>
                <slot name="th3">Job position</slot>
              </th>
              <th>
                <slot name="th4">Salary</slot>
              </th>
              <!-- Default slot -->
              <slot name="default-th"></slot>

              <th class="text-right">
                <slot name="th5">Milestone</slot>
              </th>
              <th class="text-right">
                <slot name="th6">Actions</slot>
              </th>
              <slot name="default-th2"></slot>
            </tr>
          </thead>
          <tbody>
            <slot name="tr">
              <tr v-for="team in teamMembers" :key="team.id">
                <td class="pl-3">
                  <slot name="td1">
                    <v-avatar :size="avatarSize">
                      <img :src="team.img" />
                    </v-avatar>
                  </slot>
                </td>
                <td>
                  <slot name="td2">
                    <p class="ma-0 font-weight-light">{{ team.name }}</p>
                  </slot>
                </td>
                <td>
                  <slot name="td3">
                    <p class="d-inline ma-0">{{ team.job }}</p>
                  </slot>
                </td>
                <td>
                  <slot name="td4">
                    <div class="outer-prog">
                      <span class="prog-text">{{ team.percent }}</span>
                      <div
                        class="inner-prog"
                        :style="{ width: team.percent }"
                      ></div>
                    </div>
                  </slot>
                </td>
                <!-- Default slot -->
                <slot name="default-td"></slot>

                <td class="text-right">
                  <slot name="td5">
                    <span>{{ team.cost }}</span>
                  </slot>
                </td>

                <td class="text-right">
                  <slot name="td6">
                    <v-tooltip top content-class="tooltip-content">
                      <template v-slot:activator="{ on }">
                        <v-btn small icon v-on="on" class="ma-0">
                          <v-icon
                            size="22px"
                            class="hover green--text text--accent-3"
                            >refresh</v-icon
                          >
                        </v-btn>
                      </template>
                      <span class="grey--text text--darken-3 caption"
                        >Refresh</span
                      >
                    </v-tooltip>
                    <v-tooltip top content-class="tooltip-content">
                      <template v-slot:activator="{ on }">
                        <v-btn small icon v-on="on" class="ma-0">
                          <v-icon
                            size="22px"
                            class="hover pink--text text--accent-2"
                            >clear</v-icon
                          >
                        </v-btn>
                      </template>
                      <span class="grey--text text--darken-2 caption"
                        >Remove</span
                      >
                    </v-tooltip>
                  </slot>
                </td>
              </tr>
            </slot>
          </tbody>
        </table>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ManagementTable",
  data() {
    return {
      avatarSize: "35px",
      teamMembers: [
        {
          img: require("../assets/tania.jpg"),
          name: "Tania Mike",
          job: "Fullstack Developer",
          percent: "60%",
          cost: "€ 99,225"
        },
        {
          img: require("../assets/person3.jpg"),
          name: "Joan Doe",
          job: "Designer",
          percent: "35%",
          cost: "€ 99,225"
        },
        {
          img: require("../assets/robi.jpg"),
          name: "John Foe",
          job: "Frontend Developer",
          percent: "82%",
          cost: "€ 99,225"
        },
        {
          img: require("../assets/emilyz.jpg"),
          name: "Milky Wild",
          job: "SEO",
          percent: "50%",
          cost: "€ 99,225"
        },
        {
          img: require("../assets/garry.jpg"),
          name: "Ozi",
          job: "Manager",
          percent: "15%",
          cost: "€ 99,225"
        },
        {
          img: require("../assets/lora.jpg"),
          name: "Lora Jansen",
          job: "Marketing",
          percent: "100%",
          cost: "€ 99,225"
        }
      ]
    };
  }
};
</script>

<style scoped>
.table-manage {
  overflow-x: auto;
}

table {
  width: 100%;
  text-align: left;
}

td {
  border-top: 1px solid #2b3553;
  padding: 12px 7px;
}

th,
span,
p {
  color: rgba(255, 255, 255, 0.7);
}

th {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 7px;
}

.outer-prog {
  background: rgba(0, 0, 0, 0.3);
  height: 16px;
  border-radius: 20px;
  padding: 3px;
  position: relative;
}

.prog-text {
  position: absolute;
  top: 1px;
  left: -25px;
  font-size: 10px;
}

.inner-prog {
  background: #344675;
  height: 9px;
  border-radius: 20px;
}

/* Tooltip */
.tooltip-content {
  color: #333;
  background: #fff;
  text-align: center;
  opacity: 1 !important;
  font-size: 1rem;
}

.tooltip-content::before {
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: 30px;
  left: 26px;
  color: #fff;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
}
</style>
