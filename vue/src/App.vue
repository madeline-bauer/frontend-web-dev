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
      <v-toolbar-title>Computing in Community</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat exact to='/' >Home</v-btn>
        <v-btn flat exact to='/hello'>Students</v-btn>
        <v-btn flat exact to='/faculty'>Faculty</v-btn>
        <v-btn flat exact to='/community'>Community Partners</v-btn>
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
          <v-icon dark v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
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
          { icon: 'home', title: 'Students', url: '/hello' },
          { icon: 'home', title: 'Faculty', url: '/faculty' },
          { icon: 'home', title: 'Community Partners', url: '/community' },
          { icon: 'home', title: 'Calendar', url: '/calendar' },
          { icon: 'home', title: 'Blog', url: '/blog' },
        ],
        miniVariant: false,
        rightDrawer: false,
      }
    }
  }
</script>
