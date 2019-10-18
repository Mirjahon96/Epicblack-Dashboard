<template>
  <div id="dashboard">
    <MainChart />
    <Cards />
    <Charts />
    <Tasks />
    <GlobalSales />
  </div>
</template>

<script>
import MainChart from "@/components/chart-components/MainChart";
import Cards from "@/components/Cards";
import Charts from "@/components/chart-components/Charts";
import Tasks from "@/components/Tasks";
import GlobalSales from "@/components/GlobalSales";

export default {
  components: {
    MainChart,
    Cards,
    Charts,
    Tasks,
    GlobalSales
  }
};
</script>

<style scoped></style>
