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
    </section>
      <section>
        <div>
            <v-tabs v-model="active">
              <v-tabs-bar class="grey" dark>
                <v-tabs-item
                  v-for="tab in tabs"
                  :key="tab.url"
                  :ripple="{ class: 'grey--text text--lighten-2' }"
                  :to="tab.url"
                >
                  <div class="black--text">
                    {{ tab.name }}
                  </div>
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
            { url: '/Community/Information', name: 'Promotional Information' },
            { url: '/Community/Partnerships', name: 'Partnerships' },
            { url: '/Community/JobInternship', name: 'Post Job / Internship Ad' },
            { url: '/Community/ApplyIntern', name: 'Apply for Funded Intern' }
          ],
          active: null,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      }
    }
  </script>
