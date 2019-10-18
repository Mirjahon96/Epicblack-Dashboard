<template>
  <div id="faqs">
    <v-container fluid grid-list-xl pt-0>
      <v-layout row wrap>
        <v-flex x12 pt-2>
          <v-card class="card-content">
            <v-card-title class="text-center d-block pt-4">
              <h2 class="headline white--text font-weight-light mb-2">Frequently Asked Questions</h2>
              <p class="grey--text text--lighten-1">
                Nisi praesentium similique totam odio obcaecati,
                reprehenderit, dignissimos
                <br />rem temporibus ea inventore alias! Beatae animi nemo ea tempora, temporibus laborum
                <br />facilis ut!
              </p>
              <div class="faq-buttons">
                <AppDialog purple>
                  <span slot="button-text" class="text-capitalize">Email us your message</span>
                  <v-flex xs12 slot="email-input">
                    <v-text-field
                      label="Email"
                      prepend-inner-icon="email"
                      type="email"
                      v-model="email"
                      solo
                      autocomplete
                      color="#00bf9a"
                      :rules="emailRules"
                    ></v-text-field>
                  </v-flex>
                </AppDialog>

                <AppDialog orange :img="require('@/assets/card-warning.png')">
                  <span slot="button-text" class="text-capitalize">Send us a tweet</span>
                  <span slot="form-text">Send a Tweet</span>
                </AppDialog>
              </div>
            </v-card-title>

            <v-card-text>
              <v-layout>
                <v-flex xs12 md9 mx-auto>
                  <!-- Expansion Panels -->
                  <v-layout row wrap>
                    <!-- 1 -->
                    <v-flex xs12 md6>
                      <v-expansion-panel class="elevation-0">
                        <v-expansion-panel-content
                          class="mb-3"
                          lazy
                          hide-actions
                          v-for="question in questions"
                          :key="question.id"
                        >
                          <template v-slot:header>
                            <h4 class="heading white--text">{{ question.text }}</h4>
                          </template>
                          <div class="card-content pa-4">
                            <p
                              class="grey--text text--lighten-1"
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p
                              class="grey--text text--lighten-1 mb-0"
                            >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex>
                    <!-- 2 -->
                    <v-flex xs12 md6>
                      <v-expansion-panel class="elevation-0">
                        <v-expansion-panel-content
                          class="mb-3"
                          lazy
                          hide-actions
                          v-for="question in questions2"
                          :key="question.id"
                        >
                          <template v-slot:header>
                            <h4 class="heading white--text">{{ question.text }}</h4>
                          </template>
                          <div class="card-content pa-4">
                            <p
                              class="grey--text text--lighten-1"
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p
                              class="grey--text text--lighten-1 mb-0"
                            >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex>
                  </v-layout>
                  <!-- end panels -->
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppDialog from "@/components/ui-components/AppDialog";

export default {
  name: "Faqs",
  components: {
    AppDialog
  },
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      questions: [
        {
          text: "What is Epicblack?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
        },
        {
          text: "Why use Epicblack Dashboard?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
        },
        {
          text: "Is safe to use Epicblack?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
        }
      ],
      questions2: [
        {
          text: "What technologies are used in Epicblack?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
        },
        {
          text: "Is Epicblack have License & Copyright?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
        },
        {
          text: "How many variations are  exist?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
        }
      ]
    };
  }
};
</script>

<style scoped>
.theme--light.v-expansion-panel .v-expansion-panel__container {
  background: #30334e !important;
}

#faqs .v-expansion-panel__container .card-content {
  border: 1px solid #30334e !important;
}

#faqs .faq-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

#faqs .heading {
  font-size: 15px;
  font-weight: 400;
}
</style>
