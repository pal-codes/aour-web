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
    <v-layout align-center justify-start>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
     <v-layout align-content-space-around justify-start>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-content-space-around justify-start>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-content-space-around justify-start>
      <v-flex class="view" xs12 sm12 md6 lg3 xl3 d-flex>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
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
  max-height: 20px
}
</style>
