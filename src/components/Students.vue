<template>
  <main>

    <section>
      <v-parallax :src="require('@/assets/purple.jpg')" height="450">
        <v-layout column align-center justify-center class="white--text">
          <img :src="require('@/assets/Students.png')" alt="Furman" height="300">
          <!--<h1 class="white--text mb-2 display-3">Computing in Community</h1>-->
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container>
        <v-layout row wrap>
          <template>
            <v-flex xs6 class="px-2 py-2">
              <v-layout row wrap>
                <v-flex xs12 class="px-2">
                  <div>
                    <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search" v-bind:pagination.sync="pagination" hide-actions class="elevation-1">
                      <template slot="items" scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.desc }}</td>
                        <td class="text-xs-right">{{ props.item.link }}</td>
                      </template>
                    </v-data-table>
                    <div class="text-xs-center pt-2">
                      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
                    </div>
                  </div>
                </v-flex>
                <v-flex xs12 class="px-2">
                  <div>
                    <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search" v-bind:pagination.sync="pagination2" hide-actions class="elevation-1">
                      <template slot="items" scope="props">
                        <td>{{ props.item.blog }}</td>
                        <td class="text-xs-right">{{ props.item.excerpt }}</td>
                        <td class="text-xs-right">{{ props.item.attatch }}</td>
                      </template>
                    </v-data-table>
                    <div class="text-xs-center pt-2">
                      <v-pagination v-model="pagination2.page" :length="pages"></v-pagination>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs6 class="px-2 py-2">
              <div>
                <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search" v-bind:pagination.sync="pagination3" hide-actions class="elevation-1">
                  <template slot="items" scope="props">
                    <td>{{ props.item.blog }}</td>
                    <td class="text-xs-right">{{ props.item.excerpt }}</td>
                    <td class="text-xs-right">{{ props.item.attatch }}</td>
                  </template>
                </v-data-table>
                <div class="text-xs-center pt-2">
                  <v-pagination v-model="pagination3.page" :length="pages"></v-pagination>
                </div>
              </div>
            </v-flex>
          </template>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {
          sortBy: 'column', page: 1, rowsPerPage: 4, descending: false, totalItems: 0
        },
        pagination2: {
          sortBy: 'column', page: 1, rowsPerPage: 4, descending: false, totalItems: 0
        },
        pagination3: {
          sortBy: 'column', page: 1, rowsPerPage: 10, descending: false, totalItems: 0
        },
        selected: [],
        headers: [
          {
            text: 'Student Resources',
            align: 'left',
            sortable: false,
            value: 'name'
          }
        ],
        items: [
          {
            value: false,
            name: 'Resource1',
            desc: 'Description1',
            link: 'Link1'
          },
          {
            value: false,
            name: 'Resource2',
            desc: 'Description2',
            link: 'Link2'
          },
          {
            value: false,
            name: 'Resource3',
            desc: 'Description3',
            link: 'Link3'
          },
          {
            value: false,
            name: 'Resource4',
            desc: 'Description4',
            link: 'Link4'
          },
          {
            value: false,
            name: 'Resource5',
            desc: 'Description5',
            link: 'Link5'
          },
          {
            value: false,
            name: 'Resource6',
            desc: 'Description6',
            link: 'Link6'
          },
          {
            value: false,
            name: 'Resource7',
            desc: 'Description7',
            link: 'Link7'
          },
          {
            value: false,
            name: 'Resource8',
            desc: 'Description8',
            link: 'Link8'
          },
          {
            value: false,
            name: 'Resource9',
            desc: 'Description9',
            link: 'Link9'
          },
          {
            value: false,
            name: 'Resource10',
            desc: 'Description10',
            link: 'Link10'
          }
        ]
      }
    },
    computed: {
      pages () {
        return this.pagination.rowsPerPage ? Math.ceil(this.items.length / this.pagination.rowsPerPage) : 0
      }
    }
  }
</script>