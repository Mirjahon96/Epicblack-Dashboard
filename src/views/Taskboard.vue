<template>
  <div id="taskboard">
    <v-container fluid grid-list-xl pt-0>
      <v-layout row wrap>
        <v-flex xs12 md12 class="pt-2">
          <v-layout row wrap>
            <!-- 1 -->
            <v-flex xs12 md4>
              <v-card class="card-content">
                <v-card-title
                  class="font-weight-bold subtitle-1"
                  :style="{ color: warning }"
                >Completed</v-card-title>
                <v-card-text class="pt-0">
                  <!-- Draggable -->
                  <div class="draggable">
                    <draggable group="ITEMS" v-model="myList">
                      <div v-for="item in myList" :key="item.id" class="drag-item">
                        <div class="content">
                          <v-checkbox v-model="item.checked" class="left" color="#e14eca"></v-checkbox>
                          <v-chip
                            small
                            ripple="true"
                            label
                            dark
                            class="right"
                            :style="{ background: item.chipColor }"
                          >{{ item.chipText }}</v-chip>
                        </div>
                        <div class="box">
                          <h4 class="subtitle-1 grey--text text--lighten-3 mb-3">{{ item.text }}</h4>
                          <v-avatar class="mr-3" :size="avatarSize">
                            <img :src="item.img" />
                          </v-avatar>
                          <v-icon class="mr-3">list</v-icon>
                          <v-icon>comment</v-icon>
                        </div>
                      </div>
                    </draggable>
                  </div>
                  <!-- TaskDialog -->
                  <TaskDialog />
                </v-card-text>
              </v-card>
            </v-flex>
            <!-- 2 -->
            <v-flex xs12 md4>
              <v-card class="card-content">
                <v-card-title
                  class="font-weight-bold subtitle-1"
                  :style="{ color: success }"
                >In Progress</v-card-title>
                <v-card-text class="pt-0">
                  <!-- Draggable -->
                  <div class="draggable">
                    <draggable group="ITEMS" v-model="myList2">
                      <div v-for="item in myList2" :key="item.id" class="drag-item">
                        <div class="content">
                          <v-checkbox v-model="item.checked" class="left" color="#e14eca"></v-checkbox>
                          <v-chip
                            small
                            label
                            dark
                            class="right"
                            :style="{ background: item.chipColor }"
                          >{{ item.chipText }}</v-chip>
                        </div>
                        <div class="box">
                          <h4 class="subtitle-1 grey--text text--lighten-3 mb-3">{{ item.text }}</h4>
                          <v-avatar class="mr-3" :size="avatarSize">
                            <img :src="item.img" />
                          </v-avatar>
                          <v-icon class="mr-3">list</v-icon>
                          <v-icon>comment</v-icon>
                        </div>
                      </div>
                    </draggable>
                  </div>
                  <!-- TaskDialog -->
                  <TaskDialog />
                </v-card-text>
              </v-card>
            </v-flex>
            <!-- 3 -->
            <v-flex xs12 md4>
              <v-card class="card-content">
                <v-card-title class="font-weight-bold subtitle-1" :style="{ color: info }">Upcoming</v-card-title>
                <v-card-text class="pt-0">
                  <!-- Draggable -->
                  <div class="draggable">
                    <draggable group="ITEMS" v-model="myList3">
                      <div v-for="item in myList3" :key="item.id" class="drag-item">
                        <div class="content">
                          <v-checkbox v-model="item.checked" class="left" color="#e14eca"></v-checkbox>
                          <v-chip
                            small
                            label
                            dark
                            class="right"
                            :style="{ background: item.chipColor }"
                          >{{ item.chipText }}</v-chip>
                        </div>
                        <div class="box">
                          <h4 class="subtitle-1 grey--text text--lighten-3 mb-3">{{ item.text }}</h4>
                          <v-avatar class="mr-3" :size="avatarSize">
                            <img :src="item.img" />
                          </v-avatar>
                          <v-icon class="mr-3">list</v-icon>
                          <v-icon>comment</v-icon>
                        </div>
                      </div>
                    </draggable>
                  </div>
                  <!-- TaskDialog -->
                  <TaskDialog />
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskDialog from "@/components/TaskDialog";
export default {
  name: "Taskboard",
  components: {
    draggable,
    TaskDialog
  },
  data() {
    return {
      avatarSize: "36px",
      info: "#1d8cf8",
      success: "#3eb378",
      warning: "#ff8d72",
      myList: [
        {
          text: "Improve JS skills",
          chipText: "High",
          chipColor: "#ff5b5b",
          checked: false,
          img: require("@/assets/robi.jpg")
        },
        {
          text: "Write next component for Epic Black",
          chipText: "High",
          chipColor: "#ff5b5b",
          checked: false,
          img: require("@/assets/garry.jpg")
        },
        {
          text: "Invite user to a project",
          chipText: "Medium",
          chipColor: "#00f2c3",
          checked: false,
          img: require("@/assets/jane.jpg")
        },
        {
          text: "Complete Black Dashboard",
          chipText: "High",
          chipColor: "#ff5b5b",
          checked: false,
          img: require("@/assets/me.jpg")
        }
      ],
      myList2: [
        {
          text: "Side projects with CSS frameworks",
          chipText: "Urgent",
          chipColor: "#fd8b71",
          checked: false,
          img: require("@/assets/lora.jpg")
        },
        {
          text: "Improve animation skills",
          chipText: "Medium",
          chipColor: "#00f2c3",
          checked: false,
          img: require("@/assets/person3.jpg")
        },
        {
          text: "Learn React",
          chipText: "Urgent",
          chipColor: "#fd8b71",
          checked: false,
          img: require("@/assets/sarah.jpg")
        }
      ],
      myList3: [
        {
          text: "Be The Master of Vue",
          chipText: "High",
          chipColor: "#ff5b5b",
          checked: false,
          img: require("@/assets/emilyz.jpg")
        },
        {
          text: "App Design in Adobe Xd",
          chipText: "Urgent",
          chipColor: "#fd8b71",
          checked: false,
          img: require("@/assets/tania.jpg")
        },
        {
          text: "Do five projects with Adobe Xd",
          chipText: "Medium",
          chipColor: "#00f2c3",
          checked: false,
          img: require("@/assets/person3.jpg")
        },
        {
          text: "Do cool stuffs!!!",
          chipText: "High",
          chipColor: "#ff5b5b",
          checked: false,
          img: require("@/assets/robi.jpg")
        }
      ]
    };
  },
  computed: {
    myList1() {
      return {
        get() {
          return this.items2;
        },
        set(value) {
          this.items2 = value;
        }
      };
    },
    myList4() {
      return {
        get() {
          return this.items2;
        },
        set(value) {
          this.items2 = value;
        }
      };
    },
    myList5() {
      return {
        get() {
          return this.items2;
        },
        set(value) {
          this.items2 = value;
        }
      };
    }
  }
};
</script>

