<template>
    <v-app>
    <v-content>
      <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg4>
          <h1>aour</h1>
          <h2 class="display-1">Print from anywhere</h2>
          <v-card ref="form" class="sheetrad">
            <v-card-text>
              <v-text-field color="#000000" ref="email" outlined rounded v-model="email" label="Email" required></v-text-field>
              <v-text-field color="#000000" ref="password" outlined rounded v-model="password" label="Password" type="password" required></v-text-field>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
              <router-link to="/"><v-btn color="grey darken-3 white--text" rounded>Sign Up</v-btn></router-link>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-3 white--text" rounded @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
    </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=> {
                this.$router.replace('dashboard')
            })
        }
    }
}
</script>

<style>
h1,
h2 {
  size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
.signup {
  background: white;
  margin: 2em;
}
.in{
  border-color: lightgray;
}
.sheetrad {
  margin: 20px;
  border-radius: 30px;
  padding: 60px;
}
</style>
