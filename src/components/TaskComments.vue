<template>
  <div id="task-comments">
    <v-card class="card-content">
      <v-card-title>
        <h4 class="title grey--text text--lighten-3">Comments (6)</h4>
      </v-card-title>
      <v-card-text>
        <div class="d-flex" v-for="comment in comments" :key="comment.id">
          <v-avatar class="mr-4" :size="size">
            <img v-lazy="comment.img" />
          </v-avatar>
          <div class="pr-3">
            <h4 class="subtitle-1 grey--text text--lighten-3 mb-2">{{ comment.name }}</h4>
            <p class="subtitle-1">
              <a>{{ comment.email }}</a>
              {{ comment.msg }}
            </p>
            <a class="link">Reply</a>
          </div>
        </div>
        <div class="input-field">
          <v-avatar class="mr-4" :size="size">
            <img src="@/assets/sarah.jpg" />
          </v-avatar>
          <div class="input">
            <input type="text" placeholder="add a comment" />
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TaskComments",
  components: {},
  data() {
    return {
      size: "38px",
      comments: [
        {
          img: require("../assets/tania.jpg"),
          name: "Tania Mike",
          email: "@Tania",
          msg:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."
        },
        {
          img: require("../assets/jane.jpg"),
          name: "Jane Andersom",
          email: "@Jane",
          msg:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque sollicitudin purus odio."
        },
        {
          img: require("../assets/emilyz.jpg"),
          name: "Milky Wild",
          email: "@Milky",
          msg:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo cras purus."
        },
        {
          img: require("../assets/robi.jpg"),
          name: "John Foe",
          email: "@JFoe",
          msg:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo cras."
        }
      ]
    };
  }
};
</script>

<style scoped>
#task-comments p {
  font-size: 14px !important;
  color: #bdbdbd;
  margin-bottom: 2px;
}

#task-comments h4 {
  font-weight: 400;
}

.link {
  color: #29ab6a;
  margin-bottom: 12px;
  display: inline-block;
}

.link:hover {
  color: #219641;
  transition: color 0.2s;
}

#task-comments .input-field .input {
  width: 100%;
}

#task-comments .input-field input {
  width: 90%;
  padding: 10px;
  background: #353850;
  color: #bdbdbd;
  outline: none;
  border: 1px solid #353850;
  border-radius: 2px;
}

#task-comments .input-field input::placeholder {
  color: #bdbdbd;
}

#task-comments .input-field input:focus {
  border-color: #00bf9a;
  transition: border-color 0.2s;
}

#task-comments .input-field {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
