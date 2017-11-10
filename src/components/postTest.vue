<template>
  <main>
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
        <v-btn @click="submit">Submit</v-btn>
    </v-card>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      eventName: "Event Name",
      eventDesc: "Event Description",
      eventHost: "Event Host",
      eventWhen: "Event When"
    }
  },
  methods: {
    submit() { //submit does not work. Madeline and I are working on how to post new data
      var obj = new Object();
      obj.name = this.eventName;
      obj.description = this.eventDesc;
      obj.host = this.eventHost;
      obj.when = this.eventWhen;
      console.log(this.eventName + this.eventDesc + this.eventHost + this.eventWhen)
      axios.post('http://localhost:3000/events', obj)
      .then(function (response) {
          console.log(response);
        })
    }
  }
}
</script>
