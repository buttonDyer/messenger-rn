import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCgMv5FF4MJoLUU3WIv1OWrEHYxK4qwmtQ',
  authDomain: 'messenger-rn-c0aae.firebaseapp.com',
  projectId: 'messenger-rn-c0aae',
  storageBucket: 'messenger-rn-c0aae.appspot.com',
  messagingSenderId: '859636876766',
  appId: '1:859636876766:web:bfa57c21a2994aa0f7094f',
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
