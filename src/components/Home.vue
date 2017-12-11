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
            <img :src="require('@/assets/CinCwhite.png')" alt="Computing in Community" height="300">
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          class="pb-4"
        >
          <v-flex xs12 class="my-3">
              <div class="stretch text-xs-center subheading">{{missionStatement}}</div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <a href='/#/students/ProjectOpportunities'>
                    <v-card class="mainContainer" hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Madeline.jpg')"
                      >
                      <v-container fill-height class="mainCard">
                        <v-layout align-center>
                            <v-flex class="display-2 white--text text-xs-center">Students</v-flex>
                        </v-layout>
                      </v-container>
                      </v-card-media>
                    </v-card>
                  </a>
                </v-flex>
                <v-flex xs12 md6>
                  <a href='/#/faculty/StudentFellow'>
                    <v-card class="mainContainer" hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Treu.jpg')"
                      >
                      <v-container fill-height class="mainCard">
                        <v-layout align-center>
                            <v-flex class="display-2 white--text text-xs-center">Faculty</v-flex>
                        </v-layout>
                      </v-container>
                      </v-card-media>
                    </v-card>
                  </a>
                </v-flex>
                <v-flex xs12 md6>
                  <a href='/#/courses'>
                    <v-card class="mainContainer" hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Class.jpg')"
                      >
                        <v-container fill-height class="mainCard">
                          <v-layout align-center>
                              <v-flex class="display-2 white--text text-xs-center">Courses</v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                    </v-card>
                  </a>
                </v-flex>
                <v-flex xs12 md6>
                  <a href='/#/community/Information'>
                    <v-card class="mainContainer" hover>
                      <v-card-media
                      height="300px"
                      :src="require('@/assets/Jasmine.jpg')"
                      >
                        <v-container fill-height class="mainCard">
                          <v-layout align-center>
                              <v-flex class="display-2 white--text text-xs-center">Community</v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                    </v-card>

                  </a>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('@/assets/blue.png')" height = "400">
          <v-layout
            row
            align-center
            justify-center
            class="white--text"
          >
            <v-flex xs12 md6 class=" text-xs-center subheading">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</v-flex>
          </v-layout>
        </v-parallax>
      </section>

      <section>
         <v-container grid-list-xl>
           <v-layout row wrap align-center class="my-5">
             <v-flex xs12 md6>
               <v-card class="elevation-0 transparent">
                 <v-card-title primary-title class="layout justify-center">
                   <div class="headline">CinC</div>
                 </v-card-title>
                 <v-card-text>
                   {{siteDescription}}
                 </v-card-text>
               </v-card>
             </v-flex>
             <v-flex xs10 md4 offset-xs1 offset-md1>
               <v-card class="elevation-0 transparent">
                 <v-card-title primary-title class="layout justify-center">
                   <div class="headline">Social Media</div>
                 </v-card-title>
                 <v-card-text>
                   <v-layout row-wrap align-center>
                     <v-flex xs4 class="text-xs-center">
                       <a href="https://www.facebook.com/Furman-University-Computer-Science-130685927004923/" target="_blank">
                         <img :src="require('@/assets/facebook.svg')" alt="Facebook" height="48">
                       </a>
                     </v-flex>
                     <v-flex xs4 class="text-xs-center">
                       <a>
                         <img :src="require('@/assets/twitter.svg')" alt="Twitter" height="48">
                       </a>
                     </v-flex>
                     <v-flex xs4 class="text-xs-center">
                       <a href="https://www.instagram.com/furmancompsci/" target="_blank">
                         <img :src="require('@/assets/instagram.svg')" alt="Instagram" height="48">
                       </a>
                     </v-flex>
                   </v-layout>
               </v-card-text>
               </v-card>
             </v-flex>
           </v-layout>
         </v-container>
       </section>





    </main>
</template>

<style>
a{
  text-decoration:none
}
.mainCard{
  height: 100%;
  background-color: #303030;
  opacity: 0.55;
  display:none!important;
}
.mainContainer:hover .mainCard{
  display: block!important;

}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      missionStatement: "",
      siteDescription: ""
    }
  },
  created() {
    axios.get('http://localhost:3000/siteContent')
      .then(response => {
        this.missionStatement = response.data[0].value;
        this.siteDescription = response.data[1].value;
      })
  }
}
</script>
