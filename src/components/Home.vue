<template>
    <main>

      <section>
        <v-parallax :src="require('@/assets/purple.png')" height = "400">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img :src="require('@/assets/BellTower.png')" alt="Furman" height="200">
            <h4>Computing in Community</h4>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
        >
          <v-flex xs12 class="my-3">
              <div class="text-xs-center subheading">{{missionStatement}}</div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <!--<v-flex xs12 md6>
                  <v-card>
                    <v-card-media
                      height="200px"
                      :src="require('@/assets/BellTower.png')"
                      >
                    </v-card-media>
                    <v-card-text class="text-xs-center">
                      <v-icon x-large>school</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <a class="headline text-xs-center" href='/#/about'>About</a>
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>-->
                <v-flex xs12 md6>
                  <a href='/#/students/ProjectOpportunities'>
                    <v-card hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Madeline.jpg')"
                      >
                      </v-card-media>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Students</div>
                      </v-card-title>
                    </v-card>
                  </a>
                </v-flex>
                <v-flex xs12 md6>
                  <a href='/#/faculty/StudentFellow'>
                    <v-card hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Treu.jpg')"
                      >
                      </v-card-media>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center" >Faculty</div>
                      </v-card-title>
                    </v-card>
                  </a>
                </v-flex>
                <v-flex xs12 md6>
                  <a href='/#/courses'>
                    <v-card hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Class.jpg')"
                      >
                      </v-card-media>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Courses</div>
                      </v-card-title>
                    </v-card>
                  </a>
                </v-flex>
                <v-flex xs12 md6>
                  <a href='/#/community/Information'>
                    <v-card hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Jasmine.jpg')"
                      >
                      </v-card-media>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Community Partners</div>
                      </v-card-title>
                    </v-card>
                  </a>
                </v-flex>
                <!--<v-flex xs12 md6>
                  <v-card>
                    <v-card-media
                      height="200px"
                      :src="require('@/assets/BellTower.png')"
                      >
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <a class="headline text-xs-center" href='/#/blog'>Blog</a>
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>-->
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


    </main>
</template>

<style>
a{
  text-decoration:none
}
</style>

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