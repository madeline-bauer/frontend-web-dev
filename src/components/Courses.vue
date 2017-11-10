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
              <td class="text-xs-right">{{ props.item.location }}</td>
              <td class="text-xs-right">{{ props.item.meeting }}</td>
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
              <td class="text-xs-right">{{ props.item.location }}</td>
              <td class="text-xs-right">{{ props.item.meeting }}</td>
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
  export default {
    data () {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Courses', value: 'name' },
          { text: 'Term', value: 'term' },
          { text: 'Description', value: 'description' },
          { text: 'Location', value: 'location' },
          { text: 'Meeting Time', value: 'meeting' },
          { text: 'Instructor(s)', value: 'instructor' }
        ],
        existingCourses: [
          {
            value: false,
            name: 'CSC-342',
            term: 'Fall 2017',
            description: 'Web-based application design',
            location: 'Riley 204',
            meeting: 'MWF 11:30-12:20',
            instructor: 'Treu',
          },
          {
            value: false,
            name: 'CSC-105',
            term: 'Spring 2018',
            description: 'Introduction to Computer Science',
            location: 'Riley 108',
            meeting: 'TR 11:00-12:15',
            instructor: 'Tartaro',
          }
        ],
        suggestedCourses: [
          {
            value: false,
            name: 'CSC-999',
            term: 'Fall 9999',
            description: 'CLASSSS',
            location: 'Everywhere',
            meeting: 'Always',
            instructor: 'Everyone',
          },
          {
            value: false,
            name: 'CSC-000',
            term: 'Spring 0000',
            description: '------',
            location: 'Nowhere',
            meeting: 'Never',
            instructor: 'No one',
          }
        ]
      }
    }
  }
</script>
