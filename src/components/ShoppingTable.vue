<template>
  <div id="shopping-table">
    <v-card class="card-content">
      <v-card-title>
        <h3 class="title white--text font-weight-light mb-1">Shopping Product</h3>
      </v-card-title>
      <v-card-text>
        <div class="table-manage">
          <table>
            <thead>
              <tr>
                <th class="text-left">
                  <slot name="th1"></slot>
                </th>
                <th class="text-left">
                  <slot name="th2" class="text-center">Product</slot>
                </th>
                <th class="text-left">
                  <slot name="th3">Color</slot>
                </th>
                <th class="text-left">
                  <slot name="th4">Size</slot>
                </th>
                <th class="text-center">
                  <slot name="th5">Price</slot>
                </th>
                <th class="text-center">
                  <slot name="th6">Quantity</slot>
                </th>
                <th class="text-right">
                  <slot name="th7">Amount</slot>
                </th>
                <th class="text-right">
                  <slot name="th8">Actions</slot>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in shoppingProducts" :key="product.id">
                <td class="text-left pl-3 pr-5">
                  <slot name="td1">
                    <div class="d-flex">
                      <img :src="product.img" />
                    </div>
                  </slot>
                </td>
                <td class="text-left">
                  <slot name="td2">
                    <h4>{{ product.name }}</h4>
                    <p class="title grey--text">{{ product.description }}</p>
                  </slot>
                </td>
                <td class="text-left">
                  <slot name="td3">
                    <p>{{ product.color }}</p>
                  </slot>
                </td>
                <td class="text-left">
                  <slot name="td4">
                    <p>{{ product.size }}</p>
                  </slot>
                </td>
                <td class="text-center">
                  <slot name="td5">
                    <p>{{ "€ " + product.price }}</p>
                  </slot>
                </td>
                <td class="text-center">
                  <slot name="td6">
                    <div class="d-inline text-center">
                      <v-btn
                        color="#1976d2"
                        class="button-translate btn"
                        outline
                        small
                        @click="product.subtract(1)"
                      >
                        <span class="title white--text">-</span>
                      </v-btn>
                      <v-btn
                        dark
                        color="primary"
                        class="button-translate btn"
                        small
                        @click="product.add(1)"
                      >
                        <span class="title white--text">+</span>
                      </v-btn>
                      <span class="pl-1">{{ product.quantity }}</span>
                    </div>
                  </slot>
                </td>
                <td class="text-right">
                  <slot name="td7">
                    <p>{{ "€ " + product.amount }}</p>
                  </slot>
                </td>
                <td class="text-right">
                  <slot name="td8">
                    <v-tooltip top content-class="tooltip-content">
                      <template v-slot:activator="{ on }">
                        <v-btn small icon v-on="on" class="ma-0">
                          <v-icon size="22px" class="hover pink--text text--accent-2">clear</v-icon>
                        </v-btn>
                      </template>
                      <span class="grey--text text--darken-2 caption">Remove</span>
                    </v-tooltip>
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Complete Purchase -->
        <div class="table-footer">
          <div class="total-amount mb-4">
            <div style="min-width: 150px">
              <p class="subtitle-1 font-weight-bold">Total:</p>
            </div>
            <div class="pr-4">
              <p class="headline" v-bind="total">{{ totalAmount }}</p>
            </div>
          </div>
          <div class="text-right">
            <v-btn large color="primary" class="button-rounded button-translate px-5">
              Complete Purchase
              <v-icon small class="ml-2">arrow_forward_ios</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      shoppingProducts: [
        {
          img: require("../assets/jacket.png"),
          name: "Suede Biker Jacket",
          description: "by Versaci",
          color: "black",
          size: "M",
          price: 3390,
          quantity: 1,
          amount: 3390,
          add(inc) {
            this.quantity += inc;
            this.amount += this.price;
          },
          subtract(dec) {
            this.quantity -= dec;
            this.amount -= this.price;
          }
        },
        {
          img: require("../assets/pant.png"),
          name: "T-shirt",
          description: "by Armani",
          color: "pink",
          size: "M",
          price: 499,
          quantity: 1,
          amount: 499,
          add(inc) {
            this.quantity += inc;
            this.amount += this.price;
          },
          subtract(dec) {
            this.quantity -= dec;
            this.amount -= this.price;
          }
        },
        {
          img: require("../assets/nike.png"),
          name: "Pants",
          description: "by Harmani",
          color: "blue",
          size: "M",
          price: 200,
          quantity: 1,
          amount: 200,
          add(inc) {
            this.quantity += inc;
            this.amount += this.price;
          },
          subtract(dec) {
            this.quantity -= dec;
            this.amount -= this.price;
          }
        }
      ]
    };
  },
  computed: {
    totalAmount() {
      let sum = this.shoppingProducts.reduce(
        (acc, item) => acc + item.amount,
        0
      );
      return sum;
    }
  }
};
</script>

<style scoped>
#shopping-table .table-manage {
  overflow-x: auto;
}

#shopping-table .table-manage table {
  width: 100%;
}

.title {
  font-size: 18px !important;
}

#shopping-table .table-manage h4 {
  font-size: 24px;
  color: #ba54f5;
  font-weight: 400;
  cursor: pointer;
}

#shopping-table .table-manage h4:hover {
  color: #e14eca;
}

#shopping-table img {
  width: 50px;
}

#shopping-table .table-manage table .btn {
  padding: 0 !important;
  margin: 0 !important;
  min-width: 60px;
}

#shopping-table p {
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
  font-size: 15px;
}

#shopping-table th,
#shopping-table span,
#shopping-table p {
  color: rgba(255, 255, 255, 0.7);
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
  left: 25px;
  color: #fff;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
}

#shopping-table .total-amount {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
