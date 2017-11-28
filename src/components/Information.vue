<template>
  <v-layout row>
    <v-flex xs10 offset-xs1 class="py-3 px-3">
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
  </v-layout>
</template>

<script>
export default {
  name: 'Information',
  data () {
    return {
      msg: 'Information'
    }
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
