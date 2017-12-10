<template>
  <v-layout row wrap>
    <v-flex xs12 md3 class="py-3 px-3">
      <v-card >
        <v-card-title primary-title>
          <div class="headline">Lorem Ipsum</div>
        </v-card-title>
        <v-card-text>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8 class="py-3 px-3">
      <v-card>
        <v-list three-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        items: [
          { avatar: require('@/assets/Carina.jpg'), title: 'X Award', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — This award is a cool award." },
          { divider: true, inset: true },
          { avatar: require('@/assets/Madeline.jpg'), title: 'Y Award', subtitle: "<span class='grey--text text--darken-2'>Alex, Scott, Jennifer</span> — This award was given because these people are really smart. Like, so smart. And talented. And hard-working. The smartest talentedest hard-workingest people." },
          { divider: true, inset: true },
          { avatar: require('@/assets/Treu.jpg'), title: 'Z Award', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — This award isn't as good." }
        ],
        posts: []
      }
    },
    created() {
      axios.get('http://localhost:3000/awards')
        .then(response => {
          var size = response.data.length;
          var i;
          for (i = 0; i < size; i++){
            if (response.data[i].approved){
              this.posts.push({
                title: response.data[i].award,
                subtitle: response.data[i].description,
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
  color: #42b983;
}
</style>
