<template>
  <div id="team-members">
    <v-container fluid grid-list-xl pt-0>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="team in teamMembers" :key="team.id" class="pt-2">
          <v-card class="card-content">
            <v-card-text class="px-4">
              <div class="text-center mb-2">
                <v-avatar class="click" :size="avatarSize">
                  <img v-lazy="team.img" alt="avatar" class="avatar" />
                </v-avatar>
              </div>
              <div class="font-weight-light grey--text text--lighten-1 text-center mb-4">
                <p>{{ team.text }}</p>
              </div>
              <div class="contacts">
                <p>
                  <strong class="grey--text">Full Name:</strong>
                  <span class="grey--text text--lighten-1 ml-2 font-weight-light">{{ team.name }}</span>
                </p>
                <p>
                  <strong class="grey--text">Job:</strong>
                  <span class="grey--text text--lighten-1 ml-2 font-weight-light">{{ team.job }}</span>
                </p>
                <p>
                  <strong class="grey--text">Mobile:</strong>
                  <span class="grey--text text--lighten-1 ml-2 font-weight-light">{{ team.mobile }}</span>
                </p>
                <p>
                  <strong class="grey--text">Email:</strong>
                  <span class="grey--text text--lighten-1 ml-2 font-weight-light">{{ team.email }}</span>
                </p>
                <p>
                  <strong class="grey--text">Country:</strong>
                  <span class="grey--text text--lighten-1 ml-2 font-weight-light">{{ team.country }}</span>
                </p>
              </div>

              <!-- AppDialog -->
              <AppDialog />
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
  name: "TeamMembers",
  components: {
    AppDialog
  },
  data() {
    return {
      avatarSize: "100px",
      teamMembers: [
        {
          img: require("../assets/person3.jpg"),
          text:
            "Hi, I’m Joan & I’m a designer. When I’m not travelling, I’m based in London working remote for Epicweb and making videos and podcast episodes about design.",
          name: "Joan Doe",
          job: "UI/UX Designer",
          mobile: "+989-899-99-88",
          email: "joanDoe@gmail.com",
          country: "United Kingdom"
        },
        {
          img: require("../assets/robi.jpg"),
          text:
            "Hi, I’m John & I’m a Frontend Developer, I’m based in New York working remote for Epicweb and making modern frontend applications",
          name: "John Foe",
          job: "Frontend developer",
          mobile: "+555-998-64-22",
          email: "johnDoe@gmail.com",
          country: "USA"
        },
        {
          img: require("../assets/tania.jpg"),
          text:
            "Hi, I’m Tania & I’m a Fullstack Developer, I’m based in Sydney working remote for Epicweb and making fullstack web applications",
          name: "Tania Mike",
          job: "Fullstack developer",
          mobile: "+899-988-56-22",
          email: "taniaM@gmail.com",
          country: "Australia"
        },
        {
          img: require("../assets/jane.jpg"),
          text:
            "Hi, I’m Jane & I’m a Marketing Spec, I’m based in Toronto working remote for Epicweb and making marketing & branding for Web applications",
          name: "Jane Anderson",
          job: "Marketing",
          mobile: "+500-555-55-11",
          email: "jane@gmail.com",
          country: "Canada"
        },
        {
          img: require("../assets/lora.jpg"),
          text:
            "Hi, I’m Lora & I’m a Frontend Developer, I’m based in Los Angeles working remote for Epicweb and making Design & UX/UI for Web applications",
          name: "Lora Jansen",
          job: "UX/UI Designer",
          mobile: "+556-444-33-47",
          email: "lora@gmail.com",
          country: "USA"
        },
        {
          img: require("../assets/sarah.jpg"),
          text:
            "Hi, I’m Milky & I’m a Product Manager, I’m based in Tashkent working remote for Epicweb and making SEO for Web applications",
          name: "Milky Wild",
          job: "SEO",
          mobile: "+999-100-0101",
          email: "milky@mail.com",
          country: "Uzbekistan"
        }
      ]
    };
  }
};
</script>

<style scoped>
.avatar {
  border: 5px solid #2b3553;
  position: relative;
  border-bottom-color: transparent;
  background-color: transparent;
}
</style>
