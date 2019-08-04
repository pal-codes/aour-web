<template>
    <v-app>
    <v-content>
      <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg4>
          <h1>aour</h1>
          <h2 class="display-1">Print from anywhere</h2>
          <v-card ref="form" class="sheetrad">
            <v-card-text>
              <v-text-field
                color="#000000"
                ref="name"
                outlined
                rounded
                v-model="name"
                label="Full Name"
                required
              ></v-text-field>
              <v-text-field color="#000000" ref="email" outlined rounded v-model="email" label="Email" required></v-text-field>
              <v-text-field color="#000000" ref="password" outlined rounded v-model="password" type="password" label="Password" required></v-text-field>
              <v-text-field color="#000000" ref="ph" outlined rounded v-model.number="phone" label="Ph. Number" required></v-text-field>
            </v-card-text>
            <v-card-actions>
              <h3>Existing user?</h3>
              <router-link to="/login"><v-btn dark large rounded>Login</v-btn></router-link>
              <v-spacer></v-spacer>
              <v-btn rounded dark large @click="submit">Sign Up</v-btn>
            </v-card-actions>
            <v-divider></v-divider>
            <v-layout justify-center>
          <v-btn class="google" light rounded x-large elevation="8">Continue with Google</v-btn>
          </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
    </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Signup',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            phone: ''
        }
    },
    methods: {
        submit: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( 
                function(user) {
                    alert('Your account is created')
                },
                function(err) {
                    alert(err.message)
                }
            )
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
.google{
  justify-content: center;
  margin-top: 20px;
}
.sheetrad {
  border-radius: 50px;
  padding: 30px;
  margin: 20px;
}
</style>
