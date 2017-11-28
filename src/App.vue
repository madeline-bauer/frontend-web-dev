<template>
  <v-app light>
    <!--<v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i" :to="item.url"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    <v-toolbar flat color="white">
      <a href='/#/'>
        <img :src="require('@/assets/CinCblack.png')" height="40">
      </a>
      <a href = '/#/'>
        <v-toolbar-title>
          <div class="title">CinC @Furman</div>
        </v-toolbar-title>
      </a>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
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
    <v-list class = "hidden-md-and-up">
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i" :to="item.url"
      > <!-- why are these always blue?? -->
        <v-list-tile-action>
          <v-icon dark v-html="item.icon" class="black--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title" class="black--text"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

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
      }
    }
  }
</script>

<style>
.title {
  text-decoration: none;
  color: black;
}
</style>
