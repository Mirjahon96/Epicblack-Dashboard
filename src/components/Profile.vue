<template>
  <div id="profile">
    <v-card class="card-content">
      <div class="block block1"></div>
      <div class="block block2"></div>
      <div class="block block3"></div>
      <div class="block block4"></div>
      <v-card-text>
        <div class="text-center img-content">
          <v-avatar class="click" :size="avatarSize">
            <img src="../assets/tania.jpg" alt="avatar" class="avatar" />
          </v-avatar>
          <h5 class="body-1 font-weight-medium grey--text text--lighten-2 mb-2">
            Tania Mike
          </h5>
          <h3 class="font-weight-light grey--text text--lighten-1 mb-4">
            Ceo/Co-Founder
          </h3>
          <div
            class="font-weight-light grey--text text--lighten-1 text-left mb-4"
          >
            <p>
              Do not be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
          </div>
        </div>

        <div class="text-center mb-2">
          <v-btn
            class="ma-1 button-translate"
            small
            fab
            dark
            :style="{ background: item.color }"
            v-for="item in btnIcons"
            :key="item.id"
          >
            <v-icon :class="item.icon"></v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      avatarSize: "135px",
      btnIcons: [
        {
          icon: "fa fa-facebook",
          color: "linear-gradient(to bottom left,#3b5998,#1e2e4f,#3b5998)"
        },
        {
          icon: "fa fa-twitter",
          color: "linear-gradient(to bottom left,#55acee,#147bc9,#55acee)"
        },
        {
          icon: "fa fa-google",
          color: "linear-gradient(to bottom left,#dd4b39,#96271a,#dd4b39)"
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-content {
  position: relative;
  overflow: hidden;
}

.img-content {
  margin-top: 40px;
}

.avatar {
  border: 5px solid #2b3553;
  position: relative;
  border-bottom-color: transparent;
  background-color: transparent;
  margin-bottom: 2rem;
}

/* Blocks */
.block {
  position: absolute;
  height: 100px;
  width: 250px;
}
.block1 {
  background: linear-gradient(
    90deg,
    rgba(225, 78, 202, 0.6) 0,
    rgba(225, 78, 202, 0)
  );
  transform: rotate(150deg);
  top: 19px;
  right: -25px;
}

.block2 {
  background: linear-gradient(
    90deg,
    rgba(225, 78, 202, 0.6) 0,
    rgba(225, 78, 202, 0)
  );
  transform: rotate(30deg);
  top: 23px;
  left: -25px;
}

.block3 {
  background: linear-gradient(
    90deg,
    rgba(225, 78, 202, 0.6) 0,
    rgba(225, 78, 202, 0)
  );
  transform: rotate(170deg);
  top: -30px;
  right: 0;
}

.block4 {
  background: linear-gradient(
    90deg,
    rgba(225, 78, 202, 0.6) 0,
    rgba(225, 78, 202, 0)
  );
  transform: rotate(150deg);
  top: -60px;
  left: 0;
}
</style>
