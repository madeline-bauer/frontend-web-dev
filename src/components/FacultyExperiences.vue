<template>
  <main>
    <section>
      <v-layout row justify-space-around wrap>
        <v-flex xs12 md3>
          <v-card  class="my-3" >
            <v-card-title primary-title>
              <div class="headline">Lorem Ipsum</div>
            </v-card-title>
            <v-card-text>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <v-btn flat slot="activator">Submit Experience</v-btn>
                <v-card>
                  <v-form v-model="valid" ref="form" lazy-validation>
                    <v-card-title>
                      <span class="headline">Submit Experience</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12>
                            <v-text-field
                              label="Name"
                              v-model="name"
                              :rules="rules"
                              required
                            >
                            </v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field
                              label="Title"
                              v-model="title"
                              :rules="rules"
                              required
                            >
                            </v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field
                              name="input-7-1"
                              label="Body"
                              v-model="body"
                              :rules="rules"
                              multi-line
                              required
                            >
                            </v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat @click="submit" :disabled="!valid">Submit</v-btn>
                      <v-btn flat @click.native="dialog = false">Close</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <div v-for="post in posts" :key="post.id">
            <v-card class="my-3" hover>
              <v-card-title>
                <span class="headline">{{ post.title }}</span>
              </v-card-title>
              <v-card-text>
                <span>{{ post.content }}</span>
                <v-container>
                  <v-flex xs12>
                    <span>- {{ post.author }}</span>
                  </v-flex>
                  <v-flex xs12>
                    <span>{{ post.date }}</span>
                  </v-flex>
                </v-container>
              </v-card-text>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </section>


  </main>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      dialog: false,
      editDialog: false,
      valid: true,
      name: '',
      title: '',
      body:'',
      rules: [
          (v) => !!v || 'Item is required'
      ],
      posts: []
    }
  },
  created() {
    axios.get('http://home.tcj.design:3000/posts')
      .then(response => {
        var size = response.data.length;
        var i;
        for (i = 0; i < size; i++){
          if (response.data[i].approved && response.data[i].tags.faculty){
            this.posts.push({
              title: response.data[i].title,
              date: response.data[i].postdate,
              content: response.data[i].text,
              author: response.data[i].authorName,
            });
          }
        }
      })
  },
  methods: {
    submit() {
      var obj = new Object();
      obj.authorName = this.name;
      obj.title = this.title;
      obj.text = this.body;
      obj.approved = false;
      var tagsObj = new Object();
      tagsObj.faculty = true;
      obj.tags = tagsObj;
      console.log(this.name + this.title + this.body)
      axios.post('http://home.tcj.design:3000/posts', obj)
      .then(function (response) {
          console.log(response);
        })
      this.dialog = false
    },
    deleteEntry(postId) {
      console.log(postId)
      axios.delete('http://home.tcj.design:3000/posts', {
        data: { _id: postId } // use data: not params. data is the request body, params are part of the url string -tcj 12-5-17
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
