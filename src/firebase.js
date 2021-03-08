import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDKsEGW9H1lCZx27hy-5si1IfE084XAOzo',
  authDomain: 'netflix-clone-ccb6e.firebaseapp.com',
  projectId: 'netflix-clone-ccb6e',
  storageBucket: 'netflix-clone-ccb6e.appspot.com',
  messagingSenderId: '255935253017',
  appId: '1:255935253017:web:849d8eb783828ebfd0b888'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
