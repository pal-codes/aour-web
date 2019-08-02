<template>
  <v-app>
    <v-app-bar absolute dark>
      <v-toolbar-title>aour</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Home</v-btn>
        <v-btn flat>My Orders</v-btn>
        <v-btn flat @click="logout">Log Out</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
     <v-layout align-center justify-center>
       <v-flex xs12 sm10 md8 lg4>
     <v-text-field outline label="Location for nearby stores" append-icon="place"></v-text-field>
       </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-btn class="search" color="#242424" rounded>Upload</v-btn>
    </v-layout>
    </v-content>
  </v-app>
</template>


<script>
import firebase from "firebase";

export default {
  name: "dashboard",
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>



<style scoped>
.search {
  border-radius: 86px;
  height: 80px;
  width: 200px;
  color: white;
}
</style>


// :hover{
//     box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
// };