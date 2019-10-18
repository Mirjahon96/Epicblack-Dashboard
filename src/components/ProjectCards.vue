<template>
  <div id="project-cards">
    <!-- ProjectNav -->
    <ProjectNav />

    <v-container fluid grid-list-xl>
      <v-layout wrap row>
        <v-flex xs12 sm6 md6 lg4 v-for="project in projects" :key="project.id">
          <v-hover v-slot:default="{ hover }">
            <v-card class="card-content" :elevation="hover ? 6 : 2">
              <v-card-text>
                <v-chip class="right" small dark :color="project.color">{{
                  project.chipTitle
                }}</v-chip>
                <h3 class="title hoverTitle font-weight-light mb-2">
                  {{ project.title }}
                </h3>
                <p class="text-uppercase" :style="{ color: project.color }">
                  {{ project.projectTitle }}
                </p>
                <p class="grey--text text--lighten-1 mb-3">
                  {{ project.pText }}
                  <a>View More</a>
                </p>
                <div class="d-inline-block mr-4">
                  <h3 class="title">{{ project.qNumber }}</h3>
                  <p class="subtitle-2 grey--text text--lighten-1">Questions</p>
                </div>
                <div class="d-inline-block mr-4">
                  <h3 class="title">{{ project.cNumber }}</h3>
                  <p class="subtitle-2 grey--text text--lighten-1">Comments</p>
                </div>

                <v-spacer></v-spacer>

                <div class="team-members d-inline-flex align-center mt-3">
                  <h3 class="mr-3 body-2 font-weight-regular">Team:</h3>
                  <v-avatar
                    :size="avatarSize"
                    v-for="avatar in project.images"
                    :key="avatar.id"
                  >
                    <v-tooltip top content-class="tooltip-content">
                      <template v-slot:activator="{ on }">
                        <img :src="avatar.img" v-on="on" alt="team" />
                      </template>
                      <span>{{ avatar.name }}</span>
                    </v-tooltip>
                  </v-avatar>
                </div>

                <div class="progress my-3">
                  <h3 class="body-2 font-weight-regular">Progress:</h3>
                  <span
                    class="font-weight-medium"
                    :style="{ color: project.color }"
                    >{{ project.progress }}</span
                  >
                </div>
                <v-progress-linear
                  :value="project.progress"
                  height="6"
                  :color="project.color"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProjectNav from "@/components/ProjectNav";

export default {
  name: "ProjectCards",
  components: {
    ProjectNav
  },
  data() {
    return {
      avatarSize: "36px",
      projects: [
        {
          color: "#389466",
          chipTitle: "Completed",
          title: "App Design & Develop",
          projectTitle: "SPA Develop",
          pText:
            "If several languages the grammar is more simple and regular than that of the individual...",
          qNumber: "37",
          cNumber: "122",
          progress: "75%",
          images: [
            { img: require("../assets/me.jpg"), name: "M96" },
            { img: require("../assets/emilyz.jpg"), name: "Milky Wild" },
            { img: require("../assets/jane.jpg"), name: "Michael Ellison" },
            { img: require("../assets/lora.jpg"), name: "Lora Jansen" },
            { img: require("../assets/robi.jpg"), name: "John Foe" }
          ]
        },
        {
          color: "#1d8cf8",
          chipTitle: "Completed",
          title: "UI/UX Design",
          projectTitle: "Web Design",
          pText:
            "New common language will be more simple and regular than the existing European languages...",
          qNumber: "21",
          cNumber: "754",
          progress: "25%",
          images: [
            { img: require("../assets/person3.jpg"), name: "Joan Doe" },
            { img: require("../assets/tania.jpg"), name: "Tania Mike" },
            { img: require("../assets/jane.jpg"), name: "Jane Anderson" }
          ]
        },
        {
          color: "#e14eca",
          chipTitle: "Not Completed",
          title: "Landing Page Design",
          projectTitle: "Web Design",
          pText:
            "It will be as simple as occidental in fact it will be to an english person it will seem like English...",
          qNumber: "89",
          cNumber: "400",
          progress: "70%",
          images: [
            { img: require("../assets/jane.jpg"), name: "Jane Anderson" },
            { img: require("../assets/lora.jpg"), name: "Lora Jansen" },
            { img: require("../assets/sarah.jpg"), name: "Sarah Eshley" },
            { img: require("../assets/robi.jpg"), name: "John Foe" }
          ]
        },
        {
          color: "#ff5b5b",
          chipTitle: "Completed",
          title: "PWA App Design & Develop",
          projectTitle: "Mobile",
          pText:
            "Everyone realizes why a new common language would be desirable one could refuse to pay...",
          qNumber: "147",
          cNumber: "1017",
          progress: "48%",
          images: [
            { img: require("../assets/sarah.jpg"), name: "Sarah Eshley" },
            { img: require("../assets/tania.jpg"), name: "Tania Mike" },
            { img: require("../assets/garry.jpg"), name: "Ozi" },
            { img: require("../assets/me.jpg"), name: "M96" }
          ]
        },
        {
          color: "#00f2c3",
          chipTitle: "On Going",
          title: "Commercial App Develop",
          projectTitle: "Web Apps",
          pText:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti...",
          qNumber: "40",
          cNumber: "225",
          progress: "55%",
          images: [
            { img: require("../assets/robi.jpg"), name: "John Foe" },
            { img: require("../assets/lora.jpg"), name: "Lora Jansen" },
            { img: require("../assets/tania.jpg"), name: "Tania Mike" },
            { img: require("../assets/jane.jpg"), name: "Jane Anderson" },
            { img: require("../assets/person3.jpg"), name: "Joan Doe" }
          ]
        },
        {
          color: "#ff8d72",
          chipTitle: "Completed",
          title: "Admin Panel",
          projectTitle: "UI/UX Design",
          pText:
            "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary...",
          qNumber: "100",
          cNumber: "333",
          progress: "61%",
          images: [
            { img: require("../assets/emilyz.jpg"), name: "Milky Wild" },
            { img: require("../assets/jane.jpg"), name: "Jane Anderson" },
            { img: require("../assets/person3.jpg"), name: "Joan Doe" },
            { img: require("../assets/tania.jpg"), name: "Tania Mike" }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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
  left: 44%;
  color: #fff;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
}

h3 {
  color: #fff;
}

img {
  position: relative;
}

.hoverTitle:hover {
  color: #cacaca;
  cursor: pointer;
  transition: all 0.2s;
}

.v-avatar {
  margin-right: -5px;
  cursor: pointer;
}

.progress span {
  font-size: 15px;
}
</style>
