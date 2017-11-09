<template>
    <main>

      <section>
        <v-parallax :src="require('@/assets/purple.jpg')" height = "450">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img :src="require('@/assets/BellTower.png')" alt="Furman" height="300">
            <!--<h1 class="white--text mb-2 display-3">Computing in Community</h1>-->
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm8 class="my-3">
              <div class="text-xs-center subheading">{{missionStatement}}</div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6>
                  <v-card>
                    <v-card-media
                      height="200px"
                      :src="require('@/assets/BellTower.png')"
                      >
                    </v-card-media>
                    <!--<v-card-text class="text-xs-center">
                      <v-icon x-large>school</v-icon>
                    </v-card-text>-->
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">About</div>
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card>
                    <v-card-media
                      height="200px"
                      :src="require('@/assets/BellTower.png')"
                      >
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Students</div>
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card>
                    <v-card-media
                      height="200px"
                      :src="require('@/assets/BellTower.png')"
                      >
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Faculty</div>
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card>
                    <v-card-media
                      height="200px"
                      :src="require('@/assets/BellTower.png')"
                      >
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Community Partners</div>
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


    </main>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      missionStatement: ""
    }
  },
  created() {
    axios.get('http://localhost:3000/siteContent', {
        params: {
          name: 'mission statement'
        }
      })
      .then(response => {
        this.missionStatement = response.data[0].value;
      })
  }
}
</script>