import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_inEnN_wOK43tGPgHmKZlhQridzWKXG0",
  authDomain: "linkedin-clone-f03aa.firebaseapp.com",
  projectId: "linkedin-clone-f03aa",
  storageBucket: "linkedin-clone-f03aa.appspot.com",
  messagingSenderId: "279582543970",
  appId: "1:279582543970:web:304d60a1ffc4b20ed6013b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
