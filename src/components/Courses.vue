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
    <v-container fill-height fluid>
      <v-flex xs12 md8 offset-md2>
        <v-card>
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
    </v-container>
    <v-container fill-height fluid>
      <v-flex xs12 md8 offset-md2>
        <v-card>
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
    </v-container>
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
        pagination: {},
        headers: [
          { text: 'Courses', value: 'name' },
          { text: 'Term', value: 'term' },
          { text: 'Description', value: 'description' },
          { text: 'Instructor(s)', value: 'instructor' }
        ],
        existingCourses: [],
        suggestedCourses: []
      }
    },
      created() {
        axios.get('http://localhost:3000/courses')
          .then(response => {
            var size = response.data.length;
            var i;
            for (i = 0; i < 4; i++){
              if (response.data[i].type === 'offered' && response.data[i].approved){
                this.existingCourses.push({
                  value: false,
                  name: response.data[i].name,
                  term: response.data[i].when,
                  description: response.data[i].description,
                  instructor: response.data[i].profname,
                });
              }
              else if (response.data[i].type === 'suggested' && response.data[i].approved){
                this.suggestedCourses.push({
                  value: false,
                  name: response.data[i].name,
                  term: response.data[i].when,
                  description: response.data[i].description,
                  instructor: response.data[i].profname,
                });
              }
            }
          })
      }

  }
</script>
