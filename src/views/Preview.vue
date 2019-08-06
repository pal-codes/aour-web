<template>
    <v-app>
    <v-toolbar dark absolute>
    <v-toolbar-title>aour</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>Home</v-btn>
      <v-btn text>My Orders</v-btn>
      <v-btn text @click="logout">Log out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-layout align-content-space-around justify-start row>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-text-field
        solo
        label="No of copies"
        ></v-text-field>
        <v-select
          :items="items"
          label="Paper Size"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
     <v-layout align-content-space-around justify-start row>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-select
          :items="items"
          label="Page Type"
          solo
        ></v-select>
        <v-select
          :items="items"
          label="Two Sided"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-content-space-around justify-start row>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-select
          :items="items"
          label="Color"
          solo
        ></v-select>
        <v-select
          :items="items"
          label="Pages"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-content-space-around justify-start row>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-select
          :items="items"
          label="Orientation"
          solo
        ></v-select>
        <v-select
          :items="items"
          label="Photos on one page"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-start>
      <v-flex offset-xs5 offset-sm5 offset-md6 offset-lg1 xl6>
      <h4>Price:</h4>
      </v-flex>
    </v-layout>
</v-app>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Preview',
    methods: {
        logout: {
            function () {
                firebase.auth().signOut
                .then(() => {
                    this.$router('/preview')
                })
            }
        }
    }
}
</script>

<style>
.view{
  padding: 30px;
  height: 20px
};
.showprice{
  padding: 40px 
}
</style>
