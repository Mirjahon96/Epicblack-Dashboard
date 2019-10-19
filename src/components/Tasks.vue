<template>
  <div id="tasks">
    <v-container fluid grid-list-xl pt-2>
      <v-layout row wrap>
        <v-flex xs12 sm12 md5>
          <v-card class="card-content">
            <v-card-text class="pb-1">
              <p
                class="white-color d-inline font-weight-medium mr-3 text-uppercase"
              >
                Tasks(5)
              </p>
              <span class="grey--text caption">Today</span>

              <v-menu
                offset-y
                content-class="dropdown"
                transition="slide-x-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-icon size="20px" class="right hover grey--text" v-on="on"
                    >settings</v-icon
                  >
                </template>
                <v-list>
                  <v-list-tile
                    class="list-item"
                    v-for="item in todos"
                    :key="item.id"
                  >
                    <v-list-tile-title class="font">
                      {{ item.title }}
                    </v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-card-text>

            <!-- Tasks Table -->
            <v-card-text>
              <div class="table-overflow">
                <table class="px-1">
                  <tbody>
                    <tr v-for="item in tableItems" :key="item.name">
                      <td class="pl-2">
                        <v-checkbox color="#e14eca"></v-checkbox>
                      </td>
                      <td>
                        <p class="ma-0 white-color font-weight-medium">
                          {{ item.name }}
                        </p>
                        <p class="ma-0 grey--text">{{ item.text }}</p>
                      </td>

                      <td>
                        <v-tooltip top content-class="tooltip-content">
                          <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                              <v-icon class="hover grey--text">edit</v-icon>
                            </v-btn>
                          </template>
                          <span class="grey--text text--darken-2 caption"
                            >Edit task</span
                          >
                        </v-tooltip>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- Management Table -->
        <v-flex xs12 sm12 md7>
          <ManagementTable />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ManagementTable from "@/components/ManagementTable";

export default {
  name: "Tasks",
  components: {
    ManagementTable
  },
  data() {
    return {
      offsetY: true,
      tableItems: [
        {
          name: "Update the Documentation",
          text: "Dwuamish Head, Seattle, WA 8:47 AM"
        },
        {
          name: "GDPR Compliance",
          text:
            "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states."
        },
        {
          name: "Solve the issues",
          text:
            "Fifty percent of all respondents said they would be more likely to shop at a company"
        },
        {
          name: "Release v2.0.0",
          text: "Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM"
        },
        {
          name: "Export the processed files",
          text:
            "The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs."
        },
        {
          name: "Arival at export process",
          text: "Capitol Hill, Seattle, WA 12:34 AM"
        }
      ],
      todos: [
        { title: "Finish Black Dashboard" },
        { title: "Learn Deep Javascript" },
        { title: "Practice" }
      ]
    };
  }
};
</script>

<style scoped>
.card-content {
  background: #27293d;
}

.dropdown {
  /* margin-top: 35px; */
  margin-left: -143px;
}

.dropdown::before {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  top: 7px;
  left: 148px;
  color: #fff;
  border-bottom: 0.4rem solid;
  border-right: 0.4rem solid transparent;
  border-left: 0.4rem solid transparent;
}

.list-item {
  cursor: pointer;
}

.list-item:hover {
  background: #f6f6f6;
}

.font {
  font-size: 14px !important;
  color: #757575;
}

/* Table */
.table-overflow {
  width: 100%;
  overflow-x: auto;
  max-height: 400px;
}

td {
  border-top: 1px solid #2b3553;
  padding: 10px 10px 10px 0;
}
.v-input--selection-controls__input {
  margin: 0;
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
  left: 27px;
  color: #fff;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
}
</style>
