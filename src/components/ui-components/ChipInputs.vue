<template>
  <div id="combobox">
    <v-combobox
      multiple
      v-model="select"
      append-icon
      chips
      label="add tag"
      small-chips
      deletable-chips
      solo
      hide-details
      flat
      class="tag-input"
      :search-input.sync="search"
      @keyup.tab="updateTags"
      @paste="updateTags"
      color="grey"
      dark
    ></v-combobox>
  </div>
</template>

<script>
export default {
  name: "ChipInput",
  data() {
    return {
      select: ["Frontend", "UI/UX", "Design"],
      items: [],
      search: "" //sync search,
    };
  },
  methods: {
    updateTags() {
      this.$nextTick(() => {
        this.select.push(...this.search.split(","));
        this.$nextTick(() => {
          this.search = "";
        });
      });
    }
  }
};
</script>

<style scoped>
#combobox .tag-input {
  border: none !important;
  padding: 0 !important;
}
</style>
