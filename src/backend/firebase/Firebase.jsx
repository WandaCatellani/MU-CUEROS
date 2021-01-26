import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp ({
  apiKey: "AIzaSyC4XO3WThCjkRCjQkdF5BOrb3i6lVM3kiA",
  authDomain: "mu-cueros.firebaseapp.com",
  projectId: "mu-cueros",
  storageBucket: "mu-cueros.appspot.com",
  messagingSenderId: "188763149920",
  appId: "1:188763149920:web:75941917e63768fc115505",
});

// Instancia de la app ya iniciada
/* const app = firebase.initializeApp(firebaseConfig); */

// Instancia de Firestore
// export const getfirestore = firebase.firestore(app)

/* export const getFirestore = () => {
  return firebase.firestore(app)
} */

export const getFirebase = () => {
  return app;
}

// Para llamar a la base de datos
export const getFirestore = () => {
  return firebase.firestore();
}