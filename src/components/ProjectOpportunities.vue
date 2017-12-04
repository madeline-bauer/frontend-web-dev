<template>
  <v-layout row justify-space-around wrap>
    <v-flex xs12 md8>
      <div v-for="post in posts" :key="post.id">
        <v-card class="my-3" hover>
          <v-card-title>
            <span class="headline">{{ post.title }}</span>
          </v-card-title>
          <v-card-text>
            <span>{{ post.content }}</span>
            <v-container>
              <v-flex xs12>
                <span>- {{ post.author }}</span>
              </v-flex>
              <v-flex xs12>
                <span>{{ post.date }}</span>
              </v-flex>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn flat @click="">Edit</v-btn>
            <v-btn flat @click="">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      dialog: false,
      valid: true,
      name: '',
      title: '',
      body:'',
      rules: [
          (v) => !!v || 'Item is required'
      ],
      posts: []
    }
  },
  created() {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        var size = response.data.length;
        var i;
        for (i = 0; i < size; i++){
          if (response.data[i].approved && response.data[i].tags.internship){
            this.posts.push({
              title: response.data[i].title,
              date: response.data[i].postdate,
              content: response.data[i].text,
              author: response.data[i].authorName,
            });
          }
        }
      })
  }
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
  color: #42b983;
}
</style>
