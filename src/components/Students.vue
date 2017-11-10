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
        <img :src="require('@/assets/person.svg')" alt="Students" height="200">
        <h4>Students</h4>
      </v-layout>
    </v-parallax>
  </section>
  <v-layout row wrap>
    <v-flex xs3>
      <v-card dark color="secondary">
        <v-list>
          <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>


</main>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          action: 'local_activity',
          title: 'Project Opportunities',
          active: true
        },
        {
          action: 'restaurant',
          title: 'Experiences',
          items: [
            { title: 'Postings' },
            { title: 'Employment History' }
          ]
        },
        {
          action: 'school',
          title: 'Travel Opportunities',
          items: [
            { title: 'Research Conferences' },
            { title: 'Research Competitions' },
            { title: 'Programming Competitions / Hack-a-thons' },
            { title: 'Grace Hopper Celebration of Women in Computing' }
          ]
        },
        {
          action: 'directions_run',
          title: 'Student Awards'
        }
      ]
    }
  }
}
</script>
