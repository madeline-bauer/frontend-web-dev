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
        <img :src="require('@/assets/school.svg')" alt="Courses" height="200">
        <h4>Courses</h4>
      </v-layout>
    </v-parallax>
  </section>

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
              <v-btn flat slot="activator">Suggest a Course</v-btn>
              <v-card>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-card-title>
                    <span class="headline">Suggest a Course</span>
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
                            label="Term"
                            v-model="term"
                            :rules="rules"
                            required
                          >
                          </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field
                            label="Description"
                            v-model="description"
                            :rules="rules"
                            required
                          >
                          </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field
                            label="Instructor"
                            v-model="instructor"
                            :rules="rules"
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
        <v-card class="my-3">
          <v-card-title class="headline">
            Existing Cinc Courses
            <v-spacer></v-spacer>
            <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
          v-bind:headers="headers"
          v-bind:items="existingCourses"
          v-bind:search="search"
          >
            <template slot="items" scope="props">
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.term }}</td>
              <td class="text-xs-right">{{ props.item.description }}</td>
              <td class="text-xs-right">{{ props.item.instructor }}</td>
            </template>
            <template slot="pageText" scope="{ pageStart, pageStop }">
              From {{ pageStart }} to {{ pageStop }}
            </template>
          </v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 md3>
      </v-flex>

      <v-flex xs12 md8>
        <v-card class="my-3">
          <v-card-title class="headline">
            Suggested Cinc Courses
            <v-spacer></v-spacer>
            <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
          v-bind:headers="headers"
          v-bind:items="suggestedCourses"
          v-bind:search="search"
          >
            <template slot="items" scope="props">
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.term }}</td>
              <td class="text-xs-right">{{ props.item.description }}</td>
              <td class="text-xs-right">{{ props.item.instructor }}</td>
            </template>
            <template slot="pageText" scope="{ pageStart, pageStop }">
              From {{ pageStart }} to {{ pageStop }}
            </template>
          </v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 md3>
      </v-flex>
      <v-flex xs12 md8 v-if="Boolean(isadmin == true)">
        <v-card class="my-3">
          <v-card-title class="headline">
            Suggested Unapproved Cinc Courses
            <v-spacer></v-spacer>
            <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
          v-bind:headers="headers"
          v-bind:items="suggestedUnapprovedCourses"
          v-bind:search="search"
          >
            <template slot="items" scope="props">
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.term }}</td>
              <td class="text-xs-right">{{ props.item.description }}</td>
              <td class="text-xs-right">{{ props.item.instructor }}</td>
            </template>
            <template slot="pageText" scope="{ pageStart, pageStop }">
              From {{ pageStart }} to {{ pageStop }}
            </template>
          </v-data-table>
        </v-card>
      </v-flex>

      <v-flex xs12 md3>
      </v-flex>

      <v-flex xs12 md8 v-if="Boolean(isadmin == true)">
        <div v-for="suggestedUnapprovedCourse in suggestedUnapprovedCourses"
          :key="suggestedUnapprovedCourse.id">
          <v-card class="my-3">
            <v-card-title class="headline">
              {{suggestedUnapprovedCourse.name}}
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
              {{suggestedUnapprovedCourse.description}}
            </v-card-text>
            <v-card-media>
                <v-btn
                  flat
                  @click="submitApprove(suggestedUnapprovedCourse._id)">
                  Approve
                </v-btn>
                <v-btn
                  flat
                  @click="deleteEntry(suggestedUnapprovedCourse._id)">
                  Delete
                </v-btn>
            </v-card-media>
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
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        token: '',
        pagination: {},
        headers: [
          { text: 'Courses', value: 'name' },
          { text: 'Term', value: 'term' },
          { text: 'Description', value: 'description' },
          { text: 'Instructor(s)', value: 'instructor' }
        ],
        existingCourses: [],
        suggestedCourses: [],
        suggestedUnapprovedCourses: [],
        dialog: false,
        valid: true,
        isadmin: '',
        name: '',
        term: '',
        description:'',
        instructor:'',
        rules: [
            (v) => !!v || 'Item is required'
        ],
      }
    },
    created() {
      var token=localStorage.getItem("accessToken");
      if(token){
        this.isadmin=true;
      }
      axios.get('http://home.tcj.design:3000/courses')
        .then(response => {
          var size = response.data.length;
          var i;
          for (i = 0; i < size; i++){
            if (response.data[i].type === 'offered' && response.data[i].approved){
              this.existingCourses.push({
                value: false,
                name: response.data[i].name,
                term: response.data[i].when,
                description: response.data[i].description,
                instructor: response.data[i].profname,
                _id: response.data[i]._id,
              });
            }
            else if (response.data[i].type === 'suggested' && response.data[i].approved){
              this.suggestedCourses.push({
                value: false,
                name: response.data[i].name,
                term: response.data[i].when,
                description: response.data[i].description,
                instructor: response.data[i].profname,
                _id: response.data[i]._id,
              });
            }
            else if (response.data[i].type === 'suggested' && !(response.data[i].approved)){
              this.suggestedUnapprovedCourses.push({
                value: false,
                name: response.data[i].name,
                term: response.data[i].when,
                description: response.data[i].description,
                instructor: response.data[i].profname,
                _id: response.data[i]._id,
                approved: response.data[i].approved,
              });
            }
          }
        })
    },
    methods: {
      submit() {
        var obj = new Object();
        obj.name = this.name;
        obj.when= this.term;
        obj.description = this.description;
        obj.profname = this.instructor;
        obj.approved = false;
        obj.type = "suggested";
        console.log(this.name + this.term+ this.description + this.instructor)
        axios.post('http://home.tcj.design:3000/courses', obj)
        .then(function (response) {
            console.log(response);
          })
        this.dialog = false;
      },
      deleteEntry(courseId) {
        if (isadmin==true){
        console.log(courseId)
        axios.delete('http://home.tcj.design:3000/courses', {
          data: { _id: courseId } // use data: not params. data is the request body, params are part of the url string -tcj 12-5-17
        })
        window.location.reload(true); //messy way to show changes - also doesn't work
        }
      },
      submitApprove(courseId) {
        if (isadmin==true){
        axios.get('http://home.tcj.design:3000/courses', {
          params: {_id: courseId }
        })
          .then(response => {
            var obj = response.data[0];
            obj.approved = true;
            axios.post('http://home.tcj.design:3000/courses', obj)
            .then(function (response) {
                console.log(response);
                })
            this.deleteEntry(courseId)
          })

        }
      },

    }


  }
</script>
