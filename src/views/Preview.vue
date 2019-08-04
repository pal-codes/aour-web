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
  <v-layout align-end justify-center>
    <v-flex xs10 sm10 md8 lg4 xl4>
      <v-text-field class="search" solo rounded type="text" append-icon="place" label="Locate nearby stores"></v-text-field>
    </v-flex>
  </v-layout>
  <v-layout align-start justify-center>
      <v-btn x-large dark elevation="7" rounded>Upload</v-btn>
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

</style>
