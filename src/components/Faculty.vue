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
        <img :src="require('@/assets/local_library.svg')" alt="Faculty" height="250">
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
          title: 'Apply for CinC Student Fellow',
          active: true,
          items: [
            { title: 'Round 1' },
            { title: 'Round 2' }
          ]
        },
        {
          action: 'restaurant',
          title: 'Experiences'
        },
        {
          action: 'restaurant',
          title: 'Apply to be CinC Teaching Fellow',
        }
      ]
    }
  }
}
</script>
