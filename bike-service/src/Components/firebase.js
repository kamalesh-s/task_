import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDS3jAUdCRO05iLlbpMWU5JnCs-SOyFIMA",
    authDomain: "bike-service-2c3a2.firebaseapp.com",
    projectId: "bike-service-2c3a2",
    storageBucket: "bike-service-2c3a2.appspot.com",
    messagingSenderId: "1062157037953",
    appId: "1:1062157037953:web:c06a13d99c50485299b880",
    measurementId: "G-MPP73PR5MP"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
