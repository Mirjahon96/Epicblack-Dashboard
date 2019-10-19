<template>
  <div id="cards">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="card in cards" :key="card.id">
          <v-card class="card-content">
            <v-layout row class="pa-0 mt-0">
              <v-flex xs12 md5>
                <v-card-text class="pt-0">
                  <v-avatar :style="{ background: card.background }">
                    <v-icon class="white--text">{{ card.icon }}</v-icon>
                  </v-avatar>
                </v-card-text>
              </v-flex>
              <v-flex xs12 md7>
                <div class="text-right">
                  <v-card-text class="pt-0">
                    <span class="grey--text lighten-1">{{ card.text }}</span>
                    <h2 class="headline white--text">{{ card.number }}</h2>
                  </v-card-text>
                </div>
              </v-flex>
            </v-layout>
            <div class="px-3">
              <v-divider class="darkblue"></v-divider>
            </div>
            <v-card-actions>
              <v-icon small class="grey--text lighten-2 ml-1">
                {{ card.bottomIcon }}
              </v-icon>
              <span class="grey--text lighten-2 ml-2">
                {{ card.bottomText }}
              </span>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      cards: [
        {
          icon: "textsms",
          text: "Number",
          number: "150GB",
          bottomIcon: "update",
          bottomText: "Update Now",
          background: "linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)"
        },
        {
          icon: "grade",
          text: "Followers",
          number: "+45K",
          bottomIcon: "timeline",
          bottomText: "Last Research",
          background: "linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)"
        },
        {
          icon: "account_box",
          text: "Users",
          number: "150,000",
          bottomIcon: "local_bar",
          bottomText: "Customer feedback",
          background: "linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)"
        },
        {
          icon: "warning",
          text: "Errors",
          number: "13",
          bottomIcon: "alarm",
          bottomText: "In the last hours",
          background: "linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)"
        }
      ]
    };
  }
};
</script>

<style scoped>
.darkblue {
  background: #2b3553;
}

.card-content {
  background: #27293d;
}
</style>
