<template>
  <div id="task-detail">
    <v-container fluid grid-list-xl pt-0>
      <v-layout wrap row>
        <v-flex xs12 md8 class="pt-2">
          <v-card class="card-content">
            <v-card-title class="px-4">
              <v-avatar class="d-flex mr-4" :size="avatarSize">
                <img src="@/assets/sarah.jpg" alt />
              </v-avatar>
              <div class="avatar-text">
                <h4 class="title mb-1 grey--text text--lighten-3">Sarah Anderson</h4>
                <v-chip small label dark class="red lighten-1">Urgent</v-chip>
              </div>
              <div class="grey--text text--lighten-1">
                <h3
                  class="heading-4 grey--text text--lighten-3 mt-4 mb-3"
                >Code HTML email template for welcome email</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint cupiditate non sunt
                  in culpa qui officia deserunt animi est laborum et
                </p>
                <p>
                  Consectetur adipisicing elit. Voluptates, illo, iste itaque
                  voluptas corrupti ratione reprehenderit magni similique
                  Tempore quos delectus asperiores libero voluptas quod
                  perferendis erum ipsum dolor sit.
                </p>
              </div>

              <!-- 2 -->
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <h3 class="subtitle-1 grey--text text--lighten-3 mb-2">Start Date</h3>
                  <p class="grey--text text--lighten-1">7 July 2019 14:00 PM</p>
                </v-flex>
                <v-flex xs12 md6>
                  <h3 class="subtitle-1 grey--text text--lighten-3 mb-2">Due Date</h3>
                  <p class="grey--text text--lighten-1">15 September 2019 12:00 PM</p>
                </v-flex>
              </v-layout>
            </v-card-title>
            <!-- ChipInputs -->
            <v-card-text class="pt-0 px-4">
              <div class="mb-3">
                <h3 class="subtitle-1 grey--text text--lighten-3 mb-0">Tags</h3>
                <ChipInputs />
              </div>

              <div class="mb-4">
                <!-- Team Members -->
                <h3 class="subtitle-1 grey--text text--lighten-3 mb-2">Assign to</h3>
                <router-link to="/team">
                  <v-avatar class="mr-2" :size="teamSize" v-for="team in teams" :key="team.id">
                    <img :src="team.img" alt="team" />
                  </v-avatar>
                </router-link>
                <v-btn class="ma-0" icon color="#363650">
                  <v-icon small color="#bdbdbd">add</v-icon>
                </v-btn>
              </div>

              <!-- Attached files -->
              <div class="mb-3">
                <h3 class="subtitle-1 grey--text text--lighten-3 mb-2">Attached Files</h3>
                <v-avatar
                  class="files mr-2"
                  :size="fileSize"
                  tile
                  v-for="file in files"
                  :key="file.id"
                >
                  <img :src="file.img" alt="files" />
                </v-avatar>
                <upload-btn icon class="upload-btn ml-2" fab color="#363650">
                  <template slot="icon">
                    <v-icon small color="#dbdbdb">add</v-icon>
                  </template>
                </upload-btn>
              </div>

              <div class="text-right">
                <v-btn dark color="purple-gradient" class="mx-0">Save</v-btn>
                <v-btn dark color="orange-gradient">Cancel</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- TaskComments -->
        <v-flex xs12 md4>
          <TaskComments />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ChipInputs from "@/components/ui-components/ChipInputs";
import UploadButton from "vuetify-upload-button";
import TaskComments from "@/components/TaskComments";

export default {
  name: "TaskDetail",
  components: {
    ChipInputs,
    "upload-btn": UploadButton,
    TaskComments
  },
  data() {
    return {
      avatarSize: "70px",
      teamSize: "36px",
      fileSize: "80px",
      teams: [
        { img: require("../assets/person3.jpg") },
        { img: require("../assets/robi.jpg") },
        { img: require("../assets/tania.jpg") }
      ],
      files: [
        { img: require("../assets/file3.jpg") },
        { img: require("../assets/file2.jpg") },
        { img: require("../assets/file1.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
#task-detail .files {
  border: 5px solid #2b3553;
  position: relative;
  background-color: transparent;
}

#task-detail .files img {
  padding: 5px;
  position: relative;
}

.upload-btn {
  background: #363650;
  margin: 0;
  display: inline-block;
  border-radius: 50%;
  width: 36px;
  padding: 0 !important;
  text-align: center;
}

#task-detail h4,
#task-detail h3 {
  font-weight: 400;
}
</style>
