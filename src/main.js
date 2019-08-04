import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import Vuetify from 'vuetify';

let app = ''

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAQjw7FGBRap0TrQ4GtpXtp6D-llxjzd0s",
  authDomain: "aour-822d6.firebaseapp.com",
  databaseURL: "https://aour-822d6.firebaseio.com",
  projectId: "aour-822d6",
  storageBucket: "aour-822d6.appspot.com",
  messagingSenderId: "502499777307",
  appId: "1:502499777307:web:341e15bad07c405b"
}

firebase.initializeApp(firebaseConfig)

// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     /* eslint-disable no-new */
//     app = new Vue({
//       router,
//       render: h => h(App)
//     }).$mount('#app');
//   }
// });

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
