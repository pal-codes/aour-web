<template>
  <v-app>
    <h1>Hello</h1>
    <h2>This is a test run</h2>
    <v-content>
      <v-app-bar>
        welcome to aour
      </v-app-bar>
    </v-content>
  </v-app>
</template>


<script>
import firebase from "firebase";

export default {
  name: "Dashboard",
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

</style>


// :hover{
//     box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
// };