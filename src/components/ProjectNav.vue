<template>
  <div id="project-nav">
    <v-container fluid grid-list-xl py-0>
      <v-layout row wrap>
        <v-flex xs12 md8 class="btn-content">
          <v-btn dark class="ma-0 purple-gradient">
            <v-icon small class="mr-1">add</v-icon>Create Project
          </v-btn>
        </v-flex>
        <v-flex xs4 md2 v-for="select in selects" :key="select.id">
          <v-select
            :menu-props="{ contentClass: 'shit' }"
            background-color="#27293d"
            item-color="#f3f3f3"
            :items="select.items"
            single-line
            hide-details
            solo
            :placeholder="select.placeholder"
            color="#e14eca"
            dark
            dense
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProjectNav",
  data() {
    return {
      selects: [
        {
          items: ["All Projects", "Completed", "On Going", "Not Completed"],
          placeholder: "Phase"
        },
        {
          items: ["Date", "Name", "End Date", "Start Date"],
          placeholder: "Sort"
        }
      ]
    };
  }
};
</script>

<style>
.shit div.v-list.v-list--dense.theme--light {
  background: #27293d !important;
  color: #bdbdbd;
}

.btn-content {
  display: flex;
  align-items: center;
}

#project-nav .v-input__icon .v-icon {
  color: #e14eca !important;
}

#project-nav .theme--dark.v-select .v-select__selections {
  color: #bdbdbd !important;
  font-size: 14px;
}

.shit a.v-list__tile.v-list__tile--link.theme--light {
  font-size: 14px !important;
}
</style>
