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
        <img :src="require('@/assets/web.svg')" alt="Blog" height="200">
        <h4>Blog</h4>
      </v-layout>
    </v-parallax>
  </section>


  <section>
    <v-layout fill-height fluid>
      <v-flex xs12 md4>
        <v-flex md10 offset-md1>
        <v-card  class="my-3">
            <v-card-title primary-title>
              <div class="headline">Lorem Ipsum</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat slot="activator">Submit Blog Post</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        </v-flex>

    </v-flex>
    <v-flex xs12 md8>
      <v-flex md11>
      <div v-for="post in posts" :key="post.id">
        <v-card class="my-3" hover>
          <v-card-media
          class=""
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ post.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-text>
          {{ post.content }}
        </v-card-text>
        <v-card-actions>
          <v-btn flat v-on:click="">Edit</v-btn>
          <v-btn flat v-on:click="">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-flex>
  </v-flex>
</v-layout>
</section>


</main>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      posts: [
        {
          id: 1,
          title: 'Fusce ullamcorper tellus sed maximus',
          content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
        },
        {
          id: 2,
          title: 'Donec vitae suscipit lectus, a luctus diam.',
          content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi. Aenean arcu sapien, rutrum nec mollis id, condimentum quis orci.',
        },
        {
          id: 3,
          title: 'Vestibulum condimentum quam eu est convallis',
          content: ' at sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo. Quisque gravida, est quis tincidunt bibendum, nibh elit dapibus mauris.',
        }
      ]
    }
  }
}
</script>
