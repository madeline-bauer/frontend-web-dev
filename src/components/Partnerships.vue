<template>
  <div
  id="e3"
  class="py-3 px-3"
  style="max-width: 1000px; margin: auto;"
  >
  <v-container
  fluid
  style="min-height: 0;"
  grid-list-lg
  >
  <v-layout row wrap>
    <v-flex xs12>
      <v-card color="white" class="black--text" hover>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs7>
              <div>
                <div class="headline">Partner 1</div>
                <div>Description 1</div>
              </div>
            </v-flex>
            <v-flex xs5 offset-md5>
              <v-card-media
              :src="require('@/assets/Madeline.jpg')"
              height="125px"
              contain
              ></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-card color="white" class="black--text" hover>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs7>
              <div>
                <div class="headline">Partner 2</div>
                <div>Description 2</div>
              </div>
            </v-flex>
            <v-flex xs5 offset-md5>
              <v-card-media
              :src="require('@/assets/Madeline.jpg')"
              height="125px"
              contain
              ></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-card color="white" class="black--text" hover>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs7>
              <div>
                <div class="headline">Partner 3</div>
                <div>Description 3</div>
              </div>
            </v-flex>
            <v-flex xs5 offset-md5>
              <v-card-media
              :src="require('@/assets/Madeline.jpg')"
              height="125px"
              contain
              ></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>