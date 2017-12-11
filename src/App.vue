<template>
  <v-app light>

    <v-toolbar flat color="white" class="hidden-sm-and-down">
      <a href='/#/'>
        <v-toolbar-title class="title">Computing in Community</v-toolbar-title>
      </a>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat exact to='/' >Home</v-btn>
        <v-btn flat exact to='/students/ProjectOpportunities'>Students</v-btn>
        <v-btn flat exact to='/faculty/StudentFellow'>Faculty</v-btn>
        <v-btn flat exact to='/courses'>Courses</v-btn>
        <v-btn flat exact to='/community/Information'>Community</v-btn>
        <v-btn flat exact to='/calendar'>Calendar</v-btn>
        <v-btn flat exact to='/blog'>Blog</v-btn>
        <!-- clean up maybe with v-for later -->
      </v-toolbar-items>
    </v-toolbar>
    <v-expansion-panel class = "hidden-md-and-up elevation-0">
      <v-expansion-panel-content>
        <div slot="header">
          <v-layout align-center>
            <div class="title pl-2">Computing in Community</div>
          </v-layout>
        </div>
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :key="i" :to="item.url"
          >
            <v-list-tile-action>
              <v-icon dark v-html="item.icon" class="black--text"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" class="black--text"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { icon: 'home', title: 'Home', url: '/' },
          { icon: 'person', title: 'Students', url: '/students/ProjectOpportunities' },
          { icon: 'local_library', title: 'Faculty', url: '/faculty/StudentFellow' },
          { icon: 'school', title: 'Courses', url: '/courses' },
          { icon: 'people', title: 'Community', url: '/community/Information' },
          { icon: 'today', title: 'Calendar', url: '/calendar' },
          { icon: 'web', title: 'Blog', url: '/blog' },
        ],
        miniVariant: false,
        rightDrawer: false,
        //isadmin: false,
      }
    }
  }
</script>
<style>
.title {
  text-decoration: none;
  color: black;
  height: 25px;
}
</style>
