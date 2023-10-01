import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateCurrentUser,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYcKvcnsHkeGblbn5RoaO-Gx9t-AUCN6Y",
  authDomain: "weather-app-bfb20.firebaseapp.com",
  databaseURL: "https://weather-app-bfb20-default-rtdb.firebaseio.com",
  projectId: "weather-app-bfb20",
  storageBucket: "weather-app-bfb20.appspot.com",
  messagingSenderId: "501192899765",
  appId: "1:501192899765:web:64f90915450d79144152fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

export const signUpFunc = (username, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("The User was created : ", cred.user);
      if (auth.currentUser) {
        updateCurrentUser(auth.currentUser, {
          displayName: username,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
