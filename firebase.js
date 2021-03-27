
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCQdSwHmxUgKw0QbfUBAwaFghdbex8t8Uc",
    authDomain: "heartbeat-b8d41.firebaseapp.com",
    projectId: "heartbeat-b8d41",
    storageBucket: "heartbeat-b8d41.appspot.com",
    messagingSenderId: "616839714815",
    appId: "1:616839714815:web:948ebfd96ea21b1e4239ca"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.firestore()
  firebase.auth()

  export default firebase
