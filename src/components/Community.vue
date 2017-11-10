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
        <img :src="require('@/assets/people.svg')" alt="Community Partners" height="200">
        <h4>Community Partners</h4>
        </v-layout>
      </v-parallax>
    </section>

      <section>
        <div>
          <v-tabs dark v-model="active">
            <v-tabs-bar class="grey">
              <v-tabs-item
              v-for="tab in tabs"
              :key="tab.id"
              :href="'#' + tab.name"
              ripple
              >
              {{tab.name}}
            </v-tabs-item>
            <v-tabs-slider color="white"></v-tabs-slider>
          </v-tabs-bar>
          <v-tabs-items>
            <v-tabs-content
            v-for="tab in tabs"
            :key="tab.name"
            :id='tab.name'
            >
            <v-card flat>
              <v-card-text>{{tab.text}}</v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>
    </div>
    </section>

    </main>
    </template>

    <script>
    export default {
      data () {
        return {
          tabs: [
          {
            id: 1,
            name: 'Promotional Information',
            text: 'Content1'
          },
          {
            id: 2,
            name: 'Partnerships',
            text: 'Content2'
          },
          {
            id: 3,
            name: 'Post Job / Internship Ad',
            text: 'Content3'
          },
          {
            id: 4,
            name: 'Apply for Funded Intern',
            text: 'Content4'
          }
          ],
          active: null
        }

      }
    }
    </script>



  </main>
</template>
