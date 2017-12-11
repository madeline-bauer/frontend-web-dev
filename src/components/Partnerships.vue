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
  <div v-for="post in posts" :key="post.id">
  <v-layout row wrap>

      <v-flex xs12>
        <v-card color="white" class="black--text" hover>
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">{{post.name}}</div>
                  <div>{{post.description}}</div>
                  <a :href="post.website">{{post.website}}</a>
                </div>
              </v-flex>
              <v-flex xs5 offset-md5>
                <v-card-media
                :src="post.avatar"
                height="125px"
                contain
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </div>
  </v-container>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      posts: []
    }
  },
  created() {
    axios.get('http://localhost:3000/partnerships')
      .then(response => {
        var size = response.data.length;
        var i;
        for (i = 0; i < size; i++){
          if (response.data[i].approved){
            this.posts.push({
              name: response.data[i].name,
              description: response.data[i].description,
              website: response.data[i].website,
              avatar: require('@/assets/BellTower.png'),
            });
          }
        }
      })
  },

}
</script>

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
  text-decoration: none;
}
</style>
