<template>
  <div id="order-table">
    <v-container fluid grid-list-xl pt-0>
      <!-- ManagementTable for Teams -->
      <v-layout row>
        <v-flex xs12 md12 class="pt-0 mb-2">
          <ManagementTable>
            <span slot="th1" class="pl-4">#</span>
            <h3 slot="title" class="title white--text font-weight-light mb-1">Team</h3>
            <span slot="th4">Since</span>
            <span slot="td4" class="grey--text text--lighten-1">2019</span>
          </ManagementTable>
        </v-flex>
      </v-layout>

      <!-- ManagementTable for Products -->
      <v-layout row>
        <v-flex xs12 md12 class="pt-2 mb-2">
          <ManagementTable class="p-0 product-table">
            <h3 slot="title" class="title white--text font-weight-light mb-1">Products</h3>
            <span slot="th1" class="pl-3">#</span>
            <span slot="th2">Product Name</span>
            <span slot="th3">Type</span>
            <span slot="th4">Milestone</span>
            <th slot="default-th" class="text-center">
              <span>Quantity</span>
            </th>
            <span slot="th5">Price</span>
            <span slot="th6">Amount</span>
            <!-- td -->
            <tr slot="tr" v-for="i in items" :key="i.id">
              <td class="pl-3">
                <span slot="td1">
                  <v-checkbox class="custom-checkbox" color="#e14eca" v-model="i.checked"></v-checkbox>
                </span>
              </td>
              <td>
                <span slot="td2">{{ i.name }}</span>
              </td>
              <td>
                <span slot="td3">{{ i.type }}</span>
              </td>
              <td>
                <span slot="td4">
                  <div class="outer-prog">
                    <span class="prog-text">{{ i.percent }}</span>
                    <div class="inner-prog" :style="{ width: i.percent }"></div>
                  </div>
                </span>
              </td>
              <td name="default-td" class="text-center">
                <span>{{ i.quantity }}</span>
              </td>
              <td class="text-right">
                <span slot="td5">
                  <span>{{ i.price }}</span>
                </span>
              </td>
              <td class="text-right">
                <span slot="td6">{{ i.amount }}</span>
              </td>
            </tr>
          </ManagementTable>
        </v-flex>
      </v-layout>

      <!-- ShoppingTable -->
      <v-layout row>
        <v-flex xs12 md12 class="pt-2 mb-2">
          <ShoppingTable />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ManagementTable from "@/components/ManagementTable";
import ShoppingTable from "@/components/ShoppingTable";

export default {
  name: "OrderTable",
  components: {
    ManagementTable,
    ShoppingTable
  },
  data() {
    return {
      // Products
      items: [
        {
          checked: true,
          name: "App Design",
          type: "Web Design",
          percent: "57%",
          quantity: "7",
          price: "€ 49",
          amount: "€ 1,225"
        },
        {
          checked: false,
          name: "Admin Panel",
          type: "SPA",
          percent: "60%",
          quantity: "20",
          price: "€ 14",
          amount: "€ 300"
        },
        {
          checked: true,
          name: "PWA for Cryptocurrency",
          type: "Mobile App",
          percent: "77%",
          quantity: "10",
          price: "€ 499.00",
          amount: "€ 4,990"
        },
        {
          checked: false,
          name: "Landing Page Design",
          type: "UI/UX Design",
          percent: "89%",
          quantity: "10",
          price: "€ 50",
          amount: "€ 500"
        },
        {
          checked: true,
          name: "Restoraunt App",
          type: "Business Apps",
          percent: "96%",
          quantity: "5",
          price: "€ 990",
          amount: "€ 5,990"
        }
      ]
    };
  }
};
</script>

<style scoped>
.product-table .v-btn {
  margin: 0 !important;
}

.v-input--selection-controls {
  margin-top: 12px !important;
  padding-top: 0 !important;
}

.product-table .outer-prog {
  background: rgba(0, 0, 0, 0.3);
  height: 16px;
  border-radius: 20px;
  padding: 3px;
  position: relative;
}

.product-table .prog-text {
  position: absolute;
  top: 1px;
  left: -25px;
  font-size: 10px;
}

.product-table .inner-prog {
  background: #344675;
  height: 9px;
  border-radius: 20px;
}

.product-table td {
  border-top: 1px solid #2b3553;
  padding: 12px 7px;
}

.product-table th,
.product-table span,
.product-table p {
  color: rgba(255, 255, 255, 0.7);
}

.product-table th {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 7px;
}
</style>
