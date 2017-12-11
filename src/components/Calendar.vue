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
