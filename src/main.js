import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAQjw7FGBRap0TrQ4GtpXtp6D-llxjzd0s",
  authDomain: "aour-822d6.firebaseapp.com",
  databaseURL: "https://aour-822d6.firebaseio.com",
  projectId: "aour-822d6",
  storageBucket: "aour-822d6.appspot.com",
  messagingSenderId: "502499777307",
  appId: "1:502499777307:web:6f55fe03aa8eeb41"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
