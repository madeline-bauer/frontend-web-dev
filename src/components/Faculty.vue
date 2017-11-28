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
        <img :src="require('@/assets/local_library.svg')" alt="Faculty" height="200">
        <h4>Faculty</h4>
      </v-layout>
    </v-parallax>
  </section>
  <section>
    <div>
        <v-tabs v-model="active">
          <v-tabs-bar class="grey" dark>
            <v-tabs-item
              v-for="tab in tabs"
              :key="tab.url"
              ripple
              :to="tab.url"
            >
              {{ tab.name }}
            </v-tabs-item>
            <v-tabs-slider color="white"></v-tabs-slider>
          </v-tabs-bar>
        </v-tabs>
        <v-card flat>
          <v-slide-x-transition mode="out-in">
            <router-view></router-view>
          </v-slide-x-transition>
        </v-card>
      </div>
</section>

</main>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          { url: '/faculty/StudentFellow', name: 'Student Fellow' },
          { url: '/faculty/FacultyExperiences', name: 'Faculty Experiences' },
          { url: '/faculty/TeachingFellow', name: 'Teaching Fellow' }
        ],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>