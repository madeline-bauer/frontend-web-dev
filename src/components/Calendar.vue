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
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <full-calendar :events="events" locale="en"></full-calendar>
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
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      /*
      eventData: [
        { text: 'Event', value: 'name' },
        { text: 'Host', value: 'hostName' },
        { text: 'Description', value: 'description' },
        { text: 'Start Date', value: eventSplit(startTime)[0]},
        { text: 'End Date', value: eventSplit(endTime)[0]},
        { text: 'Start Time', value: eventSplit(startTime)[1]},
        { text: 'End Time', value: eventSplit(endTime)[1]},
        { text: 'Tags', value: 'tags'}
      ], */
      cincevents: [
      ],
      events: [
          {
            title     :  'event1',
            start     : '2017-11-01',
            end       : '2017-11-02',
            cssClass  : '',
            YOUR_DATA : {}
          },
      ],
    }
  },
  components : {
  'full-calendar': require('vue-fullcalendar')
  },
  /*
  created() {
    axios.get('http://localhost:3000/events?approved=true').then(response => {
      var size = response.data.length;
      var i;
      for (i = 0; i < 4; i++){
        if (response.data[i].tags.student === 'true'){
          this.eventData.push({
            name: response.data[i].name,
            host: response.data[i].hostName,
            description: response.data[i].description,
            startTime: response.data[i].start,
            endTime: response.data[i].end,
          });
        }
        else if (response.data[i].tags.faculty === 'true'){
          this.cincevents.push({
            title: response.data[i].name,
            host: response.data[i].hostName,
            description: response.data[i].description,
            startTime: response.data[i].start,
            endTime: response.data[i].end,
          });
        }
      }
    })
  },
  methods: {
    eventSplit: function (dateTime) {
      var dts = dateTime.split(" ");
      var date = dts[0];
      var time = dts[1];
      return (date, time);
    },
  }, */
}

</script>
