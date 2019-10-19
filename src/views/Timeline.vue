<template>
  <div id="timeline">
    <v-container fluid grid-list-xl pt-0>
      <v-layout row wrap>
        <v-flex>
          <div class="text-center mb-5">
            <h2 class="headline font-weight-bold grey--text text--lighten-2">
              Timeline
            </h2>
          </div>
          <v-timeline light>
            <v-timeline-item
              light
              v-for="(timeline, index) in timelines"
              :key="index"
              :color="timeline.color"
              :icon="timeline.icon"
              fill-dot
              large
            >
              <v-card class="card-content" color="#27293d">
                <v-card-title class="pb-0">
                  <v-chip small :color="timeline.color" text-color="white">{{
                    timeline.chipTitle
                  }}</v-chip>
                </v-card-title>
                <v-card-text>
                  <p class="subtitle-1 mb-1" :style="{ color: timeline.color }">
                    {{ timeline.datetime }}
                  </p>
                  <p class="grey--text text--lighten-1">{{ timeline.text }}</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      timelines: [
        {
          icon: "favorite",
          color: "#fd8b71",
          chipTitle: "Admin Paper Dashboard",
          text:
            "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.",
          datetime: "07 May 2019"
        },
        {
          icon: "brush",
          color: "#00f2c3",
          chipTitle: "UI/UX Design",
          text:
            "Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....",
          datetime: "14 June 2019"
        },
        {
          icon: "card_giftcard",
          color: "#1d8cf8",
          chipTitle: "Landing Page",
          text:
            "Jonatha Smith added new milestone crishtian Lorem ipsum dolor sit amet consiquest dio. Download the new updates of Ubold admin dashboard",
          datetime: "5 September 2019"
        },
        {
          icon: "color_lens",
          color: "#fd5d93",
          chipTitle: "App Design",
          text:
            "Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM. What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye datetime: 1 hour",
          datetime: "27 June 2019"
        },
        {
          icon: "star",
          color: "#e14eca",
          chipTitle: "Black Dashboard",
          text:
            "Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team",
          datetime: "19 July 2019"
        },
        {
          icon: "developer_mode",
          color: "#3eb378",
          chipTitle: "Mobile App Design & Develop",
          text:
            "Jonathan Smith added new milestone prank Lorem ipsum dolor sit amet consiquest dio",
          datetime: "10 October 2019"
        }
      ]
    };
  }
};
</script>

<style scoped>
#timeline .v-timeline:before {
  background: #27293d !important;
  width: 3px;
}
</style>
