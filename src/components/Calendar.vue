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
        <img :src="require('@/assets/today.svg')" alt="Calendar" height="200">
        <h4>Calendar</h4>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout>
        <v-container fill-height fluid>
          <v-flex xs12 md8 offset-md2>
            <v-card>
              <vue-event-calendar :events="cincEvents"></vue-event-calendar>
            </v-card>
          </v-flex>
        </v-container>
      </v-layout>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/11/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2016/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }],
      cincEvents: []
    }
  },
  created() {
    axios.get('http://localhost:3000/events?approved=true').then(response => {
      var size = response.data.length;
      var i;
      for (i = 0; i < size; i++){
        if (response.data[i].tags.faculty || response.data[i].tags.students){
          this.cincEvents.push({
            title: response.data[i].name,
            //host: response.data[i].hostName,
            //description: response.data[i].description,
            date: response.data[i].start,
            desc: response.data[i].description,
          });
        }
      }
    })
  },
}
</script>