<style scoped>
#taskboard .drag-item {
  cursor: pointer;
  background: #30334e;
  padding: 15px;
  margin-bottom: 1.3rem;
  transition: all 0.2s;
}
/* .list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
} */

#taskboard .v-chip {
  margin-top: 1.5rem;
}

#taskboard .box {
  margin-top: 1.4rem;
  margin-left: 3rem;
}

#taskboard .box .v-icon {
  font-size: 20px !important;
  color: #f3f3f3;
}

#taskboard .box h4:hover,
#taskboard .box .v-icon:hover {
  color: #cacaca !important;
  transition: all 0.2s;
}

.layout input {
  width: 100%;
  padding: 10px 35px;
  border: 1px solid #cecece;
  border-radius: 4px;
  color: #4a4848;
  outline: none;
  font-weight: 400;
  margin-bottom: 15px;
}

.layout input::placeholder,
.layout textarea::placeholder {
  font-size: 13px;
}

.layout input:focus,
.layout textarea:focus {
  border-color: #e14eca;
  transition: all 0.4s;
}

.layout .fa-user {
  position: absolute;
  left: 28px;
  top: 29px;
  color: #ababab;
}

.layout .fa-envelope {
  position: absolute;
  left: 26px;
  top: 89px;
  color: #ababab;
}

.layout textarea {
  width: 100%;
  border: 1px solid #cecece;
  outline: none;
  padding: 16px 35px;
  color: #4a4848;
  font-weight: 400;
}
</style>
