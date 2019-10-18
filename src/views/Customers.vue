<template>
  <div id="customers">
    <OrderTable />
  </div>
</template>

<script>
import OrderTable from "@/components/OrderTable";

export default {
  name: "Customer",
  components: {
    OrderTable
  }
};
</script>

<style scoped></style>
