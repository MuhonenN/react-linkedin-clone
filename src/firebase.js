import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDghPaLkUYH3KS-O5F7EoIew9DYxTiDHEQ",
    authDomain: "linkedin-clone-47b11.firebaseapp.com",
    projectId: "linkedin-clone-47b11",
    storageBucket: "linkedin-clone-47b11.appspot.com",
    messagingSenderId: "913070812859",
    appId: "1:913070812859:web:aed9d3653e5ef2c3a2839e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db