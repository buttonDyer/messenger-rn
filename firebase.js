import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCgMv5FF4MJoLUU3WIv1OWrEHYxK4qwmtQ',
  authDomain: 'messenger-rn-c0aae.firebaseapp.com',
  projectId: 'messenger-rn-c0aae',
  storageBucket: 'messenger-rn-c0aae.appspot.com',
  messagingSenderId: '859636876766',
  appId: '1:859636876766:web:bfa57c21a2994aa0f7094f',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
