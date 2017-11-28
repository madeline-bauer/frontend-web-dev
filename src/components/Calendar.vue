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
              <!--<vue-event-calendar :events="cincEvents"></vue-event-calendar>-->
              <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=7pejdd9r4gqpkmk38t0b5fdsq8%40group.calendar.google.com&amp;color=%2329527A&amp;ctz=America%2FNew_York"
               style="border-width:0" width=100% height="600" frameborder="0" scrolling="no"></iframe>
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
