<template>
  <v-layout row wrap>
    <v-flex xs12 md3 class="py-3 px-3">
      <v-card >
        <v-card-title primary-title>
          <div class="headline">Lorem Ipsum</div>
        </v-card-title>
        <v-card-text>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </v-card-text>
        <v-btn flat
          >
          Upload
          <v-icon class = "black--text" right dark>cloud_upload</v-icon>
        </v-btn>
      </v-card>
    </v-flex>
    <v-flex xs12 md9 class="px-3 py-3">
      <iframe src="https://pdfobject.com/pdf/sample-3pp.pdf" width="100%" height="1000">
        This browser does not support PDFs. Please download the PDF to view it: <a "href=https://pdfobject.com/pdf/sample-3pp.pdf">Download PDF</a>
      </iframe>
    </v-flex>
  </v-layout>
</template>


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