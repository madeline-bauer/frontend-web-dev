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
              <v-card>
                <v-form>
                    <v-text-field
                      label="Name"
                      v-model="eventName"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Description"
                      v-model="eventDesc"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Host"
                      v-model="eventHost"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="When"
                      v-model="eventWhen"
                      required
                    ></v-text-field>
                  </v-form>
                  <v-btn
                        @click="submit"
                      >
                        Submit
                      </v-btn>
              </v-card>
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
import qs from 'qs';
 export default {
  data() {
    return {
      missionStatement: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      eventHost: "Host",
      eventDesc: "Desc",
      eventName: "Name",
      eventWhen: "When"
    }
  },
  methods: {
      submit() {
        var obj = new Object();
        obj.name = this.eventName;
        obj.description = this.eventDesc;
        obj.host = this.eventHost;
        obj.when = this.eventWhen;
        console.log(this.eventName + this.eventDesc + this.eventHost + this.eventWhen)
        axios.post('http://localhost:3000/events', qs.stringify({ 'name': 'hello123' }));
      }
  }
}
</script>
