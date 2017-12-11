<template>
  <v-layout row>
    <v-flex xs10 offset-xs1 class="py-3 px-3">
      <v-card >
        <v-card-title primary-title>
          <div class="headline">Lorem Ipsum</div>
        </v-card-title>
        <v-card-text>
          <div>
            {{content}}
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Information',
  data () {
    return {
      msg: 'Information',
      content: '',
    }
  },
  created() {
    axios.get('http://localhost:3000/siteContent')
      .then(response => {
        this.content = response.data[4].value;
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
  color: #42b983;
}
</style>
